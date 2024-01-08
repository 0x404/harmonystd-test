import LinkedList from '@ohos.util.LinkedList';

function test_add(loopCount: number) {
  // test: @ohos.util.LinkedList.add
  // desc: 测试LinkedList容器add方法
  const test_id = 1;

  // prepare: setup objects to test
  let linkedList = new LinkedList<any>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 在链表尾部插入元素
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_addFirst(loopCount: number) {
  // test: @ohos.util.LinkedList.addFirst
  // desc: 测试LinkedList容器addFirst方法
  const test_id = 2;

  // prepare: setup objects to test
  const linkedList = new LinkedList<any>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.addFirst(`Element${i}`); // 在链表头部插入元素
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_insert(loopCount: number) {
  // test: @ohos.util.LinkedList.insert
  // desc: 测试LinkedList容器insert方法
  const test_id = 3;

  // prepare: 插入一些元素作为测试基础数据
  const linkedList = new LinkedList<any>();
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 向链表尾部插入元素
  }

  // test
  const indexToInsert = loopCount / 2; // 在链表中间位置插入元素
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.insert(indexToInsert, `NewElement${i}`); // 在指定索引位置插入元素
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_has(loopCount: number) {
  // test: @ohos.util.LinkedList.has
  // desc: 测试LinkedList容器has方法

  const test_id = 4;
  const linkedList = new LinkedList<any>();

  // prepare
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 向链表尾部插入元素
  }

  // test
  const elementToFind = `Element${loopCount / 2}`; // 在链表中间位置插入的元素
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.has(elementToFind); // 判断链表是否含有指定元素
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_get(loopCount: number) {
  // test: @ohos.util.LinkedList.get
  // desc: 测试LinkedList容器get方法

  const test_id = 5;
  const linkedList = new LinkedList<any>();

  // prepare
  for (let i = 0; i < loopCount; i++) {
    linkedList.add(`Element${i}`); // 向链表尾部插入元素
  }

  // test
  const indexToGet = loopCount / 2; // 获取链表中间位置的元素
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    linkedList.get(indexToGet); // 根据索引获取链表中的元素
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!ends

// 运行测试函数
test_add(500000);
test_addFirst(500000);
test_insert(500000);
test_has(500000);
test_get(500000);