hoisting = "prehoisted";
console.log(hoisting);
var message = "yup";
{
    const message = "wow";
    {
        let message = "nope";
        console.log(message);
    }
    console.log(message);
}
console.log(message);
var hoisting = "hoisted";
console.log(hoisting);
