class Avenger {
    constructor(name, power) {

        this.name = name;
        this.power = power;
    }

    sayHello() {

        console.log(`Hello my name is ${this.name} and I have the awesome power of ${this.power}`);
    }
}

let hulk = new Avenger('Hulk', 'Incredible Strength');
let ironMan = new Avenger('Iron Man', 'a nice suit');

let avengers = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                return hulk;
                return ironMan;
                return { done: true, value: ironMan }
            }
        }
    }
}

for (let avenger of avengers) {

    avenger.sayHello();
}