import Deque from '@ohos.util.Deque';

function test_insert_front(loopCount: number) {
  // test: @ohos.util.Deque.insertFront
  // desc: 测试Deque容器insertFront接口
  const test_id = 1;

  // prepare: setup objects to test
  let deque = new Deque<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.insertFront(1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_insert_end(loopCount: number) {
  // test: @ohos.util.Deque.insertEnd
  // desc: 测试Deque容器insertEnd接口
  const test_id = 2;

  // prepare: setup objects to test
  let deque = new Deque<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.insertEnd(1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has(loopCount: number) {
  // test: @ohos.util.Deque.has
  // desc: 测试在最坏情况下（查找元素不存在的情况）Deque容器的has接口，Deque长度为500000
  const test_id = 3;

  // prepare: setup objects to test
  let deque = new Deque<number>();
  for (let i = 0; i < 500000; i++) {
    deque.insertEnd(1);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.has(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has2(loopCount: number) {
  // test: @ohos.util.Deque.has
  // desc: 测试在最优情况下（查找元素为第一个）Deque容器的has接口，Deque长度为500000
  const test_id = 4;

  // prepare: setup objects to test
  let deque = new Deque<number>();
  for (let i = 0; i < 500000; i++) {
    deque.insertEnd(1);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    deque.has(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!end
test_insert_front(10000000);
test_insert_end(10000000);
test_has(3000);
test_has2(3000);

/*!1:0.0001421 ms
  !2: 0.000134 ms
  !3: 3.522 ms
  !4:3.5406666666666666 ms*/