"use strict";
exports.__esModule = true;
exports.AlphabeticalOrderIterator = void 0;
var AlphabeticalOrderIterator = /** @class */ (function () {
    function AlphabeticalOrderIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    AlphabeticalOrderIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    AlphabeticalOrderIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    AlphabeticalOrderIterator.prototype.key = function () {
        return this.position;
    };
    AlphabeticalOrderIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    AlphabeticalOrderIterator.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    return AlphabeticalOrderIterator;
}());
exports.AlphabeticalOrderIterator = AlphabeticalOrderIterator;
