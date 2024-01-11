# @ohos.util.TreeMap
### @ohos.util.TreeMap.hasKey

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treemap-0000001478341441-V3#ZH-CN_TOPIC_0000001523488482__hasKey)

:keyboard: 测试用例 1: 测试TreeMap容器hasKey接口 

```typescript
function test_hasKey(loopCount: number) {
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.hasKey(i);
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
| 测试用例 1 | [Huawei Phone] | 0.000333 ms |

### @ohos.util.TreeMap.set

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treemap-0000001478341441-V3#ZH-CN_TOPIC_0000001523488482__set)

:keyboard: 测试用例 1: 测试TreeMap容器set接口 

```typescript
function test_set(loopCount: number) {
  let treemap = new TreeMap<number,number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.set(i,i);
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

### @ohos.util.TreeMap.remove

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treemap-0000001478341441-V3#ZH-CN_TOPIC_0000001523488482__remove)

:keyboard: 测试用例 1: 测试TreeMap容器remove接口 

```typescript
function test_remove(loopCount: number) {
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.remove(i);
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
| 测试用例 1 | [Huawei Phone] | 0.000333 ms |

### @ohos.util.TreeMap.replace

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treemap-0000001478341441-V3#ZH-CN_TOPIC_0000001523488482__replace)

:keyboard: 测试用例 1: 测试TreeMap容器replace接口 

```typescript
function test_replace(loopCount: number) {
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.replace(i,i);
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
| 测试用例 1 | [Huawei Phone] | 0.000333 ms |

### @ohos.util.TreeMap.hasValue

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-treemap-0000001478341441-V3#ZH-CN_TOPIC_0000001523488482__hasValue)

:keyboard: 测试用例 1: 测试TreeMap容器hasValue接口 

```typescript
function test_hasValue(loopCount: number) {
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.hasValue(i);
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
| 测试用例 1 | [Huawei Phone] | 1.024667 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript