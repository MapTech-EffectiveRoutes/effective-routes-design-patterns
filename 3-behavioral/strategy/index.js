"use strict";
exports.__esModule = true;
exports.Client = void 0;
var context_1 = require("./context/context");
var FedEx_1 = require("./concret/FedEx");
var DHL_1 = require("./concret/DHL");
var OlvaCourier_1 = require("./concret/OlvaCourier");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var context = new context_1.Context();
        console.log(context.calculateCost('data'));
        context.setStrategy(new DHL_1.DHL());
        console.log(context.calculateCost('data'));
        context.setStrategy(new FedEx_1.FedEx());
        console.log(context.calculateCost('data'));
        context.setStrategy(new OlvaCourier_1.OlvaCourier());
        console.log(context.calculateCost('data'));
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
