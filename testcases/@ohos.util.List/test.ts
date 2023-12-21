import List from '@ohos.util.List';

 function test_add(loopCount: number) {
  // test: @ohos.util.List
  // desc: 测试List容器add接口
  const test_id = 1;

  // prepare: setup objects to test
  let list = new List<number>();

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
  // test: @ohos.util.List.insert
  // desc: 测试List容器insert接口
  const test_id = 2;

  // prepare: setup objects to test
  let list = new List<number>();

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
  // test: @ohos.util.List.has
  // desc: 测试在最坏情况下（查找元素不存在的情况）List容器的has接口，List长度为500000
  const test_id = 3;

  // prepare: setup objects to test
  let list = new List<number>();
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
  // test: @ohos.util.List.has
  // desc: 测试在最优情况下（查找元素为第一个）List容器的has接口，List长度为5000000
  const test_id = 4;

  // prepare: setup objects to test
  let list = new List<number>();
  for (let i = 0; i < 5000000; i++) {
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

test_add(500000);
test_insert(50000);
test_has(3000);
test_has2(5000000);