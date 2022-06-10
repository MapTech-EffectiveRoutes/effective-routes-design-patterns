"use strict";
exports.__esModule = true;
exports.Caretaker = void 0;
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.employeeHistory = [];
    }
    Caretaker.prototype.save = function (employeeOriginator) {
        this.employeeHistory.push(employeeOriginator.createMemento());
    };
    Caretaker.prototype.revert = function (employeeOriginator) {
        if (this.employeeHistory.length > 0) {
            employeeOriginator.setMemento(this.employeeHistory.pop());
        }
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
