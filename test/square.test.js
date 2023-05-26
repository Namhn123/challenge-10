const Square = require('../lib/shapesList/square');

describe('Square', () => {
	describe('Square Render', () => {
		it('should use 3rd parameter', () => {
			const square = new Square("ABC", "pink", "blue");
			const result = square.render();

			expect(result).toEqual('<rect x="20" y="20" width="160" height="160" style="fill:blue" />\n');
		});
	});

	describe('Triangle Text', () => {
		it('should use first and second parameter', () => {
			const square = new Square("ABC", "pink", "blue");
			const result = square.generateText();

			expect(result).toEqual('<text x="100" y="120" font-size="60" text-anchor="middle" fill="pink">ABC</text>\n');
		});
	});
});