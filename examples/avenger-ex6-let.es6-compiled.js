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
        key: 'canFly',
        value: function canFly() {
            canFly = true;
            console.log('' + this.name + ' can fly is ' + canFly);

            if (true) {

                var canFly;
                canFly = false;
            }
        }
    }]);

    return Avenger;
})();

var hulk = new Avenger('Hulk', 'Incredible Strength');
var ironMan = new Avenger('Iron Man', 'a nice suit');

ironMan.canFly();

//# sourceMappingURL=avenger-ex6-let.es6-compiled.js.map