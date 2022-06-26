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
exports.Traveling = void 0;
var order_state_1 = require("../abstract/order-state");
var Traveling = /** @class */ (function (_super) {
    __extends(Traveling, _super);
    function Traveling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Traveling.prototype.handle = function () {
        console.log('Traveling to the destiny');
        //this.user.transitionTo(new InactiveUser());
    };
    return Traveling;
}(order_state_1.OrderState));
exports.Traveling = Traveling;
