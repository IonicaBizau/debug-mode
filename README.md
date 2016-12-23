
# debug-mode

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/debug-mode.svg)](https://www.npmjs.com/package/debug-mode) [![Downloads](https://img.shields.io/npm/dt/debug-mode.svg)](https://www.npmjs.com/package/debug-mode) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Detect if a Node.js process is in the debug mode.

## :cloud: Installation

```sh
$ npm i --save debug-mode
```


## :clipboard: Example



```js
const debugMode = require("debug-mode");

console.log(debugMode());
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
```

## :memo: Documentation


### `debugMode()`
Detect if Node.js is in debug mode.

#### Return
- **Boolean** `true` if the debug mode is enabled, `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :cake: Thanks
Thanks to [**@gabipetrovay**](https://github.com/gabipetrovay)'s [answer](http://stackoverflow.com/a/13454643/1420197) posted on StackOverflow. :cake:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
