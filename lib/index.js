"use strict";
const inspector = require('inspector');

/**
 * debugMode
 * A boolean: `true` if the debug mode is enabled, `false` otherwise.
 *
 * @name debugMode
 * @function
 */

const isDebugging = typeof v8debug === "object" || /--debug|--inspect/.test(process.execArgv.join(" ")) || Boolean(inspector.url());

module.exports = isDebugging
