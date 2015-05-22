class Avenger {

    constructor(name, power) {

        this.name = name;
        this.power = power;
    }

    set name(name) { this._name = name; }
    get name() { return this._name; }

    set power(power) { this._power = power; }
    get power() { return this._power; }

    sayHello() {

        console.log(`Hello my name is ${this.name} and I have the awesome power of ${this.power}.`);
    }

    canFly() {
        canFly = true;
        console.log(`${this.name} can fly is ${canFly}`);

        if (false) {

            var canFly;
        }
    }
}

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new Avenger('Iron Man', 'a nice suit');

var avengers = [ hulk, ironMan ];

avengers.forEach(avenger => {
    avenger.sayHello();
    avenger.canFly();
});

class Employee {

    hire() {
        this.hired = true;
    }

    getStatus() {
        if(this.hired) {
            return "hired";
        }
    }
}

var david = new Employee();
david.hire();
console.log(david.hired);