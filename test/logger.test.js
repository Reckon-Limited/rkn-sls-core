/// <reference path="describe.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const mocha_typescript_1 = require("mocha-typescript");
const chai_1 = require("chai");
const sinon = require("sinon");
const logger = require("../index").logger;
const original = console.log;
// describe('logger', function() {
//
//   beforeEach(function() {
//     console.log = original;
//     process.env.DEBUG = true
//   });
//
//   afterEach(function() {
//     console.log = original;
//     delete process.env.DEBUG;
//   });
//
//   it('debug', function() {
//     let obj = {
//       one: {
//         two: {
//           three: {
//             blah: 'vtha'
//           }
//         }
//       }
//     };
//     let expected = '{ one: { two: { three: { blah: \'vtha\' } } } }';
//     let spy = sinon.spy();
//
//     console.log = spy;
//
//     logger.debug('%d hello', 1, 2, obj);
//
//     expect(spy.firstCall.args.indexOf(expected) !== -1).to.be.true;
//
//     logger.debug('hello');
//
//     expect(spy.secondCall.args.indexOf('hello') !== -1).to.be.true;
//   });
//
//   it('disables debug', function() {
//
//     process.env.DEBUG = false;
//
//     let spy = sinon.spy();
//     console.log = spy;
//
//     logger.debug('test',1,2,3);
//     expect(spy.called).to.be.false;
//
//   });
// });
//
// // describe('Sanity', () => {
let LoggerTest = class LoggerTest {
    before() {
        console.log = original;
        process.env.DEBUG = true;
    }
    after() {
        console.log = original;
        delete process.env.DEBUG;
    }
    debug() {
        let obj = {
            one: {
                two: {
                    three: {
                        blah: 'vtha'
                    }
                }
            }
        };
        let expected = '{ one: { two: { three: { blah: \'vtha\' } } } }';
        let spy = sinon.spy();
        console.log = spy;
        logger.debug('%d hello', 1, 2, obj);
        chai_1.expect(spy.firstCall.args.indexOf(expected) !== -1).to.be.true;
        logger.debug('hello');
        chai_1.expect(spy.secondCall.args.indexOf('hello') !== -1).to.be.true;
    }
    disableDebug() {
        process.env.DEBUG = false;
        let spy = sinon.spy();
        console.log = spy;
        logger.debug('test', 1, 2, 3);
        chai_1.expect(spy.called).to.be.false;
    }
};
__decorate([
    mocha_typescript_1.test
], LoggerTest.prototype, "debug", null);
__decorate([
    mocha_typescript_1.test
], LoggerTest.prototype, "disableDebug", null);
LoggerTest = __decorate([
    mocha_typescript_1.suite
], LoggerTest);
