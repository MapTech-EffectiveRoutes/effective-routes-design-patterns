"use strict";
exports.__esModule = true;
exports.Context = void 0;
var OlvaCourier_1 = require("../concret/OlvaCourier");
var Context = /** @class */ (function () {
    function Context() {
        this.strategy = new OlvaCourier_1.OlvaCourier();
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.calculateCost = function (data) {
        return this.strategy.calculateCost(data);
    };
    return Context;
}());
exports.Context = Context;
