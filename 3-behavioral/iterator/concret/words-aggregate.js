"use strict";
exports.__esModule = true;
exports.WordsAggregate = void 0;
var alphabetical_order_iterator_1 = require("./alphabetical-order-iterator");
var WordsAggregate = /** @class */ (function () {
    function WordsAggregate() {
        this.items = [];
    }
    WordsAggregate.prototype.getIterator = function () {
        return new alphabetical_order_iterator_1.AlphabeticalOrderIterator(this);
    };
    WordsAggregate.prototype.getReverseIterator = function () {
        return new alphabetical_order_iterator_1.AlphabeticalOrderIterator(this, true);
    };
    WordsAggregate.prototype.getItems = function () {
        return this.items;
    };
    WordsAggregate.prototype.getCount = function () {
        return this.items.length;
    };
    WordsAggregate.prototype.addItem = function (item) {
        this.items.push(item);
    };
    return WordsAggregate;
}());
exports.WordsAggregate = WordsAggregate;
