"use strict";
function test(fn, a, b) {
    return fn(a, b);
}
function sum(a, b) {
    return a + b;
}
console.log(test(sum, 5, 4));
