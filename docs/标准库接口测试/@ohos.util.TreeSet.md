# @ohos.util.TreeSet
### @ohos.util.TreeSet.remove

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treeset-0000001478061981-V3#ZH-CN_TOPIC_0000001574248293__remove)

:keyboard: 测试用例 1: 测试TreeSet容器remove接口 

```typescript
function test_remove(loopCount: number) {
  let treeset = new TreeSet<number>();
  for (let i = 0; i < 500000; i++) {
    treeset.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeset.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台           | 运行时间        |
|:-------|:---------------|:------------|
| 测试用例 1 | [Huawei Phone] | 0.000667 ms |

### @ohos.util.TreeSet.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treeset-0000001478061981-V3#ZH-CN_TOPIC_0000001574248293__has)

:keyboard: 测试用例 1: 测试TreeSet容器has接口 

```typescript
function test_has(loopCount: number) {
  let treeset = new TreeSet<number>();
  for (let i = 0; i < 500000; i++) {
    treeset.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeset.has(500000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台           | 运行时间        |
|:-------|:---------------|:------------|
| 测试用例 1 | [Huawei Phone] | 0.000000 ms |

### @ohos.util.TreeSet.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treeset-0000001478061981-V3#ZH-CN_TOPIC_0000001574248293__add)

:keyboard: 测试用例 1: 测试TreeSet容器add接口 

```typescript
function test_add(loopCount: number) {
  let treeset = new TreeSet<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeset.add(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台           | 运行时间        |
|:-------|:---------------|:------------|
| 测试用例 1 | [Huawei Phone] | 0.000540 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript