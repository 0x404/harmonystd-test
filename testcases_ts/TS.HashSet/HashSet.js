"use strict";
function test_set_add(loopCount) {
    // test: Set.prototype.add
    // desc: 测试Set容器add接口
    const test_id = 1;
    // prepare: setup objects to test
    let set = new Set();
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
function test_set_remove(loopCount) {
    // test: Set.prototype.delete
    // desc: 测试Set容器delete接口
    const test_id = 2;
    // prepare: setup objects to test
    let set = new Set();
    for (let i = 0; i < loopCount; i++) {
        set.add(i);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        set.delete(i);
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_set_has_worst(loopCount) {
    // test: Set.prototype.has
    // desc: 测试在最坏情况下（查找元素不存在的情况）Set容器的has接口，set长度为500000
    const test_id = 3;
    // prepare: setup objects to test
    let set = new Set();
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
function test_set_has_best(loopCount) {
    // test: Set.prototype.has
    // desc: 测试在最优情况下（查找元素为第一个）Set容器的has接口，set长度为5000000
    const test_id = 4;
    // prepare: setup objects to test
    let set = new Set();
    for (let i = 0; i < 500000; i++) {
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
function test_set_values(loopCount) {
    // test: Set.prototype.values
    // desc: 测试Set容器的values接口，set长度为输入的loopCount
    const test_id = 5;
    // prepare: setup objects to test
    let set = new Set();
    for (let i = 0; i < loopCount; i++) {
        set.add(i);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        set.values();
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_set_entries(loopCount) {
    // test: Set.prototype.entries
    // desc: 测试Set容器的entries接口，set长度为输入的loopCount
    const test_id = 6;
    // prepare: setup objects to test
    let set = new Set();
    for (let i = 0; i < loopCount; i++) {
        set.add(i);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        set.entries();
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
function test_set_forEach(loopCount) {
    // test: Set.prototype.forEach
    // desc: 测试Set容器的forEach接口,set长度为500000
    const test_id = 7;
    // prepare: setup objects to test
    let set = new Set();
    for (let i = 0; i < 500000; i++) {
        set.add(i);
    }
    // test
    const startTime = new Date();
    for (let i = 0; i < loopCount; i++) {
        set.forEach((value, key) => {
            // 模拟处理
        });
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
// 测试函数调用
test_set_add(500000);
test_set_remove(500000);
test_set_has_worst(500000);
test_set_has_best(500000);
test_set_values(500000);
test_set_entries(500000);
test_set_forEach(300);
