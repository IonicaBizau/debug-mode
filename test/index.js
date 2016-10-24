"use strict";

const tester = require("tester")
    , debugMode = require("..")
    ;

tester.describe("debug-mode", t => {
    t.should("Detect if a Node.js process is in the debug mode.", () => {
        t.expect(debugMode()).toEqual(false);
        global.v8debug = {}
        t.expect(debugMode()).toEqual(true);
    });
});
