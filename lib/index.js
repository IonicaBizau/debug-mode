"use strict";

/**
 * debugMode
 * Detect if Node.js is in debug mode.
 *
 * @name debugMode
 * @function
 * @return {Boolean} `true` if the debug mode is enabled, `false` otherwise.
 */
module.exports = () => {
    return typeof v8debug === "object";
};
