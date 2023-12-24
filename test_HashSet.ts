import HashSet from '@ohos.util.HashSet';

function test_add(loopCount: number) {
  // test: @ohos.util.HashSet.add
  // desc: 测试HashSet容器add接口
  const test_id = 1;

  // prepare: setup objects to test
  let set = new HashSet<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.add(1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_remove(loopCount: number) {
  // test: @ohos.util.HashSet.remove
  // desc: 测试HashSet容器remove接口
  const test_id = 2;

  // prepare: setup objects to test
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.remove(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has(loopCount: number) {
  // test: @ohos.util.List.has
  // desc: 测试在最坏情况下（查找元素不存在的情况）HashSet容器的has接口，set长度为500000
  const test_id = 3;

  // prepare: setup objects to test
  let set = new HashSet<number>();
  for (let i = 0; i < 500000; i++) {
    set.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.has(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has2(loopCount: number) {
  // test: @ohos.util.List.has
  // desc: 测试在最优情况下（查找元素为第一个）HashSet容器的has接口，set长度为5000000
  const test_id = 4;

  // prepare: setup objects to test
  let set = new HashSet<number>();
  for (let i = 0; i < 5000000; i++) {
    set.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.has(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_values(loopCount: number) {
  // test: @ohos.util.HashSet.values
  // desc: 测试HashSet容器的values接口，set长度为输入的loopCount
  const test_id = 5;

  // prepare: setup objects to test
  let set = new HashSet<number>();
  for (let i = 0; i < loopCount; i++) {
    set.add(i);
  }
  let iter = set.values();
  let temp = iter.next();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    temp.value;
    temp = iter.next()
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_forEach(loopCount: number) {
  // test: @ohos.util.HashSet.forEach
  // desc: 测试HashSet容器的forEach接口,set长度为500000
  const test_id = 6;

  // prepare: setup objects to test
  let set = new HashSet<number>();
  for (let i = 0; i < 500000; i++) {
    set.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    set.forEach((value?: number, key?: number) => {
    });
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!end
test_add(500000);
test_remove(500000);
test_has(3000);
test_has2(3000);
test_values(500000);
test_forEach(300)

//Result
/*
!1: 0.000396 ms
!2: 0.000258 ms
!3: 0.000252 ms
!4: 0.000146 ms
!5: 0.000526 ms
!6: 0.00059 ms
!7: 114.27 ms
 */

