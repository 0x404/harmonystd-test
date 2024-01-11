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
| 测试用例 1 | [Huawei Phone] | 0.036100 ms |

### @ohos.util.List.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）List容器的has接口，List长度为100000 

```typescript
function test_has(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < 100000; i++) {
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
| 测试用例 1 | [Huawei Phone] | 0.140000 ms |
| 测试用例 2 | [Huawei Phone] | 0.000063 ms |

### @ohos.util.List.sort

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889__sort)

:keyboard: 测试用例 1: 测试List容器sort接口 

```typescript
function test_sort(loopCount: number) {
  let list = new List<number>();
  for (let i = loopCount; i > 0; i--) {
    list.add(i);
  }
  const startTime = new Date();
    list.sort((a: number, b: number) => a - b);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台           | 运行时间        |
|:-------|:---------------|:------------|
| 测试用例 1 | [Huawei Phone] | 0.023360 ms |

### @ohos.util.List.remove

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-list-0000001428062020-V3#ZH-CN_TOPIC_0000001574128889__remove)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）List容器的remove接口，List长度为50000 

```typescript
function test_remove(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < 50000; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.remove(50000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）List容器的remove接口，List长度为5000000 

```typescript
function test_remove2(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < 5000000; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.remove(i);
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
| 测试用例 1 | [Huawei Phone] | 0.086740 ms |
| 测试用例 2 | [Huawei Phone] | 0.000067 ms |

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
| 测试用例 1 | [Huawei Phone] | 0.000106 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript