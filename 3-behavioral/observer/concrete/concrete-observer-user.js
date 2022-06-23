"use strict";
exports.__esModule = true;
exports.ConcreteObserverClient = void 0;
var ConcreteObserverClient = /** @class */ (function () {
    function ConcreteObserverClient() {
    }
    ConcreteObserverClient.prototype.update = function (subject) {
        console.log('Client: Notification recieved.');
    };
    return ConcreteObserverClient;
}());
exports.ConcreteObserverClient = ConcreteObserverClient;
