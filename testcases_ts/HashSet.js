"use strict";
// Test function using native JavaScript Set
function test_set_add(loopCount) {
    // test: Set.add
    // desc: Test Set container add interface
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
    // test: Set.delete
    // desc: Test Set container delete interface
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
function test_set_has(loopCount) {
    // test: Set.has
    // desc: Test Set container has interface in the worst-case scenario (finding an element that doesn't exist), Set length is 500000
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
function test_set_has2(loopCount) {
    // test: Set.has
    // desc: Test Set container has interface in the best-case scenario (finding the first element), Set length is 5000000
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
    // test: Set.values
    // desc: Test Set container values interface, Set length is the input loopCount
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
    // test: Set.entries
    // desc: Test Set container entries interface, Set length is the input loopCount
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
    // test: Set.forEach
    // desc: Test Set container forEach interface, Set length is 500000
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
        });
    }
    const endTime = new Date();
    // finish
    const executionTime = endTime.getTime() - startTime.getTime();
    const averageTime = executionTime / loopCount;
    console.log(`!${test_id}: ${averageTime} ms`);
}
//!end
test_set_add(500000);
test_set_remove(500000);
test_set_has(500000);
test_set_has2(500000);
test_set_values(500000);
test_set_entries(500000);
test_set_forEach(300);
// Result
/*
!1: 0.000288 ms
!2: 0.00025 ms
!3: 0.000172 ms
!4: 0.000144 ms
!5: 0.000842 ms
!6: 0.00074 ms
!7: 106.626667 ms
*/
