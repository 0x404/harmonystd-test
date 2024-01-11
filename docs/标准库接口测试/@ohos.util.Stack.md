# @ohos.util.Stack
### @ohos.util.Stack.locate

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-stack-0000001478181701-V3#ZH-CN_TOPIC_0000001574128397__locate)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）Stack容器的locate接口，Stack长度为100000 

```typescript
function test_locate(loopCount: number) {
  let stack = new Stack<number>();
  for (let i = 0; i < 100000; i++) {
    stack.push(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.locate(100000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）Stack容器的locate接口，Stack长度为10000000 

```typescript
function test_locate2(loopCount: number) {
  let stack = new Stack<number>();
  for (let i = 0; i < 10000000; i++) {
    stack.push(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.locate(0);
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
| 测试用例 1 | [Huawei Phone] | 0.037333 ms |
| 测试用例 2 | [Huawei Phone] | 0.000065 ms |

### @ohos.util.Stack.push

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-stack-0000001478181701-V3#ZH-CN_TOPIC_0000001574128397__push)

:keyboard: 测试用例 1: 测试Stack容器push接口 

```typescript
function test_push(loopCount: number) {
  let stack = new Stack<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.push(1);
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
| 测试用例 1 | [Huawei Phone] | 0.000128 ms |

### @ohos.util.Stack.peek

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-stack-0000001478181701-V3#ZH-CN_TOPIC_0000001574128397__peek)

:keyboard: 测试用例 1: 测试Stack容器peek接口 

```typescript
function test_peek(loopCount: number){
  let stack = new Stack<number>();
  for (let i = 0; i < 5000000; i++) {
    stack.push(i);
  }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      stack.peek();
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
| 测试用例 1 | [Huawei Phone] | 0.000060 ms |

### @ohos.util.Stack.pop

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-stack-0000001478181701-V3#ZH-CN_TOPIC_0000001574128397__pop)

:keyboard: 测试用例 1: 测试Stack容器pop接口 

```typescript
function test_pop(loopCount: number) {
  let stack = new Stack<number>();
  for (let i = 0; i < 500000; i++) {
    stack.push(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.pop();
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
| 测试用例 1 | [Huawei Phone] | 0.000064 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript