# TS.HashSet
### Set.prototype.delete

:keyboard: 测试用例 1: 测试Set容器delete接口 

```typescript
  function test_set_remove(loopCount: number) {
    let set = new Set<number>();
    for (let i = 0; i < loopCount; i++) {
      set.add(i);
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      set.delete(i);
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
| 测试用例 1 | [node] | 0.000042 ms |

### Set.prototype.entries

:keyboard: 测试用例 1: 测试Set容器的entries接口，set长度为输入的loopCount 

```typescript
  function test_set_entries(loopCount: number) {
    let set = new Set<number>();
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

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000002 ms |

### Set.prototype.values

:keyboard: 测试用例 1: 测试Set容器的values接口，set长度为输入的loopCount 

```typescript
  function test_set_values(loopCount: number) {
    let set = new Set<number>();
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

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000004 ms |

### Set.prototype.has

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）Set容器的has接口，set长度为500000 

```typescript
  function test_set_has_worst(loopCount: number) {
    let set = new Set<number>();
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
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）Set容器的has接口，set长度为5000000 

```typescript
  function test_set_has_best(loopCount: number) {
    let set = new Set<number>();
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

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000006 ms |
| 测试用例 2 | [node] | 0.000008 ms |

### Set.prototype.forEach

:keyboard: 测试用例 1: 测试Set容器的forEach接口,set长度为500000 

```typescript
  function test_set_forEach(loopCount: number) {
    let set = new Set<number>();
    for (let i = 0; i < 500000; i++) {
      set.add(i);
    }
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      set.forEach((value, key) => {
      });
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
| 测试用例 1 | [node] | 1.400000 ms |

### Set.prototype.add

:keyboard: 测试用例 1: 测试Set容器add接口 

```typescript
function test_set_add(loopCount: number) {
    let set = new Set<number>();
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

| 测试用例   | 测试平台   | 运行时间        |
|:-------|:-------|:------------|
| 测试用例 1 | [node] | 0.000006 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript