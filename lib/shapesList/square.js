//  <rect x="20" y="20" width="200" height="200" style="fill:blue" />
const Shapes = require('../shapes.js');

class Square extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	render() {
		return(`<rect x="20" y="20" width="160" height="160" style="fill:blue" />\n`);
	}
	generateText() {
		return(`<text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`);
	}
}

module.exports = Square;