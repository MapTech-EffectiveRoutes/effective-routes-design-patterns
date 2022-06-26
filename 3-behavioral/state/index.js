"use strict";
exports.__esModule = true;
exports.Client = void 0;
var order_1 = require("./context/order");
var factory_1 = require("./factory/factory");
var order_state_type_1 = require("./factory/order-state-type");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var orderState = factory_1.StateFactory.getConcreteState(order_state_type_1.OrderStateType.TRAVELING);
        var order = new order_1.Order(orderState);
        order.request();
        orderState = factory_1.StateFactory.getConcreteState(order_state_type_1.OrderStateType.DELIVERED);
        order.transitionTo(orderState);
        order.request();
        orderState = factory_1.StateFactory.getConcreteState(order_state_type_1.OrderStateType.UNDELIVERED);
        order.transitionTo(orderState);
        order.request();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
