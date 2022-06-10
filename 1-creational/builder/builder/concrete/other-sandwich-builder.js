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
exports.OtherSandwichBuilder = void 0;
var sandwich_builder_1 = require("../abstract/sandwich-builder");
var bread_type_1 = require("../../enums/bread-type");
var cheese_type_1 = require("../../enums/cheese-type");
var meat_type_1 = require("../../enums/meat-type");
var OtherSandwichBuilder = /** @class */ (function (_super) {
    __extends(OtherSandwichBuilder, _super);
    function OtherSandwichBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtherSandwichBuilder.prototype.prepareBread = function () {
        this.sandwich.setBreadType(bread_type_1.BreadType.WHEAT);
        this.sandwich.setToasted(true);
    };
    OtherSandwichBuilder.prototype.applyMeatAndCheese = function () {
        this.sandwich.setMeatType(meat_type_1.MeatType.TURKEY);
        this.sandwich.setCheeseType(cheese_type_1.CheeseType.CHEDDAR);
    };
    OtherSandwichBuilder.prototype.applyVegetables = function () {
        this.sandwich.setVegetables(["Tomato", "Lettuce"]);
    };
    OtherSandwichBuilder.prototype.addCondiments = function () {
        this.sandwich.setHasMayonnaise(false);
        this.sandwich.setHasMustard(true);
    };
    return OtherSandwichBuilder;
}(sandwich_builder_1.SandwichBuilder));
exports.OtherSandwichBuilder = OtherSandwichBuilder;
