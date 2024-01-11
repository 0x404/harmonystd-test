# @ohos.util.HashSet
### @ohos.util.HashSet.entries

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325__entries)

:keyboard: 测试用例 1: 测试HashSet容器的entries接口，set长度为输入的loopCount 

```typescript
function test_entries(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.entries();
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
| 测试用例 1 | [Huawei Phone] | 0.001540 ms |

### @ohos.util.HashSet.forEach

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325__forEach)

:keyboard: 测试用例 1: 测试HashSet容器的forEach接口,set长度为500000 

```typescript
function test_forEach(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < 500000; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.forEach((value?: number, key?: number) => {
    });
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台           | 运行时间         |
|:-------|:---------------|:-------------|
| 测试用例 1 | [Huawei Phone] | 63.176667 ms |

### @ohos.util.HashSet.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325__add)

:keyboard: 测试用例 1: 测试HashSet容器add接口 

```typescript
function test_add(loopCount: number) {
  let set = new HashSet<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.add(1);
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
| 测试用例 1 | [Huawei Phone] | 0.000288 ms |

### @ohos.util.HashSet.remove

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325__remove)

:keyboard: 测试用例 1: 测试HashSet容器remove接口 

```typescript
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
```
:joystick: 测试结果

| 测试用例   | 测试平台           | 运行时间        |
|:-------|:---------------|:------------|
| 测试用例 1 | [Huawei Phone] | 0.000138 ms |

### @ohos.util.HashSet.values

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325__values)

:keyboard: 测试用例 1: 测试HashSet容器的values接口，set长度为输入的loopCount 

```typescript
function test_values(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.values();
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
| 测试用例 1 | [Huawei Phone] | 0.000930 ms |

### @ohos.util.HashSet.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashset-0000001478341437-V3#ZH-CN_TOPIC_0000001573929325__has)

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）HashSet容器的has接口，set长度为500000 

```typescript
function test_has(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < 500000; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.has(500000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）HashSet容器的has接口，set长度为5000000 

```typescript
function test_has2(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < 500000; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.has(0);
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
| 测试用例 1 | [Huawei Phone] | 0.000118 ms |
| 测试用例 2 | [Huawei Phone] | 0.000070 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript