const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const { Triangle, Circle, Square } = require("./lib/shapes");

// Questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 text characters.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a text color keyword or a hexadecimal number.",
    },
    {
        type: "list",
        name: "shapeType",
        message: "Which shape will you be using?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color keyword or a hexadecimal number.",
    }
];

// Function to write data to file
function writeToFile(fileName, data) {
    const filePath = `${process.cwd()}/examples`;
    const file = fs.writeFileSync(path.join(filePath, fileName), data);
    return file;
}

async function init() {
    let svgString = "";
    const svgFile = "logo.svg";
    const answers = await inquirer.prompt(questions);

    const enteredShapeType = answers.shapeType;

    const enteredShapeColor = answers.shapeColor;

    const enteredTextColor = answers.textColor;

    // Function if user enters more than 3 characters
    let enteredText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        enteredText = answers.text;
    }
    else {
        console.log("Enter up to 3 characters only.");
        return;
    }

    let enteredShape;
    if (enteredShapeType === "Square" || enteredShapeType === "square") {
        enteredShape = new Square(enteredShapeColor, enteredText, enteredTextColor);
    }
    else if (enteredShapeType === "Circle" || enteredShapeType === "circle") {
        enteredShape = new Circle(enteredShapeColor, enteredText, enteredTextColor);
    }
    else if (enteredShapeType === "Triangle" || enteredShapeType === "triangle") {
        enteredShape = new Triangle(enteredShapeColor, enteredText, enteredTextColor);
    }

    // enteredShape.setColor(enteredShapeColor);

    svgString = enteredShape.render();

    console.log("Generated logo.svg");

    writeToFile(svgFile, svgString);
}
init()