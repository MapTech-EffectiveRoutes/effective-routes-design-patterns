"use strict";
exports.__esModule = true;
exports.Flyweight = void 0;
var Flyweight = /** @class */ (function () {
    function Flyweight(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    Flyweight.prototype.operation = function (extrinsicState) {
        var sharedState = JSON.stringify(this.intrinsicState); //intrinsic
        var uniqueState = JSON.stringify(extrinsicState); //extrinsic
        console.log("*** Flyweight: Displaying shared (".concat(sharedState, ") and unique (").concat(uniqueState, ") state."));
    };
    return Flyweight;
}());
exports.Flyweight = Flyweight;
