"use strict";

const semver = require("semver");

// This was written by @mscdex
// Ref :: https://github.com/nodejs/node/issues/9617#issuecomment-260738538
function isDebugging() {
    let TCP = process.binding("tcp_wrap").TCP
      , tcp = new TCP()
      , r
      ;

    function doBind() {
	let err = tcp.bind6("::", process.debugPort);
	err && (err = tcp.bind("0.0.0.0", process.debugPort));
	return err;
    }

    doBind();
    if (doBind()) {
	tcp.close();
	return false;
    }

    return true;
}

/**
 * debugMode
 * Detect if Node.js is in debug mode.
 *
 * @name debugMode
 * @function
 * @return {Boolean} `true` if the debug mode is enabled, `false` otherwise.
 */
module.exports = () => {
    if (typeof v8debug === "object") {
        return true;
    }

    if (semver.satisfies(process.version, ">6.1.0")) {
        try {
            return isDebugging();
        } catch (e) {}
    }

    return false;
};
