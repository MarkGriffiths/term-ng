# term-ng

> Enables enhanced node.js/fish-shell/XTerm/iTerm3 feature integration.

##### Publishing Status

[![npm](https://img.shields.io/npm/v/term-ng?logo=npm)](https://www.npmjs.com/package/term-ng "npm") [![David](https://david-dm.org/thebespokepixel/term-ng/master/status.svg)](https://david-dm.org/thebespokepixel/term-ng/master "David")  
 [![Travis](https://img.shields.io/travis/com/thebespokepixel/term-ng/master?logo=travis)](https://travis-ci.com/thebespokepixel/term-ng "Travis") [![Rollup](https://img.shields.io/badge/es6-module%3Amjs_%E2%9C%94-64CA39?&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZmlsbD0iI0ZGMzMzMyIgZD0iTTEwLjkwNDI4MjQsMy4wMDkxMDY4MyBDMTEuMjM4NzA1NSwzLjU4MjgzNzEzIDExLjQyODU3MTQsNC4yNDQ4MzM2MyAxMS40Mjg1NzE0LDQuOTUwOTYzMjIgQzExLjQyODU3MTQsNi40MTc4NjM0IDEwLjYwODY5NTcsNy42OTU2MjE3MiA5LjM5MTgyNzM5LDguMzc2NTMyNCBDOS4zMDU1MjQ2OCw4LjQyNDg2ODY1IDkuMjczMTYxMTYsOC41MzIwNDkwNCA5LjMxODQ3MDA5LDguNjE4MjEzNjYgTDExLjQyODU3MTQsMTMgTDUuMjU4NjgyODEsMTMgTDIuMzM5Nzc3MjMsMTMgQzIuMTUyMTIzNDUsMTMgMiwxMi44NDgyNzU3IDIsMTIuNjUzODA0OCBMMiwxLjM0NjE5NTIyIEMyLDEuMTU0OTk2ODggMi4xNDgzMTU0MywxIDIuMzM5Nzc3MjMsMSBMNy42NjAyMjI3NywxIEM3LjcwMTU0MTQ5LDEgNy43NDExMzc2NCwxLjAwNzM1NTg4IDcuNzc3NzY2NTgsMS4wMjA5MDQyOSBDOS4wNjQ1MzgyOCwxLjE0NDU0MDA0IDEwLjE3MzM4ODQsMS44NTM4NTI5MSAxMC44MjIyOTQ5LDIuODcyNTA0MzggQzEwLjc5OTE5NTMsMi44NDQ4NDgwNiAxMC44NDQ0OTkxLDIuOTQ5MTc0NzYgMTAuOTA0MjgyNCwzLjAwOTEwNjgzIFoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjMxIiBkPSJNOC44NTcxNDI4NiwzLjU3MTQyODU3IEw2LjcxNDI4NTcxLDYuNTcxNDI4NTcgTDkuMjg1NzE0MjksNS4yODU3MTQyOSBDOS4yODU3MTQyOSw1LjI4NTcxNDI5IDkuNzE0Mjg1NzEsNC44NTcxNDI4NiA5LjI4NTcxNDI5LDQuNDI4NTcxNDMgQzkuMjg1NzE0MjksNCA4Ljg1NzE0Mjg2LDMuNTcxNDI4NTcgOC44NTcxNDI4NiwzLjU3MTQyODU3IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQkIwNDAiIGQ9Ik0yLjg0Njc0NjAzLDEyLjk5NTg0OTUgQzMuMjY0OTIwNjIsMTIuOTk1ODQ5NSAzLjE4NTkzMDM0LDEyLjk0NjM2NjkgMy4zMTYxMTYzOCwxMi44NzM5MDU0IEMzLjYxODE3NTg3LDEyLjcwNTc3OTMgNS42ODk0NDA5OSw4LjcxMjc4NDU5IDcuNzE3NTU0NzYsNi44MjEzNjYwMiBDOS43NDU2Njg1Miw0LjkyOTk0NzQ2IDEwLjAwNDU3NjcsNS41NjA0MjAzMiA4Ljg4NDc5ODk1LDMuNTAyOTc3MjMgQzguODg0Nzk4OTUsMy41MDI5NzcyMyA5Ljc0NzgyNjA5LDUuMTQyMjA2NjUgOS4wMTQyNTMwMiw1LjI2ODMwMTIzIEM4LjQzODE4MjQxLDUuMzY3MDc1MzEgNy4xMTk5MDg0Nyw0LjEyMjk0MjIxIDcuNjExODMzOTMsMy4wMDQ5MDM2OCBDOC4wOTA4MTM5OSwxLjkxNDE4NTY0IDEwLjAxOTY3OTYsMi4xMjAxNDAxMSAxMC45MDY0NCwzLjAwOTEwNjgzIEMxMC44NzgzOTE2LDIuOTYyODcyMTUgMTAuODUwMzQzMiwyLjkxNjYzNzQ4IDEwLjgyMjI5NDksMi44NzI1MDQzOCBDMTAuMzA0NDc4NiwyLjI1MjUzOTQgOS41MDQwMjA5MiwxLjkwMzY3Nzc2IDguNzEwMDM1OTYsMS45MDM2Nzc3NiBDNy4xOTk3Mzg0OCwxLjkwMzY3Nzc2IDYuODIwMDA2NTQsMi40MjY5NzAyMyAzLjkyMDIzNTM3LDcuNjE5OTY0OTcgQzIuMzg3Nzk5MzQsMTAuMzY1NDA2NyAyLjAxMDgzMTkzLDExLjU3MzUwNzkgMi4wMDYyOTA2OSwxMi4xNjk4MTgyIEMyLDEyLjk5NTg0OTUgMi4wMDYyOTA2OSwxMi45OTU4NDk1IDIuODQ2NzQ2MDMsMTIuOTk1ODQ5NSBaIi8%2BCiAgPC9nPgo8L3N2Zz4K)](https://github.com/rollup/rollup/wiki/pkg.module "Rollup")   

##### Development Status

[![Travis](https://img.shields.io/travis/com/thebespokepixel/term-ng/develop?logo=travis)](https://travis-ci.com/thebespokepixel/term-ng "Travis") [![David](https://david-dm.org/thebespokepixel/term-ng/develop/status.svg)](https://david-dm.org/thebespokepixel/term-ng/develop "David") [![David-developer](https://david-dm.org/thebespokepixel/term-ng/develop/dev-status.svg)](https://david-dm.org/thebespokepixel/term-ng/develop?type=dev "David-developer")  
 [![Snyk](https://snyk.io/test/github/thebespokepixel/term-ng/badge.svg)](https://snyk.io/test/github/thebespokepixel/term-ng "Snyk") [![Code-climate](https://api.codeclimate.com/v1/badges/7ba2088efca500b3b4ff/maintainability)](https://codeclimate.com/github/thebespokepixel/term-ng/maintainability "Code-climate") [![Coverage](https://api.codeclimate.com/v1/badges/7ba2088efca500b3b4ff/test_coverage)](https://codeclimate.com/github/thebespokepixel/term-ng/test_coverage "Coverage")   

##### Documentation/Help

[![Inch](https://inch-ci.org/github/thebespokepixel/term-ng.svg?branch=master&style=shields)](https://inch-ci.org/github/thebespokepixel/term-ng "Inch") [![Twitter](https://img.shields.io/twitter/follow/thebespokepixel?style=social)](https://twitter.com/thebespokepixel "Twitter")   


## TermNG (Next Generation)

-   Senses 24bit colour (truecolor) when `$TERM_COLOR=16m` environment variable is set.
-   Adds `--color=16m` to front of process.argv before wrapping the `supports-color` module.
-   Indicate enhanced media support by setting:
    -   `$TERM_IMAGES=enabled` : Allow rendering of inline images using OSC sequences.
    -   `$TERM_AUDIO=enabled` : Allow enhanced audio.
-   Indicate that you use a font that has box drawing or full extended characters.
    -   `$TERM_FONT=box` : Terminal font has UTF8 box drawing characters.
    -   `$TERM_FONT=full` : Terminal font has full UTF8 extras (such as Menlo, DejaVu Mono).
-   Sense $TERM suffixes to indicate enhanced termcap capabilities.

In fish, it's a simple as defining a universal, exported variable.

```shell
  set -Ux TERM_IMAGES enabled
  set -Ux TERM_FONT full
```

In bash an `export TERM_IMAGES=enabled` in `~/.bashrc` will do the trick. I don't use tcsh or zsh anymore so can't remember exactly which files are used when those shells are invoked interactively. Fish is almost always invoked interactively - which is kind of the point of fish, it being the 'Friendly INTERACTIVE Shell' after all! Write scripts for portablility (sh/bash/perl even node) then write fish functions to interact with those scripts from the keyboard... but I digress.

### Usage

### Terminal Color Test

From inside the package directory, running `npm run-script colors` will generate a preview of the entire color gamut your terminal is capable of. Output of a recent iTerm shown below:

![Color preview][colors]

[colors]: https://raw.githubusercontent.com/thebespokepixel/term-ng/master/media/colors.png


## Documentation

Full documentation can be found at [https://thebespokepixel.github.io/term-ng/][1]

[1]: https://thebespokepixel.github.io/term-ng/
