"use strict";
exports.__esModule = true;
exports.Proxy = void 0;
var call_type_1 = require("../call-type");
var Proxy = /** @class */ (function () {
    function Proxy(realSubject, callType) {
        this.realSubject = realSubject;
        this.callType = callType;
    }
    Proxy.prototype.apiRequest = function () {
        if (this.callType == call_type_1.CallType.LOCAL) {
            console.log('Response from local proxy');
            return;
        }
        if (this.callType == call_type_1.CallType.REMOTE) {
            this.realSubject.apiRequest();
            return;
        }
        console.log('Invalid Call');
    };
    Proxy.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    Proxy.prototype.checkAccess = function () {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    Proxy.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request.');
    };
    return Proxy;
}());
exports.Proxy = Proxy;
