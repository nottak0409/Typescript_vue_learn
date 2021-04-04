"use strict";
var Book = /** @class */ (function () {
    function Book() {
        this._name = '';
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value === '') {
                console.log('書籍名がないデウs');
            }
            else {
                this._name = value;
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
