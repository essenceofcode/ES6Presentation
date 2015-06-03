class Avenger {

    constructor(name, power) {

        this.name = name;
        this.power = power;
    }

    sayHello(additionalPower = 'none on file') {

        console.log(`Hello my name is ${this.name} and I have the awesome power of ${this.power}.`);
        console.log(`I have the additional power of ${additionalPower}.`)
    }

    listAllPowers(...allPowers){

        allPowers.forEach(power => {
            console.log(`${power}`); });
    }

    currentLocation(latitude, longitude){

        console.log(`My current location is ${latitude}, ${longitude}`)
    }
}

let blackWidow = new Avenger('Black Widow', 'knife expert');

blackWidow.sayHello();

blackWidow.listAllPowers('awe', 'so', 'me', 'ness');

let somePowers = ['explosives', 'interrogation'];

blackWidow.listAllPowers(['assault weapons', ...somePowers, 'martial arts']);

blackWidow.currentLocation(...[35.916688, -78.639197]);