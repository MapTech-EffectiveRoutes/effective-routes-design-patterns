"use strict";
exports.__esModule = true;
exports.ConcreteMessage = void 0;
var ConcreteMessage = /** @class */ (function () {
    function ConcreteMessage() {
        this.observers = [];
    }
    ConcreteMessage.prototype.attach = function (observer) {
        var isExist = this.observers.indexOf(observer) !== -1;
        if (isExist) {
            return console.log('Message: Client has been attached already.');
        }
        console.log('Message: Attached a Client.');
        this.observers.push(observer);
    };
    ConcreteMessage.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Message: Nonexistent Client.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Message: Detached a Client.');
    };
    ConcreteMessage.prototype.notify = function () {
        console.log('Message: Notifying (' + this.observers.length + ') Clients...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteMessage.prototype.packageOnTransit = function () {
        console.log('\nMessage: Your package is on its way.');
        this.state = 1;
        console.log("Message: Package status(0: still processing, 1: On transit): ".concat(this.state));
        this.notify();
    };
    return ConcreteMessage;
}());
exports.ConcreteMessage = ConcreteMessage;
