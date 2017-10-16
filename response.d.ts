export interface IResponse {
    headers: any;
    statusCode: number;
    body: string;
}
export declare enum ResponseCode {
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
export declare class Response {
    static send(code: ResponseCode, message: any): {
        headers: {
            "Access-Control-Allow-Origin": string;
        };
        statusCode: ResponseCode;
        body: string;
    };
    static ok(message?: any): {
        headers: {
            "Access-Control-Allow-Origin": string;
        };
        statusCode: ResponseCode;
        body: string;
    };
}
