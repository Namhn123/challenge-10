const Circle = require('../lib/shapesList/circle');

describe('Circle', () => {
	describe('Circle Render', () => {
		it('should use 3rd parameter', () => {
			const circle = new Circle("ABC", "pink", "blue");
			const result = circle.render();

			expect(result).toEqual('<circle cx="100" cy="100" r="80" fill="blue" />\n');
		});
	});

	describe('Circle Text', () => {
		it('should use first and second parameter', () => {
			const circle = new Circle("ABC", "pink", "blue");
			const result = circle.generateText();

			expect(result).toEqual('<text x="100" y="120" font-size="60" text-anchor="middle" fill="pink">ABC</text>\n');
		});
	});
});