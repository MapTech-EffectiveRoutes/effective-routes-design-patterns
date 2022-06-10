"use strict";
exports.__esModule = true;
exports.Client = void 0;
var book_1 = require("./element/concrete/book");
var laptop_1 = require("./element/concrete/laptop");
var object_structure_1 = require("./object-structure/object-structure");
var sales_visitor_1 = require("./visitor/concrete/sales-visitor");
var discount_visitor_1 = require("./visitor/concrete/discount-visitor");
var iphone_1 = require("./element/concrete/iphone");
var macbookpro_1 = require("./element/concrete/macbookpro");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var items = [];
        items.push(new macbookpro_1.MacBookPro(63251, 14000));
        items.push(new iphone_1.IPhone(55324, 7000));
        items.push(new book_1.Book(12345, 10));
        items.push(new macbookpro_1.MacBookPro(63250, 15000));
        items.push(new iphone_1.IPhone(78910, 8000));
        items.push(new laptop_1.Laptop(11198, 1500));
        items.push(new book_1.Book(63254, 15));
        items.push(new macbookpro_1.MacBookPro(63250, 12000));
        var cart = new object_structure_1.ObjectStructure(items);
        var discountVisitor = new discount_visitor_1.DiscountVisitor();
        var salesVisitor = new sales_visitor_1.SalesVisitor();
        console.log("------- Discount Visitor -------");
        cart.applyVisitor(discountVisitor);
        console.log("------- Sales Visitor -------");
        cart.applyVisitor(salesVisitor);
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
