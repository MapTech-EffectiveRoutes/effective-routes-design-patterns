"use strict";
exports.__esModule = true;
exports.ConcreteSubject = void 0;
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        var isExist = this.observers.indexOf(observer) !== -1;
        if (isExist) {
            return console.log('Message: Client has been attached already.');
        }
        console.log('Subject: Attached a Client.');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent Client.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached a Client.');
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('Subject: Notifying (' + this.observers.length + ') Clients...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.packageOnTransit = function () {
        console.log('\nNotification: Your package is on its way.');
        this.state = 1;
        console.log("Subject: Package status(0: still processing, 1: On transit): ".concat(this.state));
        this.notify();
    };
    return ConcreteSubject;
}());
exports.ConcreteSubject = ConcreteSubject;
