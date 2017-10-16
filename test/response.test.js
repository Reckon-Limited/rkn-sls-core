"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var response_1 = require("../response");
describe('Response', function () {
    describe('Response', function () {
        it('wraps status code', function () {
            var response = response_1.Response.send(200, 'ok');
            chai_1.expect(response.statusCode).to.eq(200);
        });
        it('wraps object into json', function () {
            var response = response_1.Response.send(200, { message: 'ok' });
            chai_1.expect(response.body).to.eq('{"message":"ok"}');
        });
        it('wraps string into message object', function () {
            var response = response_1.Response.send(200, 'ok');
            chai_1.expect(response.body).to.eq('{"message":"ok"}');
        });
    });
    describe('ok', function () {
        it('returns 200', function () {
            var response = response_1.Response.ok();
            chai_1.expect(response.statusCode).to.eq(200);
        });
        it('wraps default message into object', function () {
            var response = response_1.Response.ok();
            chai_1.expect(response.body).to.eq('{"message":"ok"}');
        });
        it('wrap arbitrary message into object', function () {
            var response = response_1.Response.ok({ blah: 'vtha' });
            chai_1.expect(response.body).to.eq('{"blah":"vtha"}');
        });
    });
});
