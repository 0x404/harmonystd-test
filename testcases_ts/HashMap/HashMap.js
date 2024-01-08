"use strict";
function test_map_set(loopCount) {
    // test: Map.prototype.set
    // desc: 测试Map对象的set接口
    const test_id = 1;
    // prepare: setup objects to test
    let map = new Map();
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        map.set(i, 1);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_map_get(loopCount) {
    // test: Map.prototype.get
    // desc: 测试Map对象的get接口
    const test_id = 2;
    // prepare: setup objects to test
    let map = new Map();
    for (let i = 0; i < loopCount; i++) {
        map.set(i, 1);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        map.get(i);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_map_hasKey_best(loopCount) {
    // test: Map.prototype.has
    // desc: 测试Map对象的has接口（最好情况），Map长度为1000000
    const test_id = 3;
    // prepare: setup objects to test
    let map = new Map();
    for (let i = 0; i < 1000000; i++) {
        map.set(i, 1);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        map.has(0);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_map_hasKey_worst(loopCount) {
    // test: Map.prototype.has
    // desc: 测试Map对象的has接口（最坏情况），Map长度为1000000
    const test_id = 4;
    // prepare: setup objects to test
    let map = new Map();
    for (let i = 0; i < 1000000; i++) {
        map.set(i, 1);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        map.has(1000000);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_map_hasValue_best(loopCount) {
    // test: 使用Map与Array结合的方式模拟hasValue
    // desc: 测试Map结合Array的方式模拟的hasValue接口（最好情况），Map长度为1000000
    const test_id = 5;
    // prepare: setup objects to test
    let map = new Map();
    for (let i = 0; i < 1000000; i++) {
        map.set(i, i);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        Array.from(map.values()).includes(0);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_map_hasValue_worst(loopCount) {
    // test: 使用Map与Array结合的方式模拟hasValue
    // desc: 测试Map结合Array的方式模拟的hasValue接口（最坏情况），Map长度为1000000
    const test_id = 6;
    // prepare: setup objects to test
    let map = new Map();
    for (let i = 0; i < 1000000; i++) {
        map.set(i, i);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        Array.from(map.values()).includes(1000000);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
// 测试函数调用
test_map_set(1000000);
test_map_get(1000000);
test_map_hasKey_best(1000000);
test_map_hasKey_worst(1000000);
test_map_hasValue_best(300);
test_map_hasValue_worst(300);
