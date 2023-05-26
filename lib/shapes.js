class Shapes {
	constructor(text, textColor, color) {
		this.text = text;
		this.textColor = textColor;
		this.color = color;
	}
	generateSvgTag() {
		return(`<svg width="300" height="300"></svg>\n`);
	}
	generateSvgEnd() {
		return(`</svg\n`)
	}
	render() {
		return("");
	}
	generateText() {
		return("");
	}
	generateSvgTag() {
		return(this.generateSvgTag() + this.render() + this.generateText() + this.generateSvgEnd());
	}
}

module.exports = Shapes;