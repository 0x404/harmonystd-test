# @ohos.util.Vector
### @ohos.util.Vector.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-vector-0000001477981485-V3#ZH-CN_TOPIC_0000001523488906__add)

:keyboard: 测试用例 1: 测试Vector容器add接口 

```typescript
function test_add(loopCount: number) {
  let vector = new Vector<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.add(1);
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
| 测试用例 1 | [Huawei Phone] | 0.000192 ms |

### @ohos.util.Vector.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-vector-0000001477981485-V3#ZH-CN_TOPIC_0000001523488906__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）Vector容器的has接口，Vector长度为500000 

```typescript
function test_has(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < 500000; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.has(500000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）Vector容器的has接口，Vector长度为500000 

```typescript
function test_has2(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < 500000; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.has(0);
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
| 测试用例 1 | [Huawei Phone] | 0.463000 ms |
| 测试用例 2 | [Huawei Phone] | 0.000333 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript