// var personPrototype = {
//     sayHi: function() {
//         console.log("hi", this.name, this.age);
//     },
//     sayBye: function() {
//         console.log("bye", this.name, this.age);
//     }
// };

// function Person(name, age) {
//     name = name || 'Mahone';
//     age = age || 20;

//     function ConstructorFunction(name, age) {
//         this.name = name;
//         this.age = age;
//     };

//     ConstructorFunction.prototype = personPrototype;

//     var instance = new ConstructorFunction(name, age);

//     return instance;
// };



// var person1 = Person();
// var person2 = Person("Ramin", 50);

// person1.__proto__.sayHi = function() {
//     console.log(1);
// }

// person1.sayHi();
// person2.sayHi();


var personPrototype = {
    sayHi: function() {
        console.log("Hi " + this.name + " " + this.age);
    },
    sayBye: function() {
        console.log("Bye " + this.name + " " + this.age);
    }
};

function Person(name, age) {
    name = name || "Ramin";
    age = age || 20;

    function ConstructorFunction(name, age) {
        this.name = name;
        this.age = age;
    };

    ConstructorFunction.prototype = personPrototype;

    var instance = new ConstructorFunction(name, age);

    return instance;
};


var person1 = Person("Mahone", 11);

person1.sayBye()
