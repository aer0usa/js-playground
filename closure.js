"use strict";
function internal() {
    var a = 4;
    return a * a;
}

var a = 5;
function external() {
    return a * a;
}

/*
 * incrementer() implements a closure.
 * The function defines a variable, and then returns the internal function
 * which references that variable and increments it, returning the new value.
 * The outer function is self-invoking, due to the parens after the declaration.
 * A variable can be passed in there.
 * The variable remains in scope to the inner function because the returned
 * internal function keeps a reference to it.
 */
const incrementer = (function (g) {
    let counter = g;
    console.log("Initializing the closure: " + counter);
    return function () {
        counter += 1;
        console.log("In the closure: " + counter);
        return counter;
    }
})(a);

// increment a few times to show the value incrementing incrementally
incrementer();
incrementer();
incrementer();

console.log("Internal " + internal());
console.log("External " + external());
console.log("Closure " + incrementer());
