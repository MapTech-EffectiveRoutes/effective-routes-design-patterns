"use strict";
exports.__esModule = true;
exports.Client = void 0;
var web_order_1 = require("./concrete/web-order");
var store_order_1 = require("./concrete/store-order");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        console.log("Web Order:");
        var webOrder = new web_order_1.WebOrder();
        webOrder.processOrder();
        console.log("\nStore Order:");
        var storeOrder = new store_order_1.StoreOrder();
        storeOrder.processOrder();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
