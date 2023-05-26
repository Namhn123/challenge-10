//parent class
class Shapes {
	constructor(text, textColor, color) {
		this.text = text;
		this.textColor = textColor;
		this.color = color;
	}
	//returns the svg starting tag
	generateSvgTag() {
		return(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">\n`);
	}
	//returns the svg ending tag
	generateSvgEnd() {
		return(`</svg>\n`)
	}
	//child function will be called instead
	render() {
		return("");
	}
	//child function will be called instead
	generateText() {
		return("");
	}
	//returns the entire svg code
	renderSvg() {
		return(this.generateSvgTag() + this.render() + this.generateText() + this.generateSvgEnd());
	}
}

module.exports = Shapes;