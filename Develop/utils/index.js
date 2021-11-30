// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Please give a brief description for README."
},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const makeReadme = generateMarkdown(data);
    fs.writeFile('README.md', makeReadme, (err) => 
    err ? console.log(err) : console.log('Created your README.md')
    );

}

// TODO: Create a function to initialize app
// 
function init() {
    console.log(questions.title)
    inquirer.prompt(questions)
    .then ((data) => {
        writeToFile(data)
    }
    )}

// Function call to initialize app
init();
