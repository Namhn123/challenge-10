//  <circle cx="150" cy="100" r="80" fill="green" />
const Shapes = require('../shapes.js');

class Circle extends Shapes {
	constructor(text, textColor, color) {
		super(text, textColor, color);
	}
}

module.exports = Circle;