// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// title, description, table of contents, installation, usage, license, contributing, tests, and questions
const questions = [
  {
    type: "input",
    message: "Enter the Title:",
    name: "title"
  },
  {
    type: 'input',
    message: 'Enter a description:',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter step by step instructions:',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter instructions and examples for use:',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'How could others contribute to this project?',
    name: 'contributing',
    
  },
  {
    type: 'input',
    message: 'Enter any tests and examples:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'How can you be reached for questions?',
    name: 'questions',
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your Email?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'Choose your License of choice:',
    name: 'license',
    choices: ['MIT', 'Mozilla Public License 2.0', 'The Unlicense', 'GNU AGPLv3']
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('README.md file generated successfully!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
