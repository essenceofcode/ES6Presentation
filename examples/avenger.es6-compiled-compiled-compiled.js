'use strict';

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

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

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new Avenger('Iron Man', 'a nice suit');

hulk.sayHello();
ironMan.sayHello();
ironMan.power = 'Armor';
ironMan.sayHello();

//# sourceMappingURL=avenger.es6-compiled.js.map

//# sourceMappingURL=avenger.es6-compiled-compiled.js.map

//# sourceMappingURL=avenger.es6-compiled-compiled-compiled.js.map