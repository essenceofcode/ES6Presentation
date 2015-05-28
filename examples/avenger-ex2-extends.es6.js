class Avenger {
    constructor(name, power) {

        this.name = name;
        this.power = power;
    }


    sayHello() {

        console.log('Hello my name is ' + this.name + ' and I have the awesome power of ' + this.power);
    }
}

class MortalAvenger extends Avenger {
    constructor(name, power, age) {
        super(name, power);

        this.age = age;
    }

    sayHello() {
        console.log('Hello my name is ' + this.name + ' and I am mortal.  I have the power of ' + this.power
            + ' and my age is ' + this.age);
    }
}

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new MortalAvenger('Iron Man', 'a nice suit', 35);

hulk.sayHello();
ironMan.sayHello();
ironMan.power = 'Armor';
ironMan.sayHello();

