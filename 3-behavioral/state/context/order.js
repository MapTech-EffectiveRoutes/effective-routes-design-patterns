"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(state) {
        this.transitionTo(state);
    }
    Order.prototype.transitionTo = function (state) {
        console.log("Context: Transition to ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setContext(this);
    };
    Order.prototype.request = function () {
        this.state.handle();
    };
    return Order;
}());
exports.Order = Order;
