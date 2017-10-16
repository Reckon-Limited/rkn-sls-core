"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["Ok"] = 200] = "Ok";
    ResponseCode[ResponseCode["Created"] = 201] = "Created";
    ResponseCode[ResponseCode["Accepted"] = 202] = "Accepted";
    ResponseCode[ResponseCode["NotModified"] = 304] = "NotModified";
    ResponseCode[ResponseCode["BadRequest"] = 400] = "BadRequest";
    ResponseCode[ResponseCode["Unauthorized"] = 401] = "Unauthorized";
    ResponseCode[ResponseCode["Forbidden"] = 403] = "Forbidden";
    ResponseCode[ResponseCode["NotFound"] = 404] = "NotFound";
    ResponseCode[ResponseCode["InternalServerError"] = 500] = "InternalServerError";
    ResponseCode[ResponseCode["NotImplemented"] = 501] = "NotImplemented";
})(ResponseCode = exports.ResponseCode || (exports.ResponseCode = {}));
var Response = /** @class */ (function () {
    function Response() {
    }
    Response.send = function (code, message) {
        if (typeof message === 'string') {
            message = { message: message };
        }
        return {
            headers: { "Access-Control-Allow-Origin": "*" },
            statusCode: code,
            body: JSON.stringify(message),
        };
    };
    Response.ok = function (message) {
        if (!message) {
            message = 'ok';
        }
        return Response.send(ResponseCode.Ok, message);
    };
    return Response;
}());
exports.Response = Response;
