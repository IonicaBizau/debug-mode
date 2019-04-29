"use strict";

const isDebugging = require("../lib");

console.log(isDebugging);
// $ node example/
// false

// $ node debug example/
// < Debugger listening on port 5858
// debug> . ok
// break in example/index.js:1
// > 1 "use strict";
//   2
//   3 const debugMode = require("../lib");
// debug> c
// < true
