# @ohos.util.Deque
### @ohos.util.Deque.insertEnd

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-deque-0000001427745116-V3#ZH-CN_TOPIC_0000001523648606__insertEnd)

:keyboard: 测试用例 1: 测试Deque容器insertEnd接口 

```typescript
function test_insert_end(loopCount: number) {
  let deque = new Deque<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.insertEnd(1);
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

### @ohos.util.Deque.insertFront

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-deque-0000001427745116-V3#ZH-CN_TOPIC_0000001523648606__insertFront)

:keyboard: 测试用例 1: 测试Deque容器insertFront接口 

```typescript
function test_insert_front(loopCount: number) {
  let deque = new Deque<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.insertFront(1);
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

### @ohos.util.Deque.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-deque-0000001427745116-V3#ZH-CN_TOPIC_0000001523648606__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）Deque容器的has接口，Deque长度为500000 

```typescript
function test_has(loopCount: number) {
  let deque = new Deque<number>();
  for (let i = 0; i < 500000; i++) {
    deque.insertEnd(1);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.has(500000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）Deque容器的has接口，Deque长度为500000 

```typescript
function test_has2(loopCount: number) {
  let deque = new Deque<number>();
  for (let i = 0; i < 500000; i++) {
    deque.insertEnd(1);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.has(0);
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
[node]: ../../device/#typescript