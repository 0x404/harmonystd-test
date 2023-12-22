# @ohos.util.List
### @ohos.util.List.insert

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889__insert)

:keyboard: 测试用例 1: 测试List容器insert接口 

```typescript
function test_insert(loopCount: number) {
  let list = new List<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.insert(0,i);
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
| 测试用例 1 | [Huawei Phone] | 0.036660 ms |

### @ohos.util.List.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889__add)

:keyboard: 测试用例 1: 测试List容器add接口 

```typescript
function test_add(loopCount: number) {
  let list = new List<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.add(1);
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
| 测试用例 1 | [Huawei Phone] | 0.000284 ms |

### @ohos.util.List.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）List容器的has接口，List长度为500000 

```typescript
function test_has(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < 500000; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.has(500000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）List容器的has接口，List长度为5000000 

```typescript
function test_has2(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < 5000000; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.has(0);
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
| 测试用例 1 | [Huawei Phone] | 0.717333 ms |
| 测试用例 2 | [Huawei Phone] | 0.000067 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
