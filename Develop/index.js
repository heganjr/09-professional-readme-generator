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

  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project?",
    default: "Insert here",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    default: "npm -i",
  },

  {
    type: "input",
    name: "usage",
    message: "What is the purpose of this project?",
    default: "Insert purpose here ",
  },

  {
    type: "input",
    name: "url",
    message: "what is the url of your image?",
    default: "paste image url here",
  },

  {
    type: "input",
    name: "credits",
    message: "what is the contributors names?",
    default: "insert your name here",
  },

  {
    type: "input",
    name: "contribute",
    message: "How are contributions made to the project?",
    default: "contributions are not possible",
  },

  {
    type: "input",
    name: "test",
    message: "How do you test your application?",
    default: "npm test",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
    default: "",
  },

  {
    type: "input",
    name: "number",
    message: "What is your number",
    default: "",
  },
  // can add additional contributiors with .when
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
    writeToFile("README.md", generateMarkdown(data));
  });
}

// write file - call it readme.md and generate based on generateMarkdown - data
// Function call to initialize app
init();
