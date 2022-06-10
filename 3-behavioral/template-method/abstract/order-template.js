"use strict";
exports.__esModule = true;
exports.OrderTemplate = void 0;
var OrderTemplate = /** @class */ (function () {
    function OrderTemplate() {
    }
    OrderTemplate.prototype.wrapGift = function () {
        console.log("Gift wrapped.");
    };
    OrderTemplate.prototype.processOrder = function () {
        this.doCheckout();
        this.doPayment();
        if (this.isGift) {
            this.wrapGift();
        }
        else {
            this.doReceipt();
        }
        this.doDelivery();
    };
    return OrderTemplate;
}());
exports.OrderTemplate = OrderTemplate;
