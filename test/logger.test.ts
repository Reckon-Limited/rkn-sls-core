/// <reference path="describe.d.ts" />

import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';

import * as sinon from 'sinon';

import { logger } from '../index'

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
@suite class LoggerTest {

  before() {
    console.log = original;
    process.env.DEBUG = true
  }

  after() {
    console.log = original;
    delete process.env.DEBUG;
  }

  @test debug() {
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

      expect(spy.firstCall.args.indexOf(expected) !== -1).to.be.true;

      logger.debug('hello');

      expect(spy.secondCall.args.indexOf('hello') !== -1).to.be.true;
  }

  @test disableDebug() {

    process.env.DEBUG = false;

    let spy = sinon.spy();
    console.log = spy;

    logger.debug('test',1,2,3);
    expect(spy.called).to.be.false;

  }
}
