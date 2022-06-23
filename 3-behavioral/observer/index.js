"use strict";
exports.__esModule = true;
exports.Notification = void 0;
var concrete_subject_1 = require("./concrete/concrete-subject");
var concrete_observer_user_1 = require("./concrete/concrete-observer-user");
var Notification = /** @class */ (function () {
    function Notification() {
    }
    Notification.prototype.execute = function () {
        var subject = new concrete_subject_1.ConcreteSubject();
        var observer = new concrete_observer_user_1.ConcreteObserverClient();
        subject.attach(observer);
        subject.packageOnTransit();
    };
    return Notification;
}());
exports.Notification = Notification;
var client = new Notification();
client.execute();
