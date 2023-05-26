//  <circle cx="150" cy="100" r="80" fill="green" />
const Shapes = require('../shapes.js');

class Circle extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	render() {
		return(`<circle cx="100" cy="100" r="80" fill="${this.color}" />\n`);
	}
	generateText() {
		return(`<text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`);
	}
}

module.exports = Circle;