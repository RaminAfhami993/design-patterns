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



//review
//constructor
function User1(name, age) {
    this.name = name;
    this.age = age;
};

User1.prototype.present = function() {
    console.log(this.name + " has " + this.age + " years old" );
};

const user1 = new User1("Mahone", 20);
user1.present();





//module
const User2 = (function() {
    let names = [];

    return {
        addName(name) {
            names.push(name);
        },
        deleteName(name) {
            names = names.filter(x => x != name);
        },
        getNames() {
            return names
        }
    }
})();

console.log(User2.getNames());
User2.addName("Ramin");
console.log(User2.getNames());
User2.addName("Mahone");
console.log(User2.getNames());
User2.deleteName("Ramin");
console.log(User2.getNames());




// revealing module
const User3 = (function() {
    let names = [];

    function addName(name) {
        names.push(name);
    };
    function deleteName(name) {
        names = names.filter(x => x != name);
    };
    function getNames() {
        return names
    };
    
    return {
        addName,
        deleteName,
        getNames
    }
})();

console.log(User3.getNames());
User3.addName("Ramin");
console.log(User3.getNames());
User3.addName("Mahone");
console.log(User3.getNames());
User3.deleteName("Ramin");
console.log(User3.getNames());



// singelton
const singelton = (function() {
    let config;

    function configInitilization(values) {
        this.randomNumber = Math.random();
        values = values || {};
        this.size = values.size;
        this.number = values.number;
    };


    return {
        getConfig(values) {
            if (config === undefined) {
                config = new configInitilization(values)
            };

            return config;
        }
    }
})();

let singleObject = singelton.getConfig({size: 10, number: 30});
console.log(singleObject);

singleObject = singelton.getConfig({size: 10});
console.log(singleObject);

singleObject = singelton.getConfig({number: 30});
console.log(singleObject);

singleObject = singelton.getConfig({number: 1120, size: 50});
console.log(singleObject);
