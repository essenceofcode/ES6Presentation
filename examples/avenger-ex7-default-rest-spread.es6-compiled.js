'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Avenger = (function () {
    function Avenger(name, power) {
        _classCallCheck(this, Avenger);

        this.name = name;
        this.power = power;
    }

    _createClass(Avenger, [{
        key: 'sayHello',
        value: function sayHello() {
            var additionalPower = arguments[0] === undefined ? 'none on file' : arguments[0];

            console.log('Hello my name is ' + this.name + ' and I have the awesome power of ' + this.power + '.');
            console.log('I have the additional power of ' + additionalPower + '.');
        }
    }, {
        key: 'listAllPowers',
        value: function listAllPowers() {
            for (var _len = arguments.length, allPowers = Array(_len), _key = 0; _key < _len; _key++) {
                allPowers[_key] = arguments[_key];
            }

            allPowers.forEach(function (power) {
                console.log('' + power);
            });
        }
    }, {
        key: 'currentLocation',
        value: function currentLocation(latitude, longitude) {

            console.log('My current location is ' + latitude + ', ' + longitude);
        }
    }]);

    return Avenger;
})();

var blackWidow = new Avenger('Black Widow', 'knife expert');

blackWidow.sayHello();

blackWidow.listAllPowers('awe', 'so', 'me', 'ness');

var somePowers = ['explosives', 'interrogation'];

blackWidow.listAllPowers(['assault weapons'].concat(somePowers, ['martial arts']));

blackWidow.currentLocation.apply(blackWidow, [35.916688, -78.639197]);

//# sourceMappingURL=avenger-ex7-default-rest-spread.es6-compiled.js.map