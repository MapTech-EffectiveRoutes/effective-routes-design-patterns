"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.shallowCopy = function () {
        var clone = Object.create(this);
        return clone;
    };
    User.prototype.deepCopy = function () {
        var clone = Object.create(this);
        clone.id = Object.create(this.id);
        clone.type = Object.create(this.type);
        clone.type.user = Object.create(this.type.user);
        clone.number = Object.create(this.number);
        clone.dni = Object.create(this.dni);
        clone.number = Object.create(this.number);
        /*clone.preference = {
            ...this.preference,
            user: { ...this },
        };*/
        return clone;
    };
    return User;
}());
exports.User = User;
