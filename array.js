"use strict";
const numbers = [45, 4, 9, 16, 25];
const sumit = (total, value) => value + total;
const doubler = (value) => value * 2;

let i = 0,
    len = numbers.length;
let sum = 0; // numbers.reduce(sumit, 0);
let doubles = numbers.map(doubler);

for (i; i < len; i++) {
    console.log("  Numbers[" + i + "] = " + numbers[i]);
    sum += numbers[i];
}

console.log("Sum = " + sum);
console.log("\nDouble = " + JSON.stringify(doubles, null, 2));
