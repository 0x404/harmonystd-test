# 大模型生成测试用例 

### @ohos.util.Deque.constructor 

```typescript
import ohos.util.Deque from '@ohos.util.Deque';

function test_constructor() {
  const startTime = new Date();
  let deque = new Deque();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Test constructor: ${executionTime} ms`);
}
```

### @ohos.util.Deque.insertFront 

```typescript
import Deque from '@ohos.util.Deque';

function test_insertFront(loopCount: number) {
  let deque = new Deque();

  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.insertFront(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`insertFront: ${averageTime} ms`);
}

test_insertFront(10000);
```

### @ohos.util.Deque.insertEnd 

```typescript
import ohos.util.Deque from @ohos.util.Deque;

function test_insertEnd(loopCount: number) {
  let deque = new Deque();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.insertEnd(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Deque.has 

```typescript
import ohos.util.Deque from @ohos.util.Deque;

function test_has(loopCount: number) {
  let deque = new Deque();
  for (let i = 0; i < loopCount; i++) {
    deque.insertFront(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.has(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Deque.popFirst 

```typescript
import Deque from '@ohos.util.Deque';

function test_popFirst(loopCount: number) {
  let deque = new Deque<number>();
  for (let i = 0; i < loopCount; i++) {
    deque.insertFront(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.popFirst();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Deque.popLast 

```typescript
import Deque from 'ohos.util.Deque';

function test_popLast() {
  let deque = new Deque();
  deque.insertFront(2);
  deque.insertEnd(4);
  deque.insertFront(5);
  deque.insertFront(2);
  deque.insertFront(4);
  
  const startTime = new Date();
  let result = deque.popLast(); 
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  
  console.log(`popLast result: ${result}`);
  console.log(`Execution time: ${executionTime} ms`);
}

test_popLast();
```

### @ohos.util.Deque.forEach 

```typescript
import Deque from '@ohos.util.Deque';

function test_forEach(loopCount: number) {
  let deque = new Deque<number>();
  for (let i = 0; i < loopCount; i++) {
    deque.insertEnd(i);
  }

  const startTime = new Date();
  deque.forEach((value, index) => {
    // callback function
    console.log("value:" + value, "index:" + index);
  });
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`Time taken for forEach: ${averageTime} ms`);
}
```

### @ohos.util.Deque.getFirst 

```typescript
import Deque from '@ohos.util.Deque';

function test_getFirst(loopCount: number) {
  let deque = new Deque<number>();
  for (let i = 0; i < loopCount; i++) {
    deque.insertEnd(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = deque.getFirst();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Deque.getLast 

```typescript
import ohos.util.Deque from @ohos.util.Deque

function test_getLast() {
  let deque = new Deque();
  deque.insertFront(2);
  deque.insertFront(4);
  deque.insertFront(5);
  deque.insertFront(4);
  const startTime = new Date();
  let result = deque.getLast();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!test_getLast: Last element is ${result}. Took ${executionTime} ms`);
}
```

### @ohos.util.HashMap.constructor 

```typescript
function test_hashmap_constructor() {
  const startTime = new Date();
  let hashMap = new HashMap();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`HashMap constructor executed in ${executionTime} ms`);
}

test_hashmap_constructor();
```

### @ohos.util.HashMap.isEmpty 

```typescript
import ohos.util.HashMap from @ohos.util.HashMap

function test_isEmpty() {
  const hashMap = new HashMap();
  const startTime = new Date();
  const result = hashMap.isEmpty();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`isEmpty: ${result}`);
  console.log(`Execution Time: ${executionTime} ms`);
}
```

### @ohos.util.HashMap.hasKey 

```typescript
import ohos.utils.HashMap;

function test_hasKey(loopCount: number) {
  let hashMap = new HashMap();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(`key${i}`, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasKey(`key${i}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.hasValue 

```typescript
function test_hasValue(loopCount: number) {
  let hashMap = new ohos.util.HashMap();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set("key" + i, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    const result = hashMap.hasValue(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.get 

```typescript
import HashMap from '@ohos.util.HashMap';

function test_get(loopCount: number) {
  let hashMap = new HashMap();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i.toString(), i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.get(i.toString());
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.setAll 

```typescript
function test_setAll() {
  let hashMap1 = new ohos.util.HashMap();
  hashMap1.set("squirrel", 123);
  hashMap1.set("sparrow", 356);
  let hashMap2 = new ohos.util.HashMap();
  
  console.log("Before setAll:");
  console.log("HashMap 1:");
  for (let key of hashMap1.keys()) {
    console.log(`Key: ${key}, Value: ${hashMap1.get(key)}`);
  }
  console.log("HashMap 2:");
  for (let key of hashMap2.keys()) {
    console.log(`Key: ${key}, Value: ${hashMap2.get(key)}`);
  }
  
  hashMap1.setAll(hashMap2);
  
  console.log("After setAll:");
  console.log("HashMap 1:");
  for (let key of hashMap1.keys()) {
    console.log(`Key: ${key}, Value: ${hashMap1.get(key)}`);
  }
  console.log("HashMap 2:");
  for (let key of hashMap2.keys()) {
    console.log(`Key: ${key}, Value: ${hashMap2.get(key)}`);
  }
}

test_setAll();
```

### @ohos.util.HashMap.set 

```typescript
import ohos.util.HashMap from '@ohos.util.HashMap';

function test_set(loopCount: number) {
  const hashMap = new HashMap();
  const keys: string[] = [];
  const values: any[] = [];
  for (let i = 0; i < loopCount; i++) {
    keys.push("key" + i);
    values.push("value" + i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(keys[i], values[i]);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.remove 

```typescript
import ohos.util.HashMap from @ohos.util.HashMap;

function test_remove(loopCount: number) {
  let hashMap = new HashMap();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i.toString(), i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.remove(i.toString());
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.clear 

```typescript
import ohos.util.HashMap from "@ohos.util.HashMap";

function test_clear() {
  let hashMap = new HashMap();
  hashMap.set("squirrel", 123);
  hashMap.set("sparrow", 356);
  
  const startTime = new Date();
  hashMap.clear();
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`The API took ${executionTime} ms to clear the HashMap.`);
}
```

### @ohos.util.HashMap.keys 

```
import HashMap from '@ohos.util.HashMap';

function test_keys(loopCount: number) {
  let hashMap = new HashMap<number, string>();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i, "value" + i);
  }
  const startTime = new Date();
  const iter = hashMap.keys();
  let temp = iter.next().value;
  while(temp !== undefined) {
    temp = iter.next().value;
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Test completed in ${executionTime} ms`);
}
```

### @ohos.util.HashMap.values 

```typescript
function test_values(loopCount: number) {
  let hashMap = new HashMap();
  hashMap.set("squirrel", 123);
  hashMap.set("sparrow", 356);

  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let iter = hashMap.values();
    let temp = iter.next().value;
    while (temp != undefined) {
      temp = iter.next().value;
    }
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.replace 

```typescript
import ohos.util.HashMap from '@ohos.util.HashMap';

function test_replace(loopCount: number) {
  let hashMap = new HashMap();
  // Populate the hashMap with initial data
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(`key${i}`, i);
  }
  const startTime = new Date();
  // Replace the elements in the hashMap
  for (let i = 0; i < loopCount; i++) {
    hashMap.replace(`key${i}`, i+1);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

// Test the replace API with 100 elements
test_replace(100);
```### @ohos.util.HashMap.forEach 

```typescript
function test_forEach(loopCount: number) {
  let hashMap = new HashMap();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i.toString(), i);
  }
  const startTime = new Date();
  hashMap.forEach((value, key) => {
    console.log("value:" + value, "key:" + key);
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_forEach: ${averageTime} ms`);
}
```

### @ohos.util.HashMap.entries 

```typescript
function test_entries(loopCount: number) {
  let hashMap = new HashMap();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set("key" + i, "value" + i);
  }
  const startTime = new Date();
  let iterator = hashMap.entries();
  let temp = iterator.next().value;
  while (temp != undefined) {
    console.log("key: " + temp[0]);
    console.log("value: " + temp[1]);
    temp = iterator.next().value;
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.constructor 

```typescript
import ohos.util.LinkedList from '@ohos.util.LinkedList';

function test_constructor() {
  const startTime = new Date();
  const linkedList = new LinkedList();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`LinkedList constructor execution time: ${executionTime} ms`);
}

test_constructor();
```

### @ohos.util.LinkedList.add 

```typescript
import LinkedList from '@ohos.util.LinkedList';

function test_add(loopCount: number) {
  let linkedList = new LinkedList();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_add: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.addFirst 

```typescript
function test_addFirst(loopCount: number) {
  let linkedList = new LinkedList();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.addFirst(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.insert 

```typescript
import ohos.util.LinkedList from '@ohos.util.LinkedList';

function test_insert(loopCount: number) {
  let linkedList = new LinkedList();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.insert(i, i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```### @ohos.util.LinkedList.has 

```typescript
import ohos.util.LinkedList from @ohos.util.LinkedList

function test_has(loopCount: number) {
  const linkedList = new LinkedList();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    const result1 = linkedList.has("squirrel");
  }
  linkedList.add("squirrel");
  for (let i = 0; i < loopCount; i++) {
    const result = linkedList.has("squirrel");
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```### @ohos.util.LinkedList.get 

```typescript
import LinkedList from '@ohos.util.LinkedList';

function test_get() {
  let linkedList = new LinkedList<number>();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(5);
  linkedList.add(2);
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(4);

  const startTime = new Date();
  let result = linkedList.get(2);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`get API execution time: ${executionTime} ms`);
  console.log(`Result: ${result}`);
}
```

### @ohos.util.LinkedList.getLastIndexOf 

```typescript
import LinkedList from 'ohos.util.LinkedList';

function test_getLastIndexOf() {
  let linkedList = new LinkedList<number>();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(5);
  linkedList.add(2);
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(4);
  
  const startTime = new Date();
  let result = linkedList.getLastIndexOf(2);
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`getLastIndexOf Execution Time: ${executionTime} ms, Result: ${result}`);
}

test_getLastIndexOf();
```### @ohos.util.LinkedList.getIndexOf 

```typescript
function test_getIndexOf(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    const index = linkedList.getIndexOf(i);
    console.log(`Element ${i} is found at index ${index}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.removeByIndex 

```typescript
function test_removeByIndex(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.removeByIndex(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.removeFirst 

```typescript
import ohos.util.LinkedList from '@ohos.util.LinkedList';

function test_removeFirst(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.removeFirst();
  }
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_removeFirst(10000);
```

### @ohos.util.LinkedList.removeLast 

```typescript
import ohos.util.LinkedList from @ohos.util.LinkedList

function test_removeLast(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.removeLast();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.remove 

```typescript
import ohos.util.LinkedList from '@ohos.util.LinkedList';

function test_remove(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.removeFirstFound 

```typescript
function test_removeFirstFound(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.removeFirstFound(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.removeLastFound 

```typescript
import LinkedList from '@ohos.util.LinkedList';

function test_removeLastFound(loopCount: number) {
  let linkedList = new LinkedList<number>();

  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }

  const startTime = new Date();
  linkedList.removeLastFound(loopCount - 1);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}

test_removeLastFound(100);
```

### @ohos.util.LinkedList.clone 

```typescript
import LinkedList from '@ohos.util.LinkedList';

function test_clone() {
  let linkedList = new LinkedList();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(5);
  linkedList.add(4);

  const startTime = new Date();
  let result = linkedList.clone();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Clone execution time: ${executionTime} ms`);
}

test_clone();
```

### @ohos.util.LinkedList.forEach 

```typescript
import ohos.util.LinkedList from "@ohos.util.LinkedList";

function test_forEach(callbackFn: Function) {
  let linkedList = new LinkedList();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(5);
  linkedList.add(4);

  const startTime = new Date();
  linkedList.forEach(callbackFn);
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);
}
```

### @ohos.util.LinkedList.clear 

```typescript
import ohos.util.LinkedList from "@ohos.util.LinkedList";

function test_clear() {
  let linkedList = new LinkedList<number>();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(5);
  linkedList.add(4);

  const startTime = new Date();
  linkedList.clear();
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Clear execution time: ${executionTime} ms`);
}

test_clear();
```

### @ohos.util.LinkedList.set 

```typescript
import LinkedList from '@ohos.util.LinkedList';

function test_set(loopCount: number) {
  let linkedList = new LinkedList();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.set(i, "b");
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.convertToArray 

```typescript
function test_convertToArray() {
  let linkedList = new LinkedList();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(5);
  linkedList.add(4);
  const startTime = new Date();
  let result = linkedList.convertToArray();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.getFirst 

```typescript
import ohos.util.LinkedList from '@ohos.util.LinkedList';

function test_getFirst(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = linkedList.getFirst();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.LinkedList.getLast 

```typescript
import LinkedList from '@ohos.util.LinkedList';

function test_getLast(loopCount: number) {
  let linkedList = new LinkedList<number>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(i);
  }
  
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.getLast();
  }
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```### @ohos.util.List.constructor 

```typescript
import List from '@ohos.util.List';

function test_constructor() {
  const startTime = new Date();
  let list = new List();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Test constructor: ${executionTime} ms`);
}

test_constructor();
```### @ohos.util.List.add 

```typescript
import ohos.util.List from @ohos.util.List;

function test_add(loopCount: number) {
  let list = new List();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.insert 

```typescript
import ohos.util.List from @ohos.util.List

function test_insert(loopCount: number) {
  let list = new List();
  for (let i = 0; i < loopCount; i++) {
    const element = Math.random();
    const index = Math.floor(Math.random() * (list.size() + 1));
    const startTime = new Date();
    list.insert(element, index);
    const endTime = new Date();
    const executionTime = endTime.getTime() - startTime.getTime();
    console.log(`Test ${i + 1}: Inserted element ${element} at index ${index} in ${executionTime} ms`);
  }
}

test_insert(10);
```

### @ohos.util.List.has 

```typescript
import ohos.util.List from '@ohos.util.List';

function test_has(loopCount: number) {
  let list = new List();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.has(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.get 

```typescript
import ohos.util.List from '@ohos.util.List';

function test_get(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = list.get(i);
    console.log(result);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.getLastIndexOf 

```typescript
import List from '@ohos.util.List';

function test_getLastIndexOf(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.getLastIndexOf(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.getIndexOf 

```typescript
import List from '@ohos.util.List';

function test_getIndexOf(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.getIndexOf(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.equal 

```typescript
import ohos.util.List from "@ohos.util.List";

function test_equal() {
  let list = new List();
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(2);
  
  let obj1 = new List();
  obj1.add(2);
  obj1.add(4);
  obj1.add(5);
  
  let startTime = new Date();
  list.equal(obj1);
  let endTime = new Date();
  
  let executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);

  let obj2 = {name: "Dylon", age: "13"};
  
  startTime = new Date();
  let result = list.equal(obj2);
  endTime = new Date();
  
  executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);
}
```

### @ohos.util.List.removeByIndex 

```typescript
import ohos.util.List from @ohos.util.List 

function test_removeByIndex(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.removeByIndex(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.remove 

```typescript
import ohos.util.List from "@ohos.util.List";

function test_remove(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.replaceAllElements 

```typescript
import ohos.util.List from '@ohos.util.List';

function test_replaceAllElements() {
  let list = new List();
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(4);
  
  const startTime = new Date();
  list.replaceAllElements((value: number, index: number) => {
    return value = 2 * value;
  });
  list.replaceAllElements((value: number, index: number) => {
    return value = value - 2;
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`API execution time: ${executionTime} ms`);
}
```

### @ohos.util.List.forEach 

```typescript
import List from '@ohos.util.List';

function test_forEach() {
  let list = new List();
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(4);
  
  const startTime = new Date();
  list.forEach((value, index) => {
    console.log("value:" + value, "index:" + index);
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);
}
```

### @ohos.util.List.sort 

```typescript
import List from '@ohos.util.List';

function test_sort() {
  let list = new List();
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(4);
  
  const startTime = new Date();
  list.sort((a: number, b: number) => a - b);
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Sort test: ${executionTime} ms`);
}
```

### @ohos.util.List.getSubList 

```typescript
import ohos.util.List from "@ohos.util.List";

function test_getSubList(loopCount: number) {
  let list = new List();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = list.getSubList(2, 4);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.clear 

```typescript
import ohos.util.List from @ohos.util.List

function test_clear(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  list.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.set 

```typescript
import List from '@ohos.util.List';

function test_set(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.set(i, loopCount-i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.List.convertToArray 

```typescript
function test_convertToArray(loopCount: number) {
  let list = new List();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.convertToArray();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```### @ohos.util.List.isEmpty 

```typescript
import List from '@ohos.util.List';

function test_isEmpty() {
  let list = new List<number>();
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(4);

  const startTime = new Date();
  let result = list.isEmpty();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();

  console.log(`isEmpty(): ${result}`);
  console.log(`Execution time: ${executionTime} ms`);
}

test_isEmpty();
```### @ohos.util.List.getFirst 

```typescript
生成的测试用例代码如下：

```typescript
import List from '@ohos.util.List';

function test_getFirst() {
  let list = new List();
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(4);

  const startTime = new Date();
  const result = list.getFirst();
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`API execution time: ${executionTime} ms`);
  console.log(`Result: ${result}`);
}

test_getFirst();
```### @ohos.util.List.getLast 

```typescript
import ohos.util.List from '@ohos.util.List'

function test_getLast(loopCount: number) {
  let list = new List<number>();
  for (let i = 0; i < loopCount; i++) {
    list.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.getLast();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Queue.constructor 

```typescript
import Queue from '@ohos.util.Queue';

function test_constructor() {
  const startTime = new Date();
  const queue = new Queue();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!{test_id}: ${executionTime} ms`);
}
```### @ohos.util.Queue.add 

```typescript
import Queue from '@ohos.util.Queue';

function test_add(loopCount: number) {
  let queue = new Queue();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    queue.add(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Queue.pop 

```typescript
import ohos.util.Queue from @ohos.util.Queue

function test_pop(loopCount: number) {
  let queue = new Queue<number>();
  for (let i = 0; i < loopCount; i++) {
    queue.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    queue.pop();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Queue.getFirst 

```typescript
import ohos.util.Queue from @ohos.util.Queue;

function test_getFirst() {
  let queue = new Queue();
  queue.add(2);
  queue.add(4);
  queue.add(5);
  queue.add(2);
  const startTime = new Date();
  let result = queue.getFirst();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Queue.forEach 

```typescript
import Queue from '@ohos.util.Queue';

function test_forEach() {
  // Create a new queue
  let queue = new Queue<number>();

  // Add elements to the queue
  queue.add(2);
  queue.add(4);
  queue.add(5);
  queue.add(4);

  // Perform the forEach operation
  queue.forEach((value, index) => {
    console.log(`value: ${value}, index: ${index}`);
  });
}

// Test the forEach operation
test_forEach();
```

### @ohos.util.Stack.constructor 

```typescript
import ohos.util.Stack from @ohos.util.Stack;

function test_constructor() {
  const startTime = new Date();
  let stack = new Stack();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Test constructor: ${executionTime} ms`);
}
```

### @ohos.util.Stack.push 

```typescript
import Stack from 'ohos.util.Stack';

function test_push(loopCount: number) {
  let stack = new Stack();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.push('test');
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_push(1000);
```

### @ohos.util.Stack.pop 

```typescript
import ohos.util.Stack from @ohos.util.Stack

function test_pop() {
  let stack = new Stack();
  stack.push(2);
  stack.push(4);
  stack.push(5);
  stack.push(2);
  stack.push(4);
  
  const startTime = new Date();
  let result = stack.pop();
  const endTime = new Date();
  
  console.log(`Result: ${result}`);
  console.log(`Execution Time: ${endTime.getTime() - startTime.getTime()} ms`);
}

test_pop();
```

### @ohos.util.Stack.peek 

```typescript
import Stack from '@ohos.util.Stack';
function test_peek() {
  let stack = new Stack<number>();
  stack.push(2);
  stack.push(4);
  stack.push(5);
  stack.push(2);
  
  const startTime = new Date();
  let result = stack.peek();
  const endTime = new Date();
  
  console.log(`Peeked element: ${result}`);
  console.log(`Execution time: ${endTime.getTime() - startTime.getTime()} ms`);
}

test_peek();
```

### @ohos.util.Stack.locate 

```typescript
import Stack from '@ohos.util.Stack';

function test_locate(loopCount: number) {
  let stack = new Stack<number>();
  for (let i = 0; i < loopCount; i++) {
    stack.push(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.locate(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

// Example usage
test_locate(1000);
```### @ohos.util.Stack.forEach 

```typescript
import Stack from '@ohos.util.Stack';

function test_forEach(loopCount: number) {
  let stack = new Stack<number>();
  for (let i = 0; i < loopCount; i++) {
    stack.push(i);
  }
  const startTime = new Date();
  stack.forEach((value, index) => {
    console.log("value:" + value, "index:" + index);
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```### @ohos.util.Stack.isEmpty 

```typescript
import ohos.util.Stack from @ohos.util.Stack

function test_isEmpty() {
  let stack = new Stack();

  console.log("Test Case 1:");
  console.log("Expected: true");
  console.log("Actual  : " + stack.isEmpty());
  console.log("");

  console.log("Test Case 2:");
  stack.push(1);
  stack.push(2);
  console.log("Expected: false");
  console.log("Actual  : " + stack.isEmpty());
  console.log("");
}

test_isEmpty()
```

### @ohos.util.Vector.constructor 

```typescript
import Vector from '@ohos.util.Vector';

function test_constructor() {
  const startTime = new Date();
  const vector = new Vector();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Constructor: ${executionTime} ms`);
}
```

### @ohos.util.Vector.add 

```typescript
import ohos.util.Vector from @ohos.util.Vector

function test_add(loopCount: number) {
  let vector = new Vector();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.insert 

```typescript
import Vector from '@ohos.util.Vector';

function test_insert(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.insert(i, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.insert(`element_${i}`, i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.has 

```typescript
import Vector from "@ohos.util.Vector";

function test_has(loopCount: number) {
  let vector = new Vector<string>();
  for (let i = 0; i < loopCount; i++) {
    vector.add("squirrel");
  }
  
  const startTime = new Date();
  
  for (let i = 0; i < loopCount; i++) {
    vector.has("squirrel");
  }
  
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.getIndexOf 

```typescript
import Vector from '@ohos.util.Vector';

function test_getIndexOf(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.getIndexOf(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.getLastIndexOf 

```typescript
import Vector from '@ohos.util.Vector';

function test_getLastIndexOf(loopCount: number) {
  const vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.getLastIndexOf(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_getLastIndexOf(1000);
```

### @ohos.util.Vector.removeByIndex 

```
import ohos.util.Vector from '@ohos.util.Vector';

function test_removeByIndex(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.removeByIndex(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_removeByIndex(1000);
```### @ohos.util.Vector.remove 

```typescript
import Vector from 'ohos.util.Vector';

function test_remove(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.removeByRange 

```typescript
import ohos.util.Vector from @ohos.util.Vector

import { expect } from 'chai';

describe('Vector', () => {
    describe('#removeByRange', () => {
        let vector: Vector<number>;

        beforeEach(() => {
            vector = new Vector<number>();
            vector.add(2);
            vector.add(4);
            vector.add(5);
            vector.add(4);
        });

        it('should remove elements within the specified range', () => {
            vector.removeByRange(2, 4);
            expect(vector.size()).to.equal(1);
            expect(vector.get(0)).to.equal(2);
        });

        it('should remove elements when fromIndex is equal to toIndex', () => {
            vector.removeByRange(1, 1);
            expect(vector.size()).to.equal(3);
            expect(vector.contains(4)).to.be.true;
        });

        it('should remove elements when fromIndex is greater than toIndex', () => {
            vector.removeByRange(3, 2);
            expect(vector.size()).to.equal(4);
            expect(vector.contains(5)).to.be.true;
        });

        it('should throw an error if fromIndex is out of range', () => {
            expect(() => vector.removeByRange(-1, 3)).to.throw(RangeError);
            expect(() => vector.removeByRange(5, 3)).to.throw(RangeError);
        });

        it('should throw an error if toIndex is out of range', () => {
            expect(() => vector.removeByRange(0, 5)).to.throw(RangeError);
            expect(() => vector.removeByRange(0, -1)).to.throw(RangeError);
        });
    });
});
```

### @ohos.util.Vector.replaceAllElements 

```typescript
import ohos.util.Vector from @ohos.util.Vector

function test_replaceAllElements(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  
  const startTime = new Date();
  vector.replaceAllElements((value) => {
    // 用户操作逻辑根据实际场景进行添加。
    return value * 2;
  });
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.forEach 

```typescript
import ohos.util.Vector from "@ohos.util.Vector";

function test_forEach(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  vector.forEach((value, index) => {
    console.log("value:" + value, "index:" + index);
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_forEach: ${averageTime} ms`);
}
```

### @ohos.util.Vector.sort 

```typescript
import Vector from '@ohos.util.Vector';

function test_sort(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  
  const startTime = new Date();
  vector.sort((a: number, b: number) => a - b);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_sort: ${averageTime} ms`);
}
```

### @ohos.util.Vector.subVector 

```typescript
import Vector from "@ohos.util.Vector";

function test_subVector(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = vector.subVector(i, loopCount);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_subVector(10000);
```### @ohos.util.Vector.clear 

```typescript
import ohos.util.Vector from '@ohos.util.Vector';

function test_clear(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  vector.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```

### @ohos.util.Vector.clone 

```typescript
import ohos.util.Vector from @ohos.util.Vector

function test_clone(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let clone = vector.clone();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.getCapacity 

```typescript
import ohos.util.Vector from '@ohos.util.Vector';

function test_getCapacity(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.getCapacity();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.convertToArray 

```typescript
function test_convertToArray(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = vector.convertToArray();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.isEmpty 

```typescript
import Vector from "@ohos.util.Vector";

function test_isEmpty() {
  let vector = new Vector();
  vector.add(2);
  vector.add(4);
  vector.add(5);
  vector.add(4);

  const startTime = new Date();
  let result = vector.isEmpty();
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`isEmpty Test: ${executionTime} ms`);
}

test_isEmpty();
```

### @ohos.util.Vector.increaseCapacityTo 

```typescript
function test_increaseCapacityTo() {
  const vector = new Vector();
  vector.add(2);
  vector.add(4);
  vector.add(5);
  vector.add(4);

  const startTime1 = new Date();
  vector.increaseCapacityTo(2);
  const endTime1 = new Date();
  const executionTime1 = endTime1.getTime() - startTime1.getTime();
  const averageTime1 = executionTime1 / 1;
  console.log(`!${test_id}: ${averageTime1} ms`);

  const startTime2 = new Date();
  vector.increaseCapacityTo(12);
  const endTime2 = new Date();
  const executionTime2 = endTime2.getTime() - startTime2.getTime();
  const averageTime2 = executionTime2 / 1;
  console.log(`!${test_id}: ${averageTime2} ms`);
}
```

### @ohos.util.Vector.trimToCurrentLength 

```typescript
import Vector from '@ohos.util.Vector';

function test_trimToCurrentLength() {
  let vector = new Vector();
  vector.add(2);
  vector.add(4);
  vector.add(5);
  vector.add(4);

  const startTime = new Date();
  vector.trimToCurrentLength();
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Executed trimToCurrentLength in ${executionTime} ms`);
}

test_trimToCurrentLength();
```### @ohos.util.Vector.toString 

```typescript
function test_toString(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.toString();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.copyToArray 

```typescript
import ohos.util.Vector from @ohos.util.Vector

function test_copyToArray(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  let array = new Array<number>(loopCount);
  const startTime = new Date();
  vector.copyToArray(array);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.getFirstElement 

```typescript
import ohos.util.Vector from @ohos.util.Vector
```

### @ohos.util.Vector.getLastElement 

```typescript
import ohos.util.Vector from @ohos.util.Vector

function test_getLastElement(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.getLastElement();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.getLastIndexFrom 

```typescript
import ohos.util.Vector from @ohos.util.Vector

function test_getLastIndexFrom(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.getLastIndexFrom(i, 0);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.getIndexFrom 

```typescript
import ohos.util.Vector from "@ohos.util.Vector";

function test_getIndexFrom(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.getIndexFrom(i, i - 1);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.Vector.setLength 

```typescript
import Vector from '@ohos.util.Vector';

function test_setLength(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }

  const startTime = new Date();
  vector.setLength(loopCount * 2);
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}

test_setLength(100);
```

### @ohos.util.Vector.get 

```typescript
import Vector from 'ohos.util.Vector';

function test_get(loopCount: number) {
  let vector = new Vector();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.get(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_get(1000);
```

### @ohos.util.Vector.set 

```typescript
import Vector from 'ohos.util.Vector';

function test_set(loopCount: number) {
  let vector = new Vector<number>();
  for (let i = 0; i < loopCount; i++) {
    vector.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.set(i, i + 1);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_set(100);
```

### @ohos.util.PlainArray.constructor 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_constructor() {
  const startTime = new Date();
  const plainArray = new PlainArray();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!test_constructor: ${executionTime} ms`);
}
```

### @ohos.util.PlainArray.isEmpty 

```typescript
import PlainArray from 'ohos.util.PlainArray';

function test_isEmpty() {
  const plainArray = new PlainArray();
  const startTime = new Date();
  const result = plainArray.isEmpty();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`isEmpty: ${result}`);
  console.log(`Execution time: ${executionTime} ms`);
}
```

### @ohos.util.PlainArray.has 

```javascript
import ohos.util.PlainArray from @ohos.util.PlainArray;

function test_has(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "squirrel");
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.has(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_has(1000);
```### @ohos.util.PlainArray.get 

```typescript
Code:

```
import PlainArray from '@ohos.util.PlainArray';

function test_get(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `value${i}`);
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
```### @ohos.util.PlainArray.getIndexOfKey 

```typescript
function test_getIndexOfKey(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, i.toString());
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.getIndexOfKey(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.getIndexOfValue 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_getIndexOfValue(loopCount: number): void {
  let plainArray = new PlainArray<number>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, i.toString());
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.getIndexOfValue(i.toString());
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.getKeyAt 

```typescript
import ohos.util.PlainArray from "@ohos.util.PlainArray";

function test_getKeyAt(loopCount: number) {
  let plainArray = new PlainArray<number, string>();
  plainArray.add(1, "squirrel");
  plainArray.add(2, "sparrow");
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = plainArray.getKeyAt(1);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.getValueAt 

```typescript
function test_getValueAt(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let result = plainArray.getValueAt(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.clone 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_clone() {
  let plainArray = new PlainArray();
  plainArray.add(1, "squirrel");
  plainArray.add(2, "sparrow");
  
  const startTime = new Date();
  
  let newPlainArray = plainArray.clone();
  
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Clone execution time: ${executionTime} ms`);
}
// Example usage
test_clone();
```

### @ohos.util.PlainArray.add 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_add(loopCount: number) {
  const plainArray = new PlainArray();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "value");
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.remove 

```typescript
import { PlainArray } from "@ohos.util";

function test_remove(loopCount: number) {
  let plainArray = new PlainArray<number>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.removeAt 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_removeAt(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "element" + i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.removeAt(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.removeRangeFrom 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_removeRangeFrom(loopCount: number) {
  let plainArray = new PlainArray<number>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i);
  }
  const startTime = new Date();
  plainArray.removeRangeFrom(0, loopCount);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.PlainArray.setValueAt 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_setValueAt(loopCount: number) {
  const plainArray = new PlainArray<number>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, i.toString());
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.setValueAt(i, i.toString() + ' updated');
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_setValueAt: ${averageTime} ms`);
}
```### @ohos.util.PlainArray.toString 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_toString(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, 'value' + i);
  }
  const startTime = new Date();
  plainArray.toString();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!test_toString: ${executionTime} ms`);
}
```

### @ohos.util.PlainArray.clear 

```typescript
import PlainArray from '@ohos.util.PlainArray';

function test_clear(loopCount: number) {
  const plainArray = new PlainArray<number>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i);
  }
  const startTime = new Date();
  plainArray.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`clear: ${executionTime} ms`);
}

test_clear(1000);
```### @ohos.util.PlainArray.forEach 

```typescript
生成的测试函数如下所示：

```typescript
function test_forEach(loopCount: number) {
  let plainArray = new PlainArray();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "value: " + i);
  }
  const startTime = new Date();
  plainArray.forEach((value, index) => {
    console.log("value:" + value, "index:" + index);
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```### @ohos.util.TreeMap.constructor 

```typescript
import TreeMap from 'ohos.util.TreeMap';

function test_constructor() {
  const startTime = new Date();
  const treeMap = new TreeMap();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```### @ohos.util.TreeMap.isEmpty 

```typescript
import { TreeMap } from "ohos.util.TreeMap";

function test_isEmpty() {
  const treeMap = new TreeMap();
  const startTime = new Date();
  treeMap.isEmpty();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`isEmpty execution time: ${executionTime} ms`);
}
```

### @ohos.util.TreeMap.hasKey 

```typescript
import TreeMap from "@ohos.util.TreeMap";

function test_hasKey() {
  let treeMap = new TreeMap();
  let startTime = new Date();
  
  // Test with an empty TreeMap
  let result = treeMap.hasKey("squirrel");
  
  // Test after adding a key-value pair
  treeMap.set("squirrel", 123);
  let result1 = treeMap.hasKey("squirrel");
  
  let endTime = new Date();
  let executionTime = endTime.getTime() - startTime.getTime();
  
  console.log(`test_hasKey: ${executionTime} ms`);
}
```### @ohos.util.TreeMap.hasValue 

```typescript
import TreeMap from '@ohos.util.TreeMap';

function test_hasValue(loopCount: number) {
  let treeMap = new TreeMap();
  for (let i = 0; i < loopCount; i++) {
    treeMap.set(`key${i}`, `value${i}`);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeMap.hasValue(`value${i}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeMap.get 

```typescript
代码示例： 

```typescript
import TreeMap from 'ohos.util.TreeMap';

function test_get(loopCount: number) {
  let treeMap = new TreeMap<string, number>();
  for (let i = 0; i < loopCount; i++) {
    treeMap.set(`key${i}`, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeMap.get(`key${i}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```### @ohos.util.TreeMap.getFirstKey 

```typescript
import TreeMap from '@ohos.util.TreeMap';

function test_getFirstKey() {
  let treeMap = new TreeMap();
  treeMap.set("squirrel", 123);
  treeMap.set("sparrow", 356);
  
  const startTime = new Date();
  let result = treeMap.getFirstKey();
  const endTime = new Date();

  console.log(`The first key in the TreeMap is ${result}`);
  console.log(`Execution time: ${endTime.getTime() - startTime.getTime()} ms`);
}

test_getFirstKey();
```

### @ohos.util.TreeMap.getLastKey 

```typescript
import TreeMap from "@ohos.util.TreeMap";

function test_getLastKey() {
  let treeMap = new TreeMap();
  treeMap.set("squirrel", 123);
  treeMap.set("sparrow", 356);
  
  const startTime = new Date();
  let result = treeMap.getLastKey();
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  
  console.log(`Execution Time: ${executionTime} ms`);
  console.log(`Last Key: ${result}`);
}
```### @ohos.util.TreeMap.setAll 

```typescript
import { TreeMap } from '@ohos.util.TreeMap';

function test_setAll() {
  let treeMap = new TreeMap<number, string>();
  treeMap.set(1, "apple");
  treeMap.set(2, "banana");
  
  let map = new TreeMap<number, string>();
  map.set(3, "orange");
  map.setAll(treeMap);
  
  map.forEach((value, key) => {
    console.log("value: " + value, "key: " + key);
  });
}

test_setAll();
```

### @ohos.util.TreeMap.set 

```typescript
import TreeMap from '@ohos.util.TreeMap';

test('test_set', () => {
  let treeMap = new TreeMap<number>();
  const startTime = new Date();

  // Add data to the tree map
  // loopCount represents the number of data to add
  for (let i = 0; i < loopCount; i++) {
    treeMap.set(i, i.toString());
  }

  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;

  console.log(`Average time for set operation: ${averageTime} ms`);
});
```

### @ohos.util.TreeMap.remove 

```typescript
import TreeMap from '@ohos.util.TreeMap';

function test_remove(loopCount) {
  let treeMap = new TreeMap();
  for (let i = 0; i < loopCount; i++) {
    treeMap.set(i.toString(), i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeMap.remove(i.toString());
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeMap.getLowerKey 

```typescript
import TreeMap from '@ohos.util.TreeMap';

function test_getLowerKey(loopCount: number) {
  let treeMap = new TreeMap();
  treeMap.set("squirrel", 123);
  treeMap.set("sparrow", 356);
  treeMap.set("gander", 356);
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeMap.getLowerKey("sparrow");
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`API execution time: ${averageTime} ms`);
}
```### @ohos.util.TreeMap.getHigherKey 

```typescript
import ohos.util.TreeMap from '@ohos.util.TreeMap';

function test_getHigherKey() {
  let treeMap = new TreeMap();
  treeMap.set("squirrel", 123);
  treeMap.set("sparrow", 356);
  treeMap.set("gander", 356);

  const startTime = new Date();
  let result = treeMap.getHigherKey("sparrow"); 
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`getHigherKey test: ${executionTime} ms`);
}
```### @ohos.util.TreeMap.replace 

```typescript
import TreeMap from '@ohos.util.TreeMap';

function test_replace(loopCount: number) {
  let treeMap = new TreeMap<number, string>();
  for (let i = 0; i < loopCount; i++) {
    treeMap.set(i, `value_${i}`);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeMap.replace(i, `new_value_${i}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeMap.clear 

```typescript
import TreeMap from "@ohos.util.TreeMap";

function test_clear(loopCount: number) {
  let treeMap = new TreeMap<string, number>();
  for (let i = 0; i < loopCount; i++) {
    treeMap.set("key" + i, i);
  }
  const startTime = new Date();
  treeMap.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```### @ohos.util.TreeMap.keys 

```typescript
import ohos.utils.TreeMap from "@ohos.utils.TreeMap";

function test_keys(loopCount: number) {
  let treeMap = new TreeMap();
  for (let i = 0; i < loopCount; i++) {
    treeMap.set(`key${i}`, `value${i}`);
  }
  const startTime = new Date();
  const iter = treeMap.keys();
  let temp = iter.next().value;
  while (temp !== undefined) {
    console.log("value:" + temp);
    temp = iter.next().value;
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_keys(10);
```### @ohos.util.TreeMap.values 

```typescript
function test_values(loopCount: number) {
  let treeMap = new TreeMap<string, number>();
  treeMap.set("squirrel", 123);
  treeMap.set("sparrow", 356);
  
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    let iter = treeMap.values();
    let temp = iter.next().value;
    while (temp !== undefined) {
      temp = iter.next().value;
    }
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeMap.forEach 

```typescript
import ohos.util.TreeMap from '@ohos.util.TreeMap';

function test_forEach() {
  let treeMap = new TreeMap();
  treeMap.set("sparrow", 123);
  treeMap.set("gull", 357);
  
  const startTime = new Date();
  treeMap.forEach((value, key) => {
    console.log("value:" + value, "key:" + key);
  });
  const endTime = new Date();

  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`forEach execution time: ${executionTime} ms`);
}
```

### @ohos.util.TreeMap.entries 

```typescript
import TreeMap from '@ohos.util.TreeMap';

function test_entries() {
  let treeMap = new TreeMap();
  treeMap.set("squirrel", 123);
  treeMap.set("sparrow", 356);
  let iter = treeMap.entries();
  let temp = iter.next().value;
  while(temp !== undefined) {
    console.log("key:" + temp[0]);
    console.log("value:" + temp[1]);
    temp = iter.next().value;
  }
}

test_entries();
```

### @ohos.util.TreeSet.constructor 

```typescript
import ohos.util.TreeSet from '@ohos.util.TreeSet';

function test_constructor() {
  const startTime = new Date();
  let treeSet = new TreeSet();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!test_constructor: ${executionTime} ms`);
}
```### @ohos.util.TreeSet.isEmpty 

```typescript
import ohos.util.TreeSet from '@ohos.util.TreeSet';

function test_isEmpty() {
  const treeSet = new TreeSet();
  treeSet.add(1);
  const startTime = new Date();
  const result = treeSet.isEmpty();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Test result: ${result}`);
  console.log(`Execution time: ${executionTime} ms`);
}

test_isEmpty();
```### @ohos.util.TreeSet.has 

```typescript
import TreeSet from '@ohos.util.TreeSet';

function test_has(loopCount: number) {
  let set = new TreeSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.has(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.getFirstValue 

```typescript
import TreeSet from '@ohos.util.TreeSet';

function test_getFirstValue(loopCount: number) {
  let treeSet = new TreeSet<string>();
  treeSet.add("squirrel");
  treeSet.add("sparrow");

  const startTime = new Date();
  
  for (let i = 0; i < loopCount; i++) {
    treeSet.getFirstValue();
  }
  
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.getLastValue 

```typescript
import ohos.util.TreeSet from @ohos.util.TreeSet;

function test_getLastValue(loopCount: number) {
  let treeSet = new TreeSet<string>();
  
  for (let i = 0; i < loopCount; i++) {
    treeSet.add(`element${i}`);
  }
  
  const startTime = new Date();
  const result = treeSet.getLastValue();
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  
  console.log(`getLastValue Test: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.add 

```typescript
import ohos.util.TreeSet from @ohos.util.TreeSet;

function test_add(loopCount: number) {
  let set = new TreeSet<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.remove 

```typescript
import ohos.util.TreeSet from @ohos.util.TreeSet;

function test_remove(loopCount: number) {
  let treeSet = new TreeSet();
  for (let i = 0; i < loopCount; i++) {
    treeSet.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeSet.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_remove(1000);
```

### @ohos.util.TreeSet.getLowerValue 

```typescript
import ohos.util.TreeSet from '@ohos.util.TreeSet';

function test_getLowerValue() {
  let treeSet = new TreeSet();
  treeSet.add("squirrel");
  treeSet.add("sparrow");
  treeSet.add("gander");
  
  const startTime = new Date();
  let result = treeSet.getLowerValue("sparrow");
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();

  console.log(`Execution Time: ${executionTime} ms`);
  console.log(`Result: ${result}`);
}

test_getLowerValue();
```

### @ohos.util.TreeSet.getHigherValue 

```typescript
import TreeSet from '@ohos.util.TreeSet';

function test_getHigherValue(loopCount: number) {
  let treeSet = new TreeSet();
  treeSet.add("squirrel");
  treeSet.add("sparrow");
  treeSet.add("gander");
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeSet.getHigherValue("sparrow");
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.popFirst 

```typescript
import TreeSet from "ohos.util.TreeSet";

function test_treeSet_popFirst(loopCount: number) {
  let treeSet = new TreeSet<string>();
  for (let i = 0; i < loopCount; i++) {
    treeSet.add(`element_${i}`);
  }
  
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeSet.popFirst();
  }
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.popLast 

```typescript
import TreeSet from '@ohos.util.TreeSet';

function test_popLast() {
  let treeSet = new TreeSet();
  treeSet.add("squirrel");
  treeSet.add("sparrow");
  
  const startTime = new Date();
  let result = treeSet.popLast();
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);
  console.log(`Result: ${result}`);
}

test_popLast();
```

### @ohos.util.TreeSet.clear 

```typescript
function test_clear(loopCount: number) {
  let treeSet = new TreeSet();
  for (let i = 0; i < loopCount; i++) {
    treeSet.add(i.toString());
  }
  const startTime = new Date();
  treeSet.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```

### @ohos.util.TreeSet.values 

```typescript
import ohos.util.TreeSet from '@ohos.util.TreeSet';

function test_values() {
  let treeSet = new TreeSet();
  treeSet.add("squirrel");
  treeSet.add("sparrow");
  const startTime = new Date();
  let iter = treeSet.values();
  let temp = iter.next().value;
  while (temp != undefined) {
    console.log("value:" + temp);
    temp = iter.next().value;
  }
  const endTime= new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);
}
```### @ohos.util.TreeSet.forEach 

```typescript
import ohos.util.TreeSet from @ohos.util.TreeSet;

function test_forEach(loopCount: number) {
  let treeSet = new TreeSet<string>();
  treeSet.add("sparrow");
  treeSet.add("gull");

  const startTime = new Date();
  
  treeSet.forEach((value, key) => {
    console.log("value:" + value, "key:" + key);
  });

  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.TreeSet.entries 

```typescript
import ohos.util.TreeSet from @ohos.util.TreeSet

function test_entries(loopCount: number) {
  let treeSet = new TreeSet<string>();
  treeSet.add("squirrel");
  treeSet.add("sparrow");
  let iter = treeSet.entries();
  let temp = iter.next().value;
  const startTime = new Date();
  while(temp !== undefined) {
    console.log("key:" + temp[0]);
    console.log("value:" + temp[1]);
    temp = iter.next().value;
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.constructor 

```typescript
function test_constructor() {
  const startTime = new Date();
  let arrayList = new ArrayList();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!test_constructor: ${executionTime} ms`);
}
```

### @ohos.util.ArrayList.add 

```typescript
import { describe, it } from 'mocha';
import { expect } from 'chai';
import ArrayList from 'ohos.util.ArrayList';

describe('ArrayList add API', () => {
  it('should insert elements at the end of the ArrayList', () => {
    const arrayList = new ArrayList();
    const result1 = arrayList.add("a");
    const result2 = arrayList.add(1);
    const result3 = arrayList.add([1, 2, 3]);
    const result4 = arrayList.add({ name: "Dylon", age: "13" });
    const result5 = arrayList.add(false);

    expect(result1).to.equal(true);
    expect(result2).to.equal(true);
    expect(result3).to.equal(true);
    expect(result4).to.equal(true);
    expect(result5).to.equal(true);
    expect(arrayList.size()).to.equal(5);
  });
});
```

### @ohos.util.ArrayList.insert 

```typescript
function test_insert(loopCount: number) {
  let arrayList = new ArrayList();
  for (let i = 0; i < loopCount; i++) {
    arrayList.insert(i, i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    arrayList.insert(i, i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.has 

```typescript
import ArrayList from "@ohos.util.ArrayList";

function test_has(loopCount: number) {
  let arrayList = new ArrayList<string>();

  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    arrayList.has("squirrel");
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_has(1000);
```

### @ohos.util.ArrayList.getIndexOf 

```typescript
import ohos.util.ArrayList from @ohos.util.ArrayList

function test_getIndexOf(loopCount: number) {
  let arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    arrayList.getIndexOf(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.getLastIndexOf 

```typescript
import ohos.data.ArrayList from '@ohos.util.ArrayList';

function test_getLastIndexOf(loopCount: number) {
  let arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    arrayList.getLastIndexOf(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_getLastIndexOf: ${averageTime} ms`);
}
```### @ohos.util.ArrayList.removeByIndex 

```typescript
import ArrayList from '@ohos.util.ArrayList';

function test_removeByIndex(loopCount: number) {
  const arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    arrayList.removeByIndex(i);
  }
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.remove 

```typescript
import ohos.util.ArrayList from '@ohos.util.ArrayList';

function test_remove(loopCount: number) {
  let arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    arrayList.remove(i);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

test_remove(1000);
```

### @ohos.util.ArrayList.removeByRange 

```typescript
import ArrayList from '@ohos.util.ArrayList';

function test_removeByRange(loopCount: number) {
  let arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  const startTime = new Date();
  arrayList.removeByRange(2, 4);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.replaceAllElements 

```typescript
生成的测试用例代码如下：

```typescript
import ohos.util.ArrayList from '@ohos.util.ArrayList';

function test_replaceAllElements() {
  let arrayList = new ArrayList<number>();
  arrayList.add(2);
  arrayList.add(4);
  arrayList.add(5);
  arrayList.add(4);
  
  const startTime = new Date();
  arrayList.replaceAllElements((value) => {
    // 用户操作逻辑根据实际场景进行添加。
    return value;
  });
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`replace all elements: ${executionTime} ms`);
}
```### @ohos.util.ArrayList.forEach 

```typescript
import ArrayList from '@ohos.util.ArrayList';
import { performance } from 'perf_hooks';

function test_forEach(loopCount: number) {
  let arrayList = new ArrayList();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  
  const startTime = performance.now();
  
  arrayList.forEach((value, index) => {
    // do something with value and index
  });
  
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  
  console.log(`!${test_id}: ${executionTime} ms`);
}
```

### @ohos.util.ArrayList.sort 

```typescript
function test_sort(loopCount: number) {
  let arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(Math.floor(Math.random() * loopCount));
  }
  
  const startTime = new Date();
  arrayList.sort();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Sort ArrayList: ${executionTime} ms`);
}
```

### @ohos.util.ArrayList.subArrayList 

```typescript
import ohos.util.ArrayList from '@ohos.util.ArrayList';

function test_subArrayList() {
  let arrayList = new ArrayList();
  arrayList.add(2);
  arrayList.add(4);
  arrayList.add(5);
  arrayList.add(4);
  const startTime = new Date();
  let result1 = arrayList.subArrayList(2, 4);
  let result2 = arrayList.subArrayList(4, 3);
  let result3 = arrayList.subArrayList(2, 6);
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`Execution time: ${executionTime} ms`);
}

test_subArrayList();
```

### @ohos.util.ArrayList.clear 

```typescript
import ohos.util.ArrayList from @ohos.util.ArrayList

function test_clear(loopCount: number) {
  let arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  const startTime = new Date();
  arrayList.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.clone 

```typescript
import ArrayList from 'ohos.util.ArrayList';

function test_clone() {
  let arrayList = new ArrayList<number>();
  arrayList.add(2);
	 arrayList.add(4);
	 arrayList.add(5);
	 arrayList.add(4);
	 
	 const startTime = new Date();
	 let cloneArrayList = arrayList.clone();
	 cloneArrayList.add(6);
	 const endTime = new Date();
	 
	 const executionTime = endTime.getTime() - startTime.getTime();
	 console.log(`cloneArrayList: ${cloneArrayList.toString()}`);
	 console.log(`ArrayList: ${arrayList.toString()}`);
	 console.log(`Execution time: ${executionTime} ms`);
}

test_clone();
```

### @ohos.util.ArrayList.getCapacity 

```typescript
import ArrayList from "@ohos.util.ArrayList";

function test_getCapacity() {
  let arrayList = new ArrayList();
  arrayList.add(2);
  arrayList.add(4);
  arrayList.add(5);
  arrayList.add(4);
  const startTime = new Date();
  arrayList.getCapacity();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`getCapacity: ${executionTime} ms`);
}

test_getCapacity();
```### @ohos.util.ArrayList.convertToArray 

```typescript
import ArrayList from 'ohos.util.ArrayList';

function test_convertToArray(loopCount: number) {
  const arrayList = new ArrayList<number>();
  for (let i = 0; i < loopCount; i++) {
    arrayList.add(i);
  }
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    const result = arrayList.convertToArray();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_convertToArray: ${averageTime} ms`);
}
```

### @ohos.util.ArrayList.isEmpty 

```typescript
import ohos.util.ArrayList from @ohos.util.ArrayList

function test_isEmpty() {
  let arrayList = new ArrayList();
  arrayList.add(2);
  arrayList.add(4);
  arrayList.add(5);
  arrayList.add(4);
  
  const startTime = new Date();
  const result = arrayList.isEmpty();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  
  console.log(`isEmpty: ${result}`);
  console.log(`Execution Time: ${executionTime} ms`);
}
```

### @ohos.util.ArrayList.increaseCapacityTo 

```typescript
import ohos.util.ArrayList from '@ohos.util.ArrayList';

function test_increaseCapacityTo() {
  let arrayList = new ArrayList();
  arrayList.add(2);
  arrayList.add(4);
  arrayList.add(5);
  arrayList.add(4);
  
  const startTime = new Date();
  
  arrayList.increaseCapacityTo(2);
  
  const endTime = new Date();
  const executionTime1 = endTime.getTime() - startTime.getTime();
  
  startTime = new Date();
  
  arrayList.increaseCapacityTo(8);
  
  endTime = new Date();
  const executionTime2 = endTime.getTime() - startTime.getTime();
  
  console.log(`Execution time for increaseCapacityTo(2): ${executionTime1} ms`);
  console.log(`Execution time for increaseCapacityTo(8): ${executionTime2} ms`);
}
```### @ohos.util.ArrayList.trimToCurrentLength 

```typescript
import ArrayList from '@ohos.util.ArrayList';

function test_trimToCurrentLength() {
  let arrayList = new ArrayList();
  
  // Add elements to the ArrayList
  arrayList.add(2);
  arrayList.add(4);
  arrayList.add(5);
  arrayList.add(4);
  
  // Call the trimToCurrentLength method
  const startTime = new Date();
  arrayList.trimToCurrentLength();
  const endTime = new Date();
  
  // Calculate the execution time
  const executionTime = endTime.getTime() - startTime.getTime();
  
  console.log(`Trimming to current length: ${executionTime} ms`);
}
```

### @ohos.util.HashSet.constructor 

```typescript
import HashSet from "@ohos.util.HashSet";
describe("HashSet constructor", () => {
  test("should create an empty HashSet", () => {
    const hashSet = new HashSet();
    expect(hashSet.size()).toBe(0);
  });
});
```

### @ohos.util.HashSet.isEmpty 

```typescript
import HashSet from "@ohos.util.HashSet";

function test_isEmpty(loopCount: number) {
  const hashSet = new HashSet<number>();
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashSet.isEmpty();
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!test_isEmpty: ${averageTime} ms`);
}
```

### @ohos.util.HashSet.has 

```typescript
import { HashSet } from '@ohos.util';

function test_has(loopCount: number): number {
  let hashSet = new HashSet<string>();
  for (let i = 0; i < loopCount; i++) {
    hashSet.add(`element-${i}`);
  }

  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashSet.has(`element-${i}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  return executionTime;
}

console.log(test_has(100));
```### @ohos.util.HashSet.add 

```typescript
import ohos.util.HashSet from @ohos.util.HashSet

function test_add(loopCount: number) {
  const hashSet = new HashSet<string>();
  
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashSet.add(`value_${i}`);
  }
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```

### @ohos.util.HashSet.remove 

```typescript
import HashSet from "@ohos.util.HashSet";

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

### @ohos.util.HashSet.clear 

```typescript
import ohos.util.HashSet from @ohos.util.HashSet;

function test_clear(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  const startTime = new Date();
  set.clear();
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```

### @ohos.util.HashSet.values 

```typescript
import HashSet from 'ohos.util.HashSet';

function test_values(loopCount: number) {
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }

  const startTime = new Date();
  let iter = set.values();
  let temp = iter.next().value;
  while (temp !== undefined) {
    temp = iter.next().value;
  }
  const endTime = new Date();
  
  const executionTime = endTime.getTime() - startTime.getTime();
  console.log(`!${test_id}: ${executionTime} ms`);
}
```### @ohos.util.HashSet.forEach 

```typescript
import ohos.util.HashSet from "@ohos.util.HashSet";

function test_forEach() {
  let hashSet = new HashSet();
  hashSet.add("sparrow");
  hashSet.add("squirrel");
  hashSet.forEach((value, key) => {
    console.log("value:" + value, "key:" + key);
  });
}

test_forEach();
```

### @ohos.util.HashSet.entries 

```typescript
import HashSet from "@ohos.util.HashSet";

function test_entries(loopCount: number) {
  let hashSet = new HashSet();
  hashSet.add("squirrel");
  hashSet.add("sparrow");
  
  const startTime = new Date();
  
  let iter = hashSet.entries();
  let temp = iter.next().value;
  while (temp != undefined) {
    console.log("key:" + temp[0]);
    console.log("value:" + temp[1]);
    temp = iter.next().value;
  }
  
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}
```