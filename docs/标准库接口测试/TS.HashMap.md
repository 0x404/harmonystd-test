# TS.HashMap
### Map.prototype.has

:keyboard: 测试用例 1: 测试Map对象的has接口（最好情况），Map长度为1000000 

```typescript
  function test_map_hasKey_best(loopCount: number) {
    let map = new Map<number, number>();
    for (let i = 0; i < 1000000; i++) {
      map.set(i, 1)
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      map.has(0)
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:keyboard: 测试用例 2: 测试Map对象的has接口（最坏情况），Map长度为1000000 

```typescript
  function test_map_hasKey_worst(loopCount: number) {
    let map = new Map<number, number>();
    for (let i = 0; i < 1000000; i++) {
      map.set(i, 1)
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      map.has(1000000)
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:joystick: 测试结果

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000004 ms |
| 测试用例 2 | [node] | 0.000003 ms |

### Map.prototype.hasValue

:keyboard: 测试用例 1: 测试Map结合Array的方式模拟的hasValue接口（最好情况），Map长度为1000000 

```typescript
  function test_map_hasValue_best(loopCount: number) {
    let map = new Map<number, number>();
    for (let i = 0; i < 1000000; i++) {
      map.set(i, i)
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      Array.from(map.values()).includes(0);
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:keyboard: 测试用例 2: 测试Map结合Array的方式模拟的hasValue接口（最坏情况），Map长度为1000000 

```typescript
  function test_map_hasValue_worst(loopCount: number) {
    let map = new Map<number, number>();
    for (let i = 0; i < 1000000; i++) {
      map.set(i, i)
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      Array.from(map.values()).includes(1000000);
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:joystick: 测试结果

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 4.100000 ms |
| 测试用例 2 | [node] | 4.830000 ms |

### Map.prototype.set

:keyboard: 测试用例 1: 测试Map对象的set接口 

```typescript
function test_map_set(loopCount: number) {
    let map = new Map<number, number>();
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      map.set(i, 1);
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:joystick: 测试结果

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000071 ms |

### Map.prototype.get

:keyboard: 测试用例 1: 测试Map对象的get接口 

```typescript
  function test_map_get(loopCount: number) {
    let map = new Map<number, number>();
    for (let i = 0; i < loopCount; i++) {
      map.set(i, 1);
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      map.get(i);
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:joystick: 测试结果

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000024 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript