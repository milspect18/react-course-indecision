// Exploring classes in es6 JS

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi.  I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let desc = super.getDescription();

        if (this.hasMajor()) {
            desc += `  Their major is ${this.major}`;
        }

        return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += `  I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Kyle Price', 33, 'Dacula, GA');

console.log(me.getGreeting());
console.log(me.getDescription());

const otherPerson = new Traveler();

console.log(otherPerson.getGreeting());
console.log(otherPerson.getDescription());