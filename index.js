const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/shapesList/circle");
const Square = require("./lib/shapesList/square");
const Triangle = require("./lib/shapesList/triangle");
//based on which shape the user chooses, create new instance of shape and write to file
function generateSvg(text, textColor, shape, shapeColor) {
  if(text.length > 3) { //function won't continue if the user's text input is larger than 3 characters
    console.log("Logo text is larger than 3 characters. Please try again");
    return;
  }

  let svg = "";
  switch(shape) {//based on user's choice, creates new instance of the specific shape and calls the renderSvg function for each
    case "Circle":
      const circle = new Circle(text, textColor, shapeColor);
      svg = circle.renderSvg();
      break;
    case "Triangle":
      const triangle = new Triangle(text, textColor, shapeColor);
      svg = triangle.renderSvg();
      break;
    case "Square":
      const square = new Square(text, textColor, shapeColor);
      svg = square.renderSvg();
      break;
    default:
  }
	fs.writeFile("./img/logo.svg", svg, (err) => err ? console.log(err) : console.log('Generated logo!'));//writes string to file
}
//asks the user questions and calls function with user input as parameters
function init() {
  inquirer
    .prompt([//prompts the user with questions
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
			generateSvg(data.text, data.textColor, data.shape, data.shapeColor);//calls generateSVG with
		});}
//calling init function
init();