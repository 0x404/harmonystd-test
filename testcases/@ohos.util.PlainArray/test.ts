import PlainArray from '@ohos.util.PlainArray';

function test_add(loopCount: number) {
  // test: @ohos.util.PlainArray.add
  // desc: 测试PlainArray容器add接口
  const test_id = 1;

  // prepare: setup objects to test
  let plainArray = new PlainArray<string>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "test");
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has(loopCount: number) {
  // test: @ohos.util.PlainArray.has
  // desc: 测试在最坏情况下（查找元素不存在的情况）PlainArray容器的has接口，List长度为500000
  const test_id = 2;

  // prepare: setup objects to test
  let plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "test");
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.has(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_has2(loopCount: number) {
  // test: @ohos.util.PlainArray.has
  // desc: 测试在最优情况下（查找元素为第一个）PlainArray容器的has接口，List长度为5000000
  const test_id = 3;

  // prepare: setup objects to test
  let plainArray = new PlainArray<string>();
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, "test");
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.has(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_get(loopCount: number) {
  // test: @ohos.util.PlainArray.get
  // desc: 测试PlainArray容器get方法

  const test_id = 4;
  const plainArray = new PlainArray<string>();

  // prepare: setup objects to test
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.get(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_getIndexOfKey(loopCount: number) {
  // test: @ohos.util.PlainArray.getIndexOfKey
  // desc: 测试PlainArray容器getIndexOfKey方法（最坏情况，查找不存在的键）

  const test_id = 5;
  const plainArray = new PlainArray<string>();

  // prepare: setup objects to test
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.getIndexOfKey(500000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_getKeyAt(loopCount: number) {
  // test: @ohos.util.PlainArray.getKeyAt
  // desc: 测试PlainArray容器getKeyAt方法

  const test_id = 6;
  const plainArray = new PlainArray<string>();

  // prepare: setup objects to test
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    plainArray.getKeyAt(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_clone(loopCount: number) {
  // test: @ohos.util.PlainArray.clone
  // desc: 测试PlainArray容器clone方法

  const test_id = 7;
  const plainArray = new PlainArray<string>();

  // prepare: setup objects to test
  for (let i = 0; i < loopCount; i++) {
    plainArray.add(i, `Value${i}`);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    const clonedArray = plainArray.clone(); // 在这里进行 clone 操作，克隆一个新的实例
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
test_has(500000);
test_has2(500000);
test_get(500000);
test_getIndexOfKey(500000);
test_getKeyAt(500000);
test_clone(500000);