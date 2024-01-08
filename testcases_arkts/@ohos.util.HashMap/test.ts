import HashMap from '@ohos.util.HashMap';

function test_set(loopCount: number) {
  // test: @ohos.util.HashMap.set
  // desc: 测试HashMap容器set接口
  const test_id = 1;

  // prepare: setup objects to test
  let hashMap = new HashMap<number, number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i, 1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_get(loopCount: number) {
  // test: @ohos.util.HashMap.get
  // desc: 测试HashMap容器get接口
  const test_id = 2;

  // prepare: setup objects to test

  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < loopCount; i++) {
    hashMap.set(i, 1);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.get(i);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_hasKey1(loopCount: number) {
  // test: @ohos.util.HashMap.hasKey
  // desc: 测试HashMap容器的hasKey接口（最好情况），HashMap长度为1000000
  const test_id = 3;

  // prepare: setup objects to test
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,1)
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasKey(0)
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_hasKey2(loopCount: number) {
  // test: @ohos.util.HashMap.hasKey
  // desc: 测试HashMap容器的hasKey接口（最坏情况），HashMap长度为1000000
  const test_id = 4;

  // prepare: setup objects to test
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,1)
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasKey(1000000)
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_hasValue1(loopCount: number) {
  // test: @ohos.util.HashMap.hasValue
  // desc: 测试Hashmap容器的hasValue接口（最好情况），HashMap长度为1000000
  const test_id = 5;

  // prepare: setup objects to test
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,i)
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasValue(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_hasValue2(loopCount: number) {
  // test: @ohos.util.HashMap.hasValue
  // desc: 测试Hashmap容器的hasValue接口（最坏情况），HashMap长度为1000000
  const test_id = 6;

  // prepare: setup objects to test
  let hashMap = new HashMap<number, number>();
  for (let i = 0; i < 1000000; i++) {
    hashMap.set(i,i)
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    hashMap.hasValue(1000000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!end
test_set(1000000);
test_get(1000000);
test_hasKey1(1000000);
test_hasKey2(1000000);
test_hasValue1(300);
test_hasValue2(300);


/*
 * !1: 0.000915 ms
 * !2: 0.000236 ms
 * !3: 0.00012 ms
 * !4: 0.000103 ms
 * !5: 40.61333333333334 ms
 * !6: 44.98 ms
 * */