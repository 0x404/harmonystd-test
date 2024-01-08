import Vector from '@ohos.util.Vector';

function test_add(loopCount: number) {
  // test: @ohos.util.Vector.add
  // desc: 测试Vector容器add接口
  const test_id = 1;

  // prepare: setup objects to test
  let vector = new Vector<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.add(1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}



function test_has(loopCount: number) {
  // test: @ohos.util.Vector.has
  // desc: 测试在最坏情况下（查找元素不存在的情况）Vector容器的has接口，Vector长度为500000
  const test_id = 2;

  // prepare: setup objects to test
  let vector = new Vector<number>();
  for (let i = 0; i < 500000; i++) {
    vector.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.has(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has2(loopCount: number) {
  // test: @ohos.util.Vector.has
  // desc: 测试在最优情况下（查找元素为第一个）Vector容器的has接口，Vector长度为500000
  const test_id = 3;

  // prepare: setup objects to test
  let vector = new Vector<number>();
  for (let i = 0; i < 500000; i++) {
    vector.add(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    vector.has(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


//!end

test_add(500000);
test_has(3000);
test_has2(3000);