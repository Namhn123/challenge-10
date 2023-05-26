class Shapes {
	constructor(text, textColor, color) {
		this.text = text;
		this.textColor = textColor;
		this.color = color;
	}
	generateSvgTag() {
		return(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">\n`);
	}
	generateSvgEnd() {
		return(`</svg>\n`)
	}
	render() {
		return("");
	}
	generateText() {
		return("");
	}
	generateSvg() {
		return(this.generateSvgTag() + this.render() + this.generateText() + this.generateSvgEnd());
	}
}

module.exports = Shapes;