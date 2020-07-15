// Anti pattern
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hi, I'm ${name}`);
//     }
// };

// const personOne = new Person('Ramin', 20);
// personOne.greet();

// const personTwo = new Person('mahone', 20);
// personTwo.greet();

// Constructor design pattern
function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
};

const personOne = new Person('Ramin', 20);
personOne.greet();

const personTwo = new Person('mahone', 20);
personTwo.greet();
