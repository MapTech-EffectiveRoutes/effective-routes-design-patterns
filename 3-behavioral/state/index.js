"use strict";
exports.__esModule = true;
exports.Client = void 0;
var user_1 = require("./user");
var inactive_user_1 = require("./concrete/inactive-user");
var active_user_1 = require("./concrete/active-user");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var user = new user_1.User(new active_user_1.ActiveUser());
        user.request();
        user.transitionTo(new inactive_user_1.InactiveUser());
        user.request();
        user.transitionTo(new active_user_1.ActiveUser());
        user.request();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
