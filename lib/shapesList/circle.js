const Shapes = require('../shapes.js');
//child class that extends shapes
class Circle extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	//returns specific code for circle shape and user color
	render() {
		return(`<circle cx="100" cy="100" r="80" fill="${this.color}" />\n`);
	}
	//returns text code with specific placement to match the circle shape
	generateText() {
		return(`<text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`);
	}
}

module.exports = Circle;