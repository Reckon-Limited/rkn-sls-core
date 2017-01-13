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
var sinon = require("sinon");
var index_1 = require("../index");
var original = console.log;
var LoggerTest = (function () {
    function LoggerTest() {
    }
    LoggerTest.prototype.before = function () {
        console.log = original;
        process.env.DEBUG = true;
    };
    LoggerTest.prototype.after = function () {
        console.log = original;
        delete process.env.DEBUG;
    };
    LoggerTest.prototype.debug = function () {
        var obj = {
            one: {
                two: {
                    three: {
                        blah: 'vtha'
                    }
                }
            }
        };
        var expected = '{ one: { two: { three: { blah: \'vtha\' } } } }';
        var spy = sinon.spy();
        console.log = spy;
        index_1.logger.debug('%d hello', 1, 2, obj);
        chai_1.expect(spy.firstCall.args.indexOf(expected) !== -1).to.be.true;
        index_1.logger.debug('hello');
        // console.info('Res:',spy.secondCall.args);
        // expect(spy.secondCall.args.indexOf('hello') !== -1).to.be.true;
    };
    LoggerTest.prototype.disableDebug = function () {
        process.env.DEBUG = false;
        var spy = sinon.spy();
        console.log = spy;
        index_1.logger.debug('test', 1, 2, 3);
        chai_1.expect(spy.called).to.be.false;
    };
    return LoggerTest;
}());
__decorate([
    mocha_typescript_1.test
], LoggerTest.prototype, "debug", null);
__decorate([
    mocha_typescript_1.test
], LoggerTest.prototype, "disableDebug", null);
LoggerTest = __decorate([
    mocha_typescript_1.suite
], LoggerTest);
