const inquirer = require("inquirer");
const fs = require("fs");

function generateSVG(text, textColor, shape, shapeColor) {
	console.log(text, textColor, shape, shapeColor);
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