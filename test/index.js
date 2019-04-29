"use strict";

const tester = require("tester")
    ;

tester.describe("debug-mode", t => {
    let debugMode = require("..")
    let libPath = require.resolve("..")

    const reloadModule = () => {
        delete require.cache[libPath]
        debugMode = require("..")
    }

    t.should("Detect if a Node.js process is in the debug mode.", () => {
        t.expect(debugMode).toEqual(false);
        global.v8debug = {}
        reloadModule()
        t.expect(debugMode).toEqual(true);
    });
});
