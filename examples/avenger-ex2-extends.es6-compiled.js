'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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

            console.log('Hello my name is ' + this.name + ' and I have the awesome power of ' + this.power);
        }
    }]);

    return Avenger;
})();

var MortalAvenger = (function (_Avenger) {
    function MortalAvenger(name, power, age) {
        _classCallCheck(this, MortalAvenger);

        _get(Object.getPrototypeOf(MortalAvenger.prototype), 'constructor', this).call(this, name, power);

        this.age = age;
    }

    _inherits(MortalAvenger, _Avenger);

    _createClass(MortalAvenger, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('Hello my name is ' + this.name + ' and I am mortal.  I have the power of ' + this.power + ' and my age is ' + this.age);
        }
    }]);

    return MortalAvenger;
})(Avenger);

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new MortalAvenger('Iron Man', 'a nice suit', 35);

hulk.sayHello();
ironMan.sayHello();
ironMan.power = 'Armor';
ironMan.sayHello();

//# sourceMappingURL=avenger-ex2-extends.es6-compiled.js.map