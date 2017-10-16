export interface IResponse {
  headers: any;
  statusCode: number;
  body: string;
}

export enum ResponseCode {
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NotModified = 304,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  NotImplemented = 501,
}

export class Response {

  public static send(code: ResponseCode, message: any) {

    if (typeof message === 'string') {
      message = { message };
    }

    return {
      headers: { "Access-Control-Allow-Origin" : "*" },
      statusCode: code,
      body: JSON.stringify(message),
    };
  }

  public static ok(message?: any) {
    if (!message) {
      message = 'ok';
    }

    return Response.send(ResponseCode.Ok, message);
  }
}
