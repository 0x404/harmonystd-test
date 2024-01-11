import re
from dataclasses import dataclass

import pandas
from tqdm import tqdm
from selenium import webdriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.common.by import By



PATTERN = ["h3", "i", "a", "a", "p", "p", "p"]
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
TEST_CASE_EXAMPLE = """
function test_remove(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
"""


def is_api_pattern(tag_list: list[str]):
    for x, y in zip(tag_list, PATTERN):
        if x != y:
            return False
    return True


def is_alpha_underscore(s):
    pattern = r"^[a-zA-Z_]+$"
    return bool(re.match(pattern, s))


@dataclass
class ArgumentDescription:
    name: str
    type: str
    required: bool
    description: str

    def __str__(self) -> str:
        return f"{self.name}({self.type}): {self.description}, 是否必须：{self.required}"


@dataclass
class ReturnTypeDescription:
    type: str
    description: str


@dataclass
class APIDescription:
    name: str
    description: str
    arguments: list[ArgumentDescription]
    extra: str

    def to_prompt(self, package: str):
        container = package[package.find("@") + 1 :]
        if self.arguments:
            arg_str = " ".join(str(arg) for arg in self.arguments)
            arg_str = "该API的参数列表分别为：" + arg_str
        else:
            arg_str = ""

        return (
            f"请为该TypeScript容器生成测试用例（只返回生成的代码），你需要测试的容器为：{container}，可以通过 `import {container} from {package}`的方式导入该容器 \n"
            f"你需要测试该容器的{self.name} API\n该API的描述为'{self.description}'\n{arg_str} \n"
            f"该API的使用示例为：{self.extra} \n"
            f"你需要为该API生成一个测试函数，该函数对API进行测试并计算API的运行时间，一个可能的测试用例如下所示：{TEST_CASE_EXAMPLE}\n"
        )


def extract_argument_description(elements: list[WebElement]):
    arg_index = 0
    while arg_index < len(elements):
        if (
            elements[arg_index].text == "参数："
            and elements[arg_index].tag_name == "strong"
        ):
            break
        arg_index += 1

    if arg_index == len(elements):
        return None

    table_elements = [
        element for element in elements[arg_index + 1 :] if element.tag_name == "table"
    ]
    table = table_elements[0].text.split()

    arguments = []

    index = 4
    while index < len(table):
        if index + 4 >= len(table):
            break
        name, type, required, desc = table[index], table[index+1], table[index+2], table[index+3]
        arguments.append(
            ArgumentDescription(
                name.strip(), type, True if required == "是" else False, desc.strip()
            )
        )
        index += 4
    return arguments


def extract_extra_info(elements: list[WebElement]):
    example_index = 0
    while example_index < len(elements):
        if (
            elements[example_index].text == "示例："
            and elements[example_index].tag_name == "strong"
        ):
            break
        example_index += 1

    if example_index == len(elements):
        return None

    example = [
        element for element in elements[example_index + 1 :] if element.tag_name == "ol"
    ]
    assert len(example) == 1
    return f"API使用示例代码：{example[0].text}"


def extract_api_description(element: WebElement):
    child_elements = element.find_elements(By.XPATH, ".//*")
    if not is_api_pattern([e.tag_name for e in child_elements]):
        return None

    apiname = child_elements[0].text
    if not is_alpha_underscore(apiname):
        return None

    desc = child_elements[5].text

    arg = extract_argument_description(child_elements)
    if not arg:
        arg = []

    extra = extract_extra_info(child_elements)
    if not extra:
        extra = ""

    return APIDescription(apiname, desc, arg, extra)


def collect_api_description_and_prompts(package: str, package_doc_url: str):
    driver = webdriver.Chrome()
    driver.get(package_doc_url)
    titled_sections = driver.find_elements(By.CLASS_NAME, "tiledSection")

    api_name, api_package, api_doc, api_prompt = [], [], [], []

    for sec in titled_sections:
        api_desc = extract_api_description(sec)
        if api_desc is not None:
            api_name.append(api_desc.name)
            api_doc.append(f"{package_doc_url}__{api_desc.name}")
            api_prompt.append(api_desc.to_prompt(package))
            api_package.append(package)
    
    df = pandas.DataFrame(
        {
            "package": api_package,
            "api": api_name,
            "url": api_doc,
            "prompt": api_prompt,
        }
    )
    driver.quit()
    return df


if __name__ == "__main__":
    df = None
    for package, url in tqdm(ArkTS_API_URL_MAP.items()):
        tdf = collect_api_description_and_prompts(package, url)
        tdf.to_csv(f"{package}.csv", index=False)
        if df is None:
            df = tdf
        else:
            df = pandas.concat([df, tdf])
    df.to_csv("api_collections.csv", index=False)


