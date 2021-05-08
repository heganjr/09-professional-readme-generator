// TODO: Include packages needed for this application
const generateMarkdown = require(`./utils/generateMarkdown`);
// importing the file to index.js

const inquirer = require("inquirer");
const fs = require("fs");

// allows to to manipulate the readMe generator (ie. create it)

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    default: "Insert project name here",
  },
  {
    type: "list",
    name: "license",
    message: "What licence would you like to use?",
    choices: ["MIT", "GNU", "Apache", "BSD-3", "None"],
  },

  {
      type: "input",
      name: "fullName",
      message: "What is your name?",
      default: "Insert your full name here",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
      writeToFile("README.md", generateMarkdown(data) )
  });
}

// write file - call it readme.md and generate based on generateMarkdown - data
// Function call to initialize app
init();
