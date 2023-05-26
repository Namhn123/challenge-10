//  <rect x="20" y="20" width="200" height="200" style="fill:blue" />
const Shapes = require('../shapes.js');

class Square extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
	render() {
		return(`<rect x="20" y="20" width="200" height="200" fill:"${this.color}" />`);
	}
	generateText() {
		return(``);
	}
}

module.exports = Square;