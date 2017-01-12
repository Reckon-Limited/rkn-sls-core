/// <reference path="describe.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = require("chai");
describe('Sanity', function () {
    var Sanity = (function () {
        function Sanity() {
        }
        Sanity.prototype.before = function () {
        };
        Sanity.prototype.sanity = function () {
            chai_1.expect('true').to.eql('true');
        };
        return Sanity;
    }());
    __decorate([
        mocha_typescript_1.test
    ], Sanity.prototype, "sanity");
    Sanity = __decorate([
        mocha_typescript_1.suite
    ], Sanity);
});
