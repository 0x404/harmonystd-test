# @ohos.util.ArrayList
### @ohos.util.ArrayList.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-arraylist-0000001427585156-V3#ZH-CN_TOPIC_0000001523488842__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）ArrayList容器的has接口，ArrayList长度为500000 

```typescript
function test_has(loopCount: number) {
  let list = new ArrayList<number>();
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
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）ArrayList容器的has接口，ArrayList长度为500000 

```typescript
function test_has2(loopCount: number) {
  let list = new ArrayList<number>();
  for (let i = 0; i < 500000; i++) {
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
| 测试用例 1 | [Huawei Phone] | 0.515000 ms |
| 测试用例 2 | [Huawei Phone] | 0.000060 ms |

### @ohos.util.ArrayList.insert

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-arraylist-0000001427585156-V3#ZH-CN_TOPIC_0000001523488842__insert)

:keyboard: 测试用例 1: 测试ArrayList容器insert接口 

```typescript
function test_insert(loopCount: number) {
  let list = new ArrayList<number>();
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
| 测试用例 1 | [Huawei Phone] | 0.000100 ms |

### @ohos.util.ArrayList.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-arraylist-0000001427585156-V3#ZH-CN_TOPIC_0000001523488842__add)

:keyboard: 测试用例 1: 测试ArrayList容器add接口 

```typescript
function test_add(loopCount: number) {
  let list = new ArrayList<number>();
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
| 测试用例 1 | [Huawei Phone] | 0.000168 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript