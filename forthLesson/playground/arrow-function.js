var square = x => Math.pow(x, 2);

console.log(square(16));

var user = {
    name: 'mahta',
    sayHi: () => console.log(`Hi`), // no 'arguments' and no 'this'
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

var mahta = {
    name: 'mahta',
    age: 24,
    occupation: 'math and IT teacher',
    getInfo() {
        console.log(arguments);
        console.log(`${this.name} is ${this.age} years old. she is ${this.occupation}`);
    }
}

user.sayHi();
user.sayHiAlt(1, 2, 3);