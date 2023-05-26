const Triangle = require('../lib/shapesList/triangle');

describe('Triangle', () => {
	describe('Triangle Render', () => {
		it('should use 3rd parameter', () => {
			const triangle = new Triangle("ABC", "pink", "blue");
			const result = triangle.render();

			expect(result).toEqual('<polygon points="120, 20 220, 180 20, 180" fill="blue" />\n');
		});
	});

	describe('Triangle Text', () => {
		it('should use first and second parameter', () => {
			const triangle = new Triangle("ABC", "pink", "blue");
			const result = triangle.generateText();

			expect(result).toEqual('<text x="120" y="165" font-size="60" text-anchor="middle" fill="pink">ABC</text>\n');
		});
	});
});