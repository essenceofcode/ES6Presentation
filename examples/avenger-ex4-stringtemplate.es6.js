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

        console.log(`Hello my name is ${this.name} and I have the awesome power of ${this.power}`);
    }
}

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new Avenger('Iron Man', 'a nice suit')

hulk.sayHello();
hulk.power = 'I am green';
ironMan.power = 'Armor';
ironMan.sayHello();
