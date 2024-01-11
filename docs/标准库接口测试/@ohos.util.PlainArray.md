# @ohos.util.PlainArray
### @ohos.util.PlainArray.get

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470__get)

:keyboard: 测试用例 1: 测试PlainArray容器get方法 

```typescript
function test_get(loopCount: number) {
  const plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.get(i);
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

### @ohos.util.PlainArray.getIndexOfKey

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470__getIndexOfKey)

:keyboard: 测试用例 1: 测试PlainArray容器getIndexOfKey方法（最坏情况，查找不存在的键） 

```typescript
function test_getIndexOfKey(loopCount: number) {
  const plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.getIndexOfKey(500000);
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
| 测试用例 1 | [Huawei Phone] | 0.000124 ms |

### @ohos.util.PlainArray.getKeyAt

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470__getKeyAt)

:keyboard: 测试用例 1: 测试PlainArray容器getKeyAt方法 

```typescript
function test_getKeyAt(loopCount: number) {
  const plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.getKeyAt(i);
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
| 测试用例 1 | [Huawei Phone] | 0.000058 ms |

### @ohos.util.PlainArray.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470__add)

:keyboard: 测试用例 1: 测试PlainArray容器add接口 

```typescript
function test_add(loopCount: number) {
  let plainArray = new PlainArray<string>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "test");
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
| 测试用例 1 | [Huawei Phone] | 0.000154 ms |

### @ohos.util.PlainArray.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）PlainArray容器的has接口，List长度为500000 

```typescript
function test_has(loopCount: number) {
  let plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "test");
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.has(500000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）PlainArray容器的has接口，List长度为5000000 

```typescript
function test_has2(loopCount: number) {
  let plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "test");
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.has(0);
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
| 测试用例 1 | [Huawei Phone] | 0.000084 ms |
| 测试用例 2 | [Huawei Phone] | 0.000066 ms |

### @ohos.util.PlainArray.clone

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-plainarray-0000001427585160-V3#ZH-CN_TOPIC_0000001523488470__clone)

:keyboard: 测试用例 1: 测试PlainArray容器clone方法 

```typescript
function test_clone(loopCount: number) {
  const plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    const clonedArray = plainArray.clone(); // 在这里进行 clone 操作，克隆一个新的实例
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
| 测试用例 1 | [Huawei Phone] | 0.033600 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript