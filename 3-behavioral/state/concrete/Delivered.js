"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Delivered = void 0;
var order_state_1 = require("../abstract/order-state");
var Delivered = /** @class */ (function (_super) {
    __extends(Delivered, _super);
    function Delivered() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delivered.prototype.handle = function () {
        console.log('Product delivered');
        //this.user.transitionTo(new ActiveUser());
    };
    return Delivered;
}(order_state_1.OrderState));
exports.Delivered = Delivered;
