
const Shapes = require('../shapes.js');
//child class that extends shapes
class Square extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	//returns specific code for square shape and user color
	render() {
		return(`<rect x="20" y="20" width="160" height="160" style="fill:${this.color}" />\n`);
	}
	//returns text code with specific placement to match the square shape
	generateText() {
		return(`<text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`);
	}
}

module.exports = Square;