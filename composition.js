/*
 * barker factory function
 * returns a function for barking
 */
const barker = (name = "Dog", sound = "bark") => {
    return function () {
        console.log(name + " says " + sound);
    }
}

const howMuchPoop = weight => {
    if(weight < 10) return "nothing";
    if(weight < 20) return "a little";
    if(weight < 50) return "some poop";
    if(weight < 75) return "a lot";
    if(weight < 100) return "A LOT";
    return "one metric shit-ton";
};

/*
 * pooper factory function
 * returns a function for pooping
 */
const pooper = (name = "Dog", weight = 0) => {
    return () => {
        console.log(name + " Poops " + howMuchPoop(weight));
    }
}

const meower = (name = "Cat", sound = "meow") => () => {
    console.log(name + " says " + sound);
};

/**
 * dog is a factory function to create a dog object
 * The dog object takes parameters as an object and provides default values
 * The return composes an object of the parameters and adds:
 * A "bark" method, from the "barker" method factory above
 * A "poop" method, from the "pooper" method factory above
*/
const dog = function ({
    name = "",
    breed = "Mutt",
    age = null,
    weight = null,
    color = "",
    sound = "bark"
}) {
    return ({
        name,
        breed,
        age,
        weight,
        color,
        sound,
        bark: barker(name, sound),
        poop: pooper(name, weight)
    });
};

const cat = function ({
    name = "",
    breed = "Cat",
    age = null,
    weight = null,
    color = "",
    sound = "meow"
}) {
    return ({
        name,
        breed,
        age,
        weight,
        color,
        sound,
        meow: meower(name, sound),
        poop: pooper(name, weight)
    });
}

const Boone = dog({
    name: "Boone",
    sound: "WOOF",
    weight: 50
});

const Zeke = dog({
    name: "Zeke",
    sound: "BORK",
    weight: 130,
    breed: "Anatolian Shepherd"
})

const Toby = cat({
    name: "Toby",
    breed: "Carpetbag",
    sound: "rrrrrrOOOWWww",
    weight: 20
})

Boone.bark();
Boone.poop();

Zeke.bark();
Zeke.poop();

Toby.meow();
Toby.poop();
