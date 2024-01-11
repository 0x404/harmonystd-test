from dataclasses import dataclass
from tabulate import tabulate
from collections import defaultdict
from pathlib import Path
import os
import re
import pandas


def icon(what: str):
    return f":{what}:"


def warp_code(code: str, language: str):
    return f"```{language}\n{code}\n```"


ArkTS_API_URL_MAP = {
    "@ohos.util.Deque": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-deque-0000001427745116-V3#ZH-CN_TOPIC_0000001523648606",
    "@ohos.util.HashMap": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashmap-0000001478181697-V3#ZH-CN_TOPIC_0000001574248653",
    "@ohos.util.LinkedList": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-linkedlist-0000001427902748-V3#ZH-CN_TOPIC_0000001573928869",
    "@ohos.util.List": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889",
    "@ohos.util.Queue": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-queue-0000001427745120-V3#ZH-CN_TOPIC_0000001573929045",
    "@ohos.util.Stack": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-stack-0000001478181701-V3#ZH-CN_TOPIC_0000001574128397",
    "@ohos.util.Vector": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-vector-0000001477981485-V3#ZH-CN_TOPIC_0000001523488906",
    "@ohos.util.PlainArray": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470",
    "@ohos.util.TreeMap": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treemap-0000001478341441-V3#ZH-CN_TOPIC_0000001523488482",
    "@ohos.util.TreeSet": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treeset-0000001478061981-V3#ZH-CN_TOPIC_0000001574248293",
    "@ohos.util.ArrayList": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-arraylist-0000001427585156-V3#ZH-CN_TOPIC_0000001523488842",
    "@ohos.util.HashSet": "https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325",
}


@dataclass
class TestResult:
    time: str = "0 ms"
    platform: str = "Huawei Phone"

    def normalize_time(self):
        t = float(self.time.strip("ms").strip())
        self.time = f"{t:.6f} ms"


@dataclass
class TestCase:
    id: int
    target: str
    description: str
    code: str
    results: list[TestResult] = None
    subid: int = 0

    def render_markdown(self):
        rstr = f"{icon('keyboard')} 测试用例 {self.subid}: {self.description} \n\n"
        rstr += warp_code(self.code, "typescript") + "\n"
        return rstr


@dataclass
class APITest:
    target: str
    test_cases: list[TestCase]

    def render_result_markdown(self):
        headers = ["测试用例", "测试平台", "运行时间"]
        test_cases = sorted(self.test_cases, key=lambda t: t.subid)

        table = []
        for case in test_cases:
            for result in case.results:
                result.normalize_time()
                table.append(
                    [f"测试用例 {case.subid}", f"[{result.platform}]", result.time]
                )

        return tabulate(table, headers=headers, tablefmt="pipe")

    def render_markdown(self):
        rstr = f"### {self.target}\n\n"

        if api_url := resolve_api_url(self.target) is not None:
            rstr += f"{icon('book')} [官方API文档]({resolve_api_url(self.target)})\n\n"

        self.test_cases.sort(key=lambda t: t.subid)
        for case in self.test_cases:
            rstr += case.render_markdown()

        rstr += f"{icon('joystick')} 测试结果\n\n"
        rstr += self.render_result_markdown() + "\n"
        return rstr


def resolve_api_url(api: str):
    if not api.startswith("@ohos.util"):
        return None
    test_class = ".".join(api.split(".")[:-1])
    method = api.split(".")[-1]
    if test_class not in ArkTS_API_URL_MAP:
        raise ValueError(f"{test_class}没有记录在ArkTS_API_URL_MAP")
    return ArkTS_API_URL_MAP[test_class] + f"__{method}"


def resolve_test_case(code: str):
    code_lines = code.splitlines()
    target = None
    description = None
    id = None

    for line in code_lines:
        line = line.strip()
        if line.startswith("// test:"):
            if "@" in line:
                target = line[line.find("@") :].strip()
            else:
                target = line.lstrip("// test:")
        if line.startswith("// desc:"):
            description = line.strip("// desc:")
        if line.startswith("const test_id ="):
            id = int(line.split("=")[-1][:-1].strip())

    if target is None:
        raise ValueError(f"{code_lines[0]} 没有test字段")
    if description is None:
        raise ValueError(f"{code_lines[0]} 没有desc字段")
    if id is None:
        raise ValueError(f"{code_lines[0]} 没有test_id字段")

    cleaned_code_lines = [
        line
        for line in code_lines
        if len(line.strip()) > 0
        and not line.strip().startswith("//")
        and not line.strip().startswith("const test_id")
    ]
    cleaned_code = "\n".join(cleaned_code_lines)
    return TestCase(id=id, target=target, description=description, code=cleaned_code)


def resolve_arkts_file(test_dir: str):
    test_dir = Path(test_dir)
    with open(test_dir.joinpath("test.ts"), "r", encoding="utf-8") as f:
        code_lines = f.readlines()

    index = 0
    status = 0
    start_index = 0
    test_cases = []

    while index < len(code_lines):
        line = code_lines[index].strip()
        if line.startswith("function") and status == 0:
            start_index = index
            status = 1
        elif (line.startswith("function") or line.startswith("//!end")) and status == 1:
            test_case = "\n".join(code_lines[start_index:index])
            test_cases.append(test_case)
            status = 1
            start_index = index
        index += 1

    test_cases = [resolve_test_case(case) for case in test_cases]
    apiset = set(case.target for case in test_cases)
    apitest_list = []
    for api in apiset:
        api_test_cases = []
        for case in test_cases:
            if case.target == api:
                api_test_cases.append(case)
        _apitest = APITest(target=api, test_cases=api_test_cases)
        for index, case in enumerate(_apitest.test_cases, start=1):
            case.subid = index
        apitest_list.append(_apitest)
    return apitest_list


def resolve_result_file(file: str, apitest_list: list[APITest]):
    platform = Path(file).stem
    with open(file, "r") as f:
        log = f.read()
    pattern = r"(?:JsApp: )?!(\d+): (\d+(?:\.\d+)?(?:e-\d+)?) ms"
    matches = re.findall(pattern, log)

    for result in matches:
        test_id, test_reuslt = result
        test_id = int(test_id)
        for apitest in apitest_list:
            for testcase in apitest.test_cases:
                if testcase.id == test_id:
                    if testcase.results is None:
                        testcase.results = [TestResult(test_reuslt, platform)]
                    else:
                        testcase.results.append(TestResult(test_reuslt, platform))


def generate_api_test_file(dir: str, name: str):
    files = os.listdir(dir)
    arkts_file = [file for file in files if file.endswith(".ts")]
    assert len(arkts_file) == 1
    apitest_list: list[APITest] = resolve_arkts_file(dir)

    results_file = [file for file in files if file.endswith(".log")]
    for result in results_file:
        resolve_result_file(os.path.join(dir, result), apitest_list)

    os.makedirs("./docs/标准库接口测试", exist_ok=True)
    with open(f"./docs/标准库接口测试/{name}.md", "w", encoding="utf-8") as mdf:
        mdf.write(f"# {name}\n")
        for apitest in apitest_list:
            mdf.write(apitest.render_markdown())
            mdf.write("\n")
        mdf.write(f"[Huawei Phone]: ../../device/#huawei-phone\n")
        mdf.write(f"[Huawei Watch]: ../../device/#huawei-watch\n")
        mdf.write(f"[node]: ../../device/#typescript")


def generate_arkts_docs(doc_root: str):
    api_documents = os.listdir(doc_root)
    for api in api_documents:
        generate_api_test_file(os.path.join(doc_root, api), api)
    with open("./docs/index.md", "w", encoding="utf-8") as indexf:
        indexf.write(f"# 首页\n\n## ArkTS标准库接口测试 \n\n")
        for api in api_documents:
            indexf.write(f"- [{api}]\n")
        indexf.write("\n\n")
        for api in api_documents:
            indexf.write(f"[{api}]: 标准库接口测试/{api}.md\n")


def generate_ts_docs(doc_root: str):
    api_documents = [file for file in os.listdir(doc_root) if file.startswith("TS")]
    for api in api_documents:
        generate_api_test_file(os.path.join(doc_root, api), api)
    with open("./docs/index.md", "a", encoding="utf-8") as indexf:
        indexf.write("## TypeScript标准库测试 \n\n")
        for api in api_documents:
            indexf.write(f"- [{api}]\n")
        indexf.write("\n\n")
        for api in api_documents:
            indexf.write(f"[{api}]: 标准库接口测试/{api}.md\n")

def generate_llm_docs(doc_root: str): 
    df = pandas.read_csv(os.path.join(doc_root, "generated_tests.csv"))
    with open("./docs/llm.md", "w", encoding="utf-8") as llmf:
        llmf.write("# 大模型生成测试用例 \n\n")
        for _, row in df.iterrows():
            llmf.write(f"### {row['package']}.{row['api']} \n\n")
            code = row["generated_test_case"]
            if not code.startswith("```"):
                code = f"```typescript\n{code}"
            if not code.endswith("```"):
                code = f"{code}\n```\n\n"
            llmf.write(code)



def main():
    generate_arkts_docs("./testcases_arkts")
    generate_ts_docs("./testcases_ts")
    generate_llm_docs("./llm")


if __name__ == "__main__":
    main()
