import TreeSet  from '@ohos.util.TreeSet';

function test_has(loopCount: number) {
  // test: @ohos.util.TreeSet.has
  // desc: 测试TreeSet容器has接口
  const test_id = 1;

  // prepare: setup objects to test
  let treeset = new TreeSet<number>();

  for (let i = 0; i < 500000; i++) {
    treeset.add(i);
  }


  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeset.has(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_add(loopCount: number) {
  // test: @ohos.util.TreeSet.add
  // desc: 测试TreeSet容器add接口
  const test_id = 2;

  // prepare: setup objects to test
  let treeset = new TreeSet<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeset.add(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_remove(loopCount: number) {
  // test: @ohos.util.TreeSet.remove
  // desc: 测试TreeSet容器remove接口
  const test_id = 3;

  // prepare: setup objects to test
  let treeset = new TreeSet<number>();

  for (let i = 0; i < 500000; i++) {
    treeset.add(i);
  }


  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    treeset.remove(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!ends

test_add(500000);
test_has(3000);
test_remove(3000);