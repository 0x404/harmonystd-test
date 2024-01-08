# TS.ArrayList
### Array.prototype.splice

:keyboard: 测试用例 1: 测试原生数组splice接口用于插入元素 

```typescript
  function test_array_splice_insert(loopCount: number) {
    let list: number[] = [];
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.splice(0, 0, i);
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
| 测试用例 1 | [node] | 0.002620 ms |

### Array.prototype.includes

:keyboard: 测试用例 1: 测试在最坏情况下（查找元素不存在的情况）原生数组的includes接口，数组长度为500000 

```typescript
  function test_array_includes_worst(loopCount: number) {
    let list = Array.from({ length: 500000 }, (_, i) => i);
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.includes(500000);
    }
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
```
:keyboard: 测试用例 2: 测试在最优情况下（查找元素为第一个）原生数组的includes接口，数组长度为500000 

```typescript
  function test_array_includes_best(loopCount: number) {
    let list = Array.from({ length: 500000 }, (_, i) => i);
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.includes(0);
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
| 测试用例 1 | [node] | 0.376333 ms |
| 测试用例 2 | [node] | 0.000001 ms |

### Array.prototype.push

:keyboard: 测试用例 1: 测试原生数组push接口 

```typescript
function test_array_push(loopCount: number) {
    let list = [];
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.push(1);
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
| 测试用例 1 | [node] | 0.000016 ms |

[Huawei Phone]: ../../device/#huawei-phone
[Huawei Watch]: ../../device/#huawei-watch
[node]: ../../device/#typescript