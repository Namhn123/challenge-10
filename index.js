const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/shapesList/circle");
const Square = require("./lib/shapesList/square");
const Triangle = require("./lib/shapesList/triangle");

function generateSVG(text, textColor, shape, shapeColor) {
  let svg = "";
  switch(shape) {
    case "Circle":
      const circle = new Circle(text, textColor, shapeColor);
      svg = circle.generateSvg();
      break;
    case "Triangle":
      const triangle = new Triangle(text, textColor, shapeColor);
      svg = triangle.generateSvg();
      break;
    case "Square":
      const square = new Square(text, textColor, shapeColor);
      svg = square.generateSvg();
      break;
    default:
  }
  console.log(svg);
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Please enter up to 3 characters to be inside the logo: "
      },
      {
        type: "input",
        name: "textColor",
        message: "Please enter a color or hex code for the text: "
      },
      {
        type: 'list',
        name: 'shape',
        message: "Please choose a shape for the logo: ",
        choices: ["Circle", "Triangle", "Square"]
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color or hex code for the shape: ",
      }
		]).then((data) => {
			generateSVG(data.text, data.textColor, data.shape, data.shapeColor);
		});}

init();