"use strict";
var util = require("util");
function error(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var args = rest.map(function (a) { return inspect(a); });
    args.unshift("[error] " + s);
    console.log.apply(null, args);
}
exports.error = error;
function info(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var args = rest.map(function (a) { return inspect(a); });
    args.unshift("[info] " + s);
    console.log.apply(null, args);
}
exports.info = info;
function debug(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (process.env.DEBUG == 'true') {
        var args = rest.map(function (a) { return inspect(a); });
        args.unshift("[debug] " + s);
        console.log.apply(null, args);
    }
}
exports.debug = debug;
function inspect(a) {
    return (typeof a == 'string') ? a : util.inspect(a, { depth: 99 });
}
exports.inspect = inspect;
