"use strict";
exports.__esModule = true;
exports.StateFactory = void 0;
var order_state_type_1 = require("./order-state-type");
var traveling_1 = require("../concrete/traveling");
var Delivered_1 = require("../concrete/Delivered");
var Undelivered_1 = require("../concrete/Undelivered");
var StateFactory = /** @class */ (function () {
    function StateFactory() {
    }
    // Factory Method
    StateFactory.getConcreteState = function (orderStateType) {
        if (orderStateType == order_state_type_1.OrderStateType.TRAVELING)
            return new traveling_1.Traveling();
        if (orderStateType == order_state_type_1.OrderStateType.DELIVERED)
            return new Delivered_1.Delivered();
        if (orderStateType == order_state_type_1.OrderStateType.UNDELIVERED)
            return new Undelivered_1.Undelivered();
        return new traveling_1.Traveling();
    };
    return StateFactory;
}());
exports.StateFactory = StateFactory;
