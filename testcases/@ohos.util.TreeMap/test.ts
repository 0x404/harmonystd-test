import TreeMap from '@ohos.util.TreeMap';

function test_set(loopCount: number) {
  // test: @ohos.util.TreeMap.set
  // desc: 测试TreeMap容器set接口
  const test_id = 1;

  // prepare: setup objects to test
  let treemap = new TreeMap<number,number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.set(i,i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_hasKey(loopCount: number) {
  // test: @ohos.util.TreeMap.hasKey
  // desc: 测试TreeMap容器hasKey接口
  const test_id = 2;

  // prepare: setup objects to test
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.hasKey(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_hasValue(loopCount: number) {
  // test: @ohos.util.TreeMap.hasValue
  // desc: 测试TreeMap容器hasValue接口
  const test_id = 3;

  // prepare: setup objects to test
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.hasValue(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_remove(loopCount: number) {
  // test: @ohos.util.TreeMap.remove
  // desc: 测试TreeMap容器remove接口
  const test_id = 4;

  // prepare: setup objects to test
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.remove(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_replace(loopCount: number) {
  // test: @ohos.util.TreeMap.replace
  // desc: 测试TreeMap容器replace接口
  const test_id = 5;

  // prepare: setup objects to test
  let treemap = new TreeMap<number,number>();
  for (let i = 0; i < 500000; i++) {
    treemap.set(i,i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treemap.replace(i,i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


//!ends
test_set(3000);
test_hasKey(3000);
test_hasValue(3000);
test_remove(3000);
test_replace(3000);