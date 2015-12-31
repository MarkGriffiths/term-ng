'use strict';

/*
 	Term-NG: Next Generation Terminal Feature Exposure/Whitelisting

	Copyright (c) 2015 CryptoComposite

	Permission is hereby granted, free of charge, to any person
	obtaining a copy of this software and associated documentation
	files (the "Software"), to deal in the Software without
	restriction, including without limitation the rights to use, copy,
	modify, merge, publish, distribute, sublicense, and/or sell copies
	of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
let ref;
let supportsColor;

if ((ref = process.env.ITERM_SESSION_ID) !== undefined ? ref.includes(':' || process.env.TERM_COLOR === '16m') : void 0) {
	if (!(/\-color/.test(process.argv.join('')))) {
		process.argv.push('--color=16m');
	}
}

supportsColor = require('supports-color');

module.exports = {
	color: {
		basic: supportsColor.hasBasic,
		level: supportsColor.level,
		has256: supportsColor.level >= 2,
		has16m: supportsColor.level >= 3
	},
	images: (process.env.TERM_IMAGES !== undefined) && supportsColor.level >= 2,
	audio: process.env.TERM_AUDIO !== undefined,
	termcap: {
		basic: /^xterm-256/.test(process.env.TERM),
		enhanced: /\+iterm3/.test(process.env.TERM)
	},
	software: process.env.TERM_PROGRAM || process.env.TERMKIT_HOST_APP || process.env.TERM
};
