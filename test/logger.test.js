"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var td = require("testdouble");
var original = console.log;
describe('Logger', function () {
    after(function () {
        console.log = original;
    });
    describe('info', function () {
        it('adds [info]', function () {
            var log = td.function();
            console.log = log;
            index_1.logger.info('Hello');
            td.verify(log('[info] Hello'));
        });
        it('preserves console.log formatting', function () {
            var log = td.function();
            console.log = log;
            index_1.logger.info('%d hello', 1, 2, { blah: 'vtha' });
            var args = td.matchers.contains('[info]');
            td.verify(log("[info] %d hello"), { ignoreExtraArgs: true });
        });
    });
    describe('error', function () {
        it('adds [error]', function () {
            var log = td.function();
            console.log = log;
            index_1.logger.error('Hello');
            td.verify(log('[error] Hello'));
        });
    });
    describe('debug', function () {
        it('not called', function () {
            var log = td.function();
            console.log = log;
            index_1.logger.debug('Hello');
            td.verify(log(), { times: 0, ignoreExtraArgs: true });
        });
    });
    describe('with debug', function () {
        before(function () {
            process.env.DEBUG = true;
        });
        after(function () {
            console.log = original;
            delete process.env.DEBUG;
        });
        it('adds [debug]', function () {
            var log = td.function();
            console.log = log;
            index_1.logger.debug('Blah Vtha');
            td.verify(log('[debug] Blah Vtha'));
        });
    });
});
// describe('Responder', () => {
//
//   it('wraps status code', async () => {
//     let response = Response.send(200, 'ok')
//     expect(response.statusCode).to.eq(200)
//   });
//
// });
// @suite class LoggerTest {
//
//   before() {
//     console.log = original;
//     process.env.DEBUG = true
//   }
//
//   after() {
//     console.log = original;
//     delete process.env.DEBUG;
//   }
//
//   @test debug() {
//       let obj = {
//         one: {
//           two: {
//             three: {
//               blah: 'vtha'
//             }
//           }
//         }
//       };
//       let expected = '{ one: { two: { three: { blah: \'vtha\' } } } }';
//       let spy = sinon.spy();
//
//       console.log = spy;
//
//       logger.debug('%d hello', 1, 2, obj);
//
//       expect(spy.firstCall.args.indexOf(expected) !== -1).to.be.true;
//
//       logger.debug('hello',1);
//
//       expect(spy.secondCall.args.indexOf('hello') !== -1).to.be.true;
//   }
//
//   @test disableDebug() {
//
//     process.env.DEBUG = false;
//
//     let spy = sinon.spy();
//     console.log = spy;
//
//     logger.debug('test',1,2,3);
//     expect(spy.called).to.be.false;
//
//   }
// }
