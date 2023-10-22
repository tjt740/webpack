'use strict';
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (Object.prototype.hasOwnProperty.call(b, p))
                            d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== 'function' && b !== null)
                throw new TypeError(
                    'Class extends value ' +
                        String(b) +
                        ' is not a constructor or null'
                );
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };
    })();
Object.defineProperty(exports, '__esModule', { value: true });
var main_1 = require('./main');
var Aa = /** @class */ (function () {
    function Aa() {
        // private tall: number;
        this.weight = 130;
        this.name = 'tjt';
        this.age = 123;
    }
    Aa.prototype.fn = function (params) {
        if (params === void 0) {
            params = '1234';
        }
        return params;
    };
    return Aa;
})();
var Bb = /** @class */ (function (_super) {
    __extends(Bb, _super);
    function Bb(weight) {
        var _this = this;
        var element = document.createElement('pre');
        element.innerHTML = [
            'Hello webpack!',
            '5 cubed is equal to ' + (0, main_1.cube)(5),
        ].join('\n\n');
        _this = _super.call(this) || this;
        console.log(_this.weight, weight);
        return _this;
    }
    return Bb;
})(Aa);
var b = new Bb(1);
var b1 = new Bb(120);
console.log(process.env.NODE_ENV);
