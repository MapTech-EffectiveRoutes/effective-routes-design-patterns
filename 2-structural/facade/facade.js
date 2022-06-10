"use strict";
exports.__esModule = true;
exports.Facade = void 0;
var subsystem1_1 = require("./subsystem1");
var subsystem2_1 = require("./subsystem2");
var Facade = /** @class */ (function () {
    function Facade(subsystem1, subsystem2) {
        if (subsystem1 === void 0) { subsystem1 = null; }
        if (subsystem2 === void 0) { subsystem2 = null; }
        this.subsystem1 = subsystem1 || new subsystem1_1.Subsystem1();
        this.subsystem2 = subsystem2 || new subsystem2_1.Subsystem2();
    }
    Facade.prototype.operation = function () {
        var result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();
        return result;
    };
    Facade.prototype.publishOnAllSocialNetworks = function () {
        var result = 'Facade social networks\n';
        result += this.subsystem1.publishTiktok();
        result += this.subsystem2.publishInstagram();
        return result;
    };
    return Facade;
}());
exports.Facade = Facade;
