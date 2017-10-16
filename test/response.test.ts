import { expect } from 'chai';

import { Response } from '../response';

describe('Response', () => {

  describe('Response', () => {
    it('wraps status code', () => {
      const response = Response.send(200, 'ok');
      expect(response.statusCode).to.eq(200);
    });

    it('wraps object into json', () => {
      const response = Response.send(200, { message: 'ok' });
      expect(response.body).to.eq('{"message":"ok"}');
    });

    it('wraps string into message object', () => {
      const response = Response.send(200, 'ok');
      expect(response.body).to.eq('{"message":"ok"}');
    });
  });

  describe('ok', () => {
    it('returns 200', () => {
      const response = Response.ok();
      expect(response.statusCode).to.eq(200);
    });

    it('wraps default message into object', () => {
      const response = Response.ok();
      expect(response.body).to.eq('{"message":"ok"}');
    });

    it('wrap arbitrary message into object', () => {
      const response = Response.ok({blah: 'vtha'});
      expect(response.body).to.eq('{"blah":"vtha"}');
    });
  });

});
