const Shapes = require('../shapes.js');
//child class that extends shapes
class Triangle extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	//returns specific code for triangle shape and user color
	render() {
		return(`<polygon points="120, 20 220, 180 20, 180" fill="${this.color}" />\n`);
	}
	//returns text code with specific placement to match the triangle shape
	generateText() {
		return(`<text x="120" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`);
	}
}

module.exports = Triangle;