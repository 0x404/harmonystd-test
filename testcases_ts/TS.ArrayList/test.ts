function test_array_push(loopCount: number) {
    // test: Array.prototype.push
    // desc: 测试原生数组push接口
    const test_id = 1;
  
    // prepare: setup objects to test
    let list = [];
  
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.push(1);
    }
    const endTime = new Date();
  
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
  
  function test_array_splice_insert(loopCount: number) {
    // test: Array.prototype.splice
    // desc: 测试原生数组splice接口用于插入元素
    const test_id = 2;
  
    // prepare: setup objects to test
    let list: number[] = [];
  
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.splice(0, 0, i);
    }
    const endTime = new Date();
  
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
  
  function test_array_includes_worst(loopCount: number) {
    // test: Array.prototype.includes
    // desc: 测试在最坏情况下（查找元素不存在的情况）原生数组的includes接口，数组长度为500000
    const test_id = 3;
  
    // prepare: setup objects to test
    let list = Array.from({ length: 500000 }, (_, i) => i);
  
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.includes(500000);
    }
    const endTime = new Date();
  
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
  
  function test_array_includes_best(loopCount: number) {
    // test: Array.prototype.includes
    // desc: 测试在最优情况下（查找元素为第一个）原生数组的includes接口，数组长度为500000
    const test_id = 4;
  
    // prepare: setup objects to test
    let list = Array.from({ length: 500000 }, (_, i) => i);
  
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
      list.includes(0);
    }
    const endTime = new Date();
  
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
  }
  
  //!end
  // 测试函数调用
  test_array_push(500000);
  test_array_splice_insert(50000);
  test_array_includes_worst(3000);
  test_array_includes_best(5000000);
  