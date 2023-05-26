//  <polygon points="150, 18 244, 182 56, 182" fill="blue" />
const Shapes = require('../shapes.js');

class Triangle extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	render() {
		return(`<polygon points="120, 20 220, 180 20, 180" fill="${this.color}" />\n`);
	}
	generateText() {
		return(`<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`);
	}
}

module.exports = Triangle;