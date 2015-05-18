class Avenger {
    constructor(name, power) {

        this.name = name;
        this.power = power;
    }

    sayHello() {

        console.log('Hello my name is ' + this.name + ' and I have the awesome power of ' + this.power);
    }
}

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new Avenger('Iron Man', 'a nice suit')

hulk.sayHello();
ironMan.sayHello();
ironMan.power = 'Armor';
ironMan.sayHello();