# @ohos.util.HashMap
### @ohos.util.HashMap.set

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashmap-0000001478181697-V3#ZH-CN_TOPIC_0000001574248653__set)

:keyboard: 测试用例 1: 测试HashMap容器set接口

```typescript
function test_set(loopCount: number) {
  const test_id = 1;
  let hashMap = new HashMap<number, number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i, 1);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台       | 运行时间    |
| :--------- | :------------- | :---------- |
| 测试用例 1 | [Huawei Phone] | 0.000915 ms |

### @ohos.util.HashMap.get

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashmap-0000001478181697-V3#ZH-CN_TOPIC_0000001574248653__get)

:keyboard: 测试用例 1: 测试HashMap容器get接口

```typescript
function test_get(loopCount: number) {
  const test_id = 2;
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i, 1);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.get(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台       | 运行时间    |
| :--------- | :------------- | :---------- |
| 测试用例 1 | [Huawei Phone] | 0.000236 ms |

### @ohos.util.HashMap.hasKey

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashmap-0000001478181697-V3#ZH-CN_TOPIC_0000001574248653__haskey)

:keyboard: 测试用例 1: 测试HashMap容器的hasKey接口（最好情况），HashMap长度为1000000

```typescript
function test_hasKey1(loopCount: number) {
  const test_id = 3;
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,1)
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasKey(0)
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:keyboard: 测试用例 2: 测试HashMap容器的hasKey接口（最坏情况），HashMap长度为1000000

```typescript
function test_hasKey2(loopCount: number) {
  const test_id = 4;
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,1)
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasKey(1000000)
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```
:joystick: 测试结果

| 测试用例   | 测试平台       | 运行时间    |
| :--------- | :------------- | :---------- |
| 测试用例 1 | [Huawei Phone] | 0.00012 ms  |
| 测试用例 2 | [Huawei Phone] | 0.000103 ms |

### @ohos.util.HashMap.hasValue

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-hashmap-0000001478181697-V3#ZH-CN_TOPIC_0000001574248653__hasvalue)

:keyboard: 测试用例 1: 测试Hashmap容器的hasValue接口（最好情况），HashMap长度为1000000

```typescript
function test_hasValue1(loopCount: number) {
  const test_id = 5;
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,i)
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasValue(0);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

:keyboard: 测试用例 2: 测试Hashmap容器的hasValue接口（最坏情况），HashMap长度为1000000

```typescript
function test_hasValue2(loopCount: number) {
  const test_id = 6;
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,i)
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasValue(1000000);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

:joystick: 测试结果

| 测试用例   | 测试平台       | 运行时间             |
| :--------- | :------------- | :------------------- |
| 测试用例 1 | [Huawei Phone] | 40.61333333333334 ms |
| 测试用例 2 | [Huawei Phone] | 44.98 ms             |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
