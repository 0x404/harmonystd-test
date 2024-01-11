# @ohos.util.LinkedList
### @ohos.util.LinkedList.has

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-linkedlist-0000001427902748-V3#ZH-CN_TOPIC_0000001573928869__has)

:keyboard: 测试用例 1: 测试LinkedList容器has方法 

```typescript
function test_has(loopCount: number) {
  const linkedList = new LinkedList<any>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 向链表尾部插入元素
  }
  const elementToFind = `Element${loopCount / 2}`; // 在链表中间位置插入的元素
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.has(elementToFind); // 判断链表是否含有指定元素
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
| 测试用例 1 | [Huawei Phone] | 0.057000 ms |

### @ohos.util.LinkedList.addFirst

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-linkedlist-0000001427902748-V3#ZH-CN_TOPIC_0000001573928869__addFirst)

:keyboard: 测试用例 1: 测试LinkedList容器addFirst方法 

```typescript
function test_addFirst(loopCount: number) {
  const linkedList = new LinkedList<any>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.addFirst(`Element${i}`); // 在链表头部插入元素
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
| 测试用例 1 | [Huawei Phone] | 0.000798 ms |

### @ohos.util.LinkedList.add

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-linkedlist-0000001427902748-V3#ZH-CN_TOPIC_0000001573928869__add)

:keyboard: 测试用例 1: 测试LinkedList容器add方法 

```typescript
function test_add(loopCount: number) {
  let linkedList = new LinkedList<any>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 在链表尾部插入元素
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
| 测试用例 1 | [Huawei Phone] | 0.001264 ms |

### @ohos.util.LinkedList.insert

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-linkedlist-0000001427902748-V3#ZH-CN_TOPIC_0000001573928869__insert)

:keyboard: 测试用例 1: 测试LinkedList容器insert方法 

```typescript
function test_insert(loopCount: number) {
  const linkedList = new LinkedList<any>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 向链表尾部插入元素
  }
  const indexToInsert = loopCount / 2; // 在链表中间位置插入元素
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.insert(indexToInsert, `NewElement${i}`); // 在指定索引位置插入元素
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
| 测试用例 1 | [Huawei Phone] | 0.001480 ms |

### @ohos.util.LinkedList.get

:book: [官方API文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-linkedlist-0000001427902748-V3#ZH-CN_TOPIC_0000001573928869__get)

:keyboard: 测试用例 1: 测试LinkedList容器get方法 

```typescript
function test_get(loopCount: number) {
  const linkedList = new LinkedList<any>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 向链表尾部插入元素
  }
  const indexToGet = loopCount / 2; // 获取链表中间位置的元素
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.get(indexToGet); // 根据索引获取链表中的元素
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