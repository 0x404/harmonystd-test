import Stack from '@ohos.util.Stack';

function test_push(loopCount: number) {
  // test: @ohos.util.Stack.push
  // desc: 测试Stack容器push接口
  const test_id = 1;

  // prepare: setup objects to test
  let stack = new Stack<number>();

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.push(1);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_pop(loopCount: number) {
  // test: @ohos.util.Stack.pop
  // desc: 测试Stack容器pop接口
  const test_id = 2;

  // prepare: setup objects to test
  let stack = new Stack<number>();
  for (let i = 0; i < 500000; i++) {
    stack.push(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.pop();
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}


function test_peek(loopCount: number){
  // test: @ohos.util.Stack.peek
  // desc: 测试Stack容器peek接口
  const test_id = 3;

  // prepare: setup objects to test
  let stack = new Stack<number>();
  for (let i = 0; i < 5000000; i++) {
    stack.push(i);
  }

    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      stack.peek();
    }
    const endTime = new Date();

    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}

function test_locate(loopCount: number) {
  // test: @ohos.util.Stack.locate
  // desc: 测试在最坏情况下（查找元素不存在的情况）Stack容器的locate接口，Stack长度为100000
  const test_id = 4;

  // prepare: setup objects to test
  let stack = new Stack<number>();
  for (let i = 0; i < 100000; i++) {
    stack.push(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.locate(100000);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

function test_locate2(loopCount: number) {
  // test: @ohos.util.Stack.locate
  // desc: 测试在最优情况下（查找元素为第一个）Stack容器的locate接口，Stack长度为10000000
  const test_id = 5;

  // prepare: setup objects to test
  let stack = new Stack<number>();
  for (let i = 0; i < 10000000; i++) {
    stack.push(i);
  }

  // test
  const startTime = new Date();
  for (let i = 0; i < loopCount; i++) {
    stack.locate(0);
  }
  const endTime = new Date();

  // finish
  const executionTime = endTime.getTime() - startTime.getTime();
  const averageTime = executionTime / loopCount;
  console.log(`!${test_id}: ${averageTime} ms`);
}

//!end
test_push(500000);
test_pop(500000);
test_peek(5000000)
test_locate(3000);
test_locate2(80000000);