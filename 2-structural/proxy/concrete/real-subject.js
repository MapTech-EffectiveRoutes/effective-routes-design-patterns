"use strict";
exports.__esModule = true;
exports.RealSubject = void 0;
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('RealSubject: Handling request.');
    };
    RealSubject.prototype.apiRequest = function () {
        console.log('RealSubject: Handling Remote API Request');
    };
    return RealSubject;
}());
exports.RealSubject = RealSubject;
