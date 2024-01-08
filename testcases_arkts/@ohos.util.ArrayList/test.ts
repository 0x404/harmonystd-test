import ArrayList from '@ohos.util.ArrayList';

function test_add(loopCount: number) {
  // test: @ohos.util.ArrayList.add
  // desc: 测试ArrayList容器add接口
  const test_id = 1;

  // prepare: setup objects to test
  let list = new ArrayList<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.add(1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_insert(loopCount: number) {
  // test: @ohos.util.ArrayList.insert
  // desc: 测试ArrayList容器insert接口
  const test_id = 2;

  // prepare: setup objects to test
  let list = new ArrayList<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.insert(0,i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has(loopCount: number) {
  // test: @ohos.util.ArrayList.has
  // desc: 测试在最坏情况下（查找元素不存在的情况）ArrayList容器的has接口，ArrayList长度为500000
  const test_id = 3;

  // prepare: setup objects to test
  let list = new ArrayList<number>();
  for (let i = 0; i < 500000; i++) {
    list.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.has(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has2(loopCount: number) {
  // test: @ohos.util.ArrayList.has
  // desc: 测试在最优情况下（查找元素为第一个）ArrayList容器的has接口，ArrayList长度为500000
  const test_id = 4;

  // prepare: setup objects to test
  let list = new ArrayList<number>();
  for (let i = 0; i < 500000; i++) {
    list.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    list.has(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!end
test_add(500000);
test_insert(50000);
test_has(3000);
test_has2(5000000);

//Result
/*
!1: 0.000318 ms
!2: 0.00016 ms
!3: 1.0506666666666666 ms
!4: 0.0001138 ms
 */
