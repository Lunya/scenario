/*Copyright (c) 2017-2018 Xavier Blanc <blancxav@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import BrowserKind from './BrowserKind';

export default class Action {
	constructor() {
		this.type = this.constructor.name;
	}

	toString() {
		return `${this.constructor.name}`;
	}

	equalsTo(action) {
		return this.type === action.type;
	}

	nightmareRun(nightmare) {
		return nightmare;
	}

	chromelessRun(chromeless) {
		return chromeless;
	}

	puppeteerRun(puppeterPage) {
		return puppeterPage;
	}

	run(browser, browserKind) {
		switch (browserKind) {
		case BrowserKind.NIGHTMARE:
			return this.nightmareRun(browser);
		case BrowserKind.CHROMELESS:
			return this.chromelessRun(browser);
		case BrowserKind.PUPPETEER:
			return this.puppeteerRun(browser);
		}
	}
}