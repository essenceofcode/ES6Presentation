class Avenger {

    constructor(name, power) {

        this.name = name;
        this.power = power;
    }

    canFly() {
        canFly = true;
        console.log(`${this.name} can fly is ${canFly}`);

        if (true) {

            var canFly;
            canFly = false;
        }
    }
}

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new Avenger('Iron Man', 'a nice suit');

ironMan.canFly();
