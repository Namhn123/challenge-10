//  <polygon points="150, 18 244, 182 56, 182" fill="blue" />
const Shapes = require('../shapes.js');

class Triangle extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	render() {
		return(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);
	}
	generateText() {
		return(``);
	}
}

module.exports = Triangle;