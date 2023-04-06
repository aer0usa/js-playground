var foo = 3;
function ug (x, y) {
    return "ug for " + this;
}

const fun = (x, y = 1) => { return "fun " + x * y; };
var poo = {
    foo: 1,
    bar: () => { return "poo for " + this.foo; }
}
const baz = {
    foo: 7,
    bar: function () { return "baz.bar: " + this.foo; }
}

console.log("This is fun: " + fun(2, 3));
console.log("This is fun: " + fun(2));
console.log("This is ug: " + ug(2, 3));
console.log("This is baz: " + baz.bar(2, 3));
console.log("This is poo: " + poo.bar(2, 3));
