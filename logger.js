"use strict";
const util = require("util");
function error(s, ..._) {
    let args = Array.from(arguments, (a) => { return inspect(a); });
    console.error.apply(null, args);
}
exports.error = error;
function info(s, ..._) {
    let args = Array.from(arguments, (a) => { return inspect(a); });
    console.info.apply(null, args);
}
exports.info = info;
function debug(s, ..._) {
    if (process.env.DEBUG == 'true') {
        let args = Array.from(arguments, (a) => { return inspect(a); });
        console.log.apply(null, args);
    }
}
exports.debug = debug;
function inspect(a) {
    return (typeof a == 'string') ? a : util.inspect(a, { depth: 99 });
}
exports.inspect = inspect;
