import { expect } from 'chai';

import { logger } from '../index';

import * as td from 'testdouble';

const original = console.log;

describe('Logger', () => {


  after(() => {
    console.log = original;
  });

  describe('info', () => {

    it('adds [info]', () => {
      const log: any = td.function();

      console.log = log;

      logger.info('Hello');
      td.verify(log('[info] Hello'));
    });


    it('preserves console.log formatting', () => {
      const log: any = td.function();

      console.log = log;

      logger.info('%d hello', 1, 2, {blah: 'vtha'});

      const args = td.matchers.contains('[info]')

      td.verify(log("[info] %d hello"), {ignoreExtraArgs: true});
    });


  });

  describe('error', () => {

    it('adds [error]', () => {
      const log: any = td.function();

      console.log = log;

      logger.error('Hello');
      td.verify(log('[error] Hello'));
    });

  });

  describe('debug', () => {

    it('not called', () => {
      const log: any = td.function();

      console.log = log;

      logger.debug('Hello');
      td.verify(log(), {times: 0, ignoreExtraArgs: true});
    });

  });

  describe('with debug', () => {

    before( () => {
      process.env.DEBUG = true;
    });

    after(() => {
      console.log = original;
      delete process.env.DEBUG;
    });


    it('adds [debug]', () => {
      const log: any = td.function();

      console.log = log;

      logger.debug('Blah Vtha');
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
