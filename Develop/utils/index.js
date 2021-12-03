// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')
 
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{   type: 'input',
    name: 'description',
    message: 'Please give a brief description of your project.'
},
{   type: 'input',
    name: 'installation',
    message: 'Please explain the installation instructions for your project.'
},
{   type: 'input',
    name: 'usage',
    message: 'What is this project used for?',
},
{   type: 'input',
    name: 'contributing',
    message: 'Are there any guidelines you would like contributors to follow?'
},
{   type: 'input',
    name: 'tests',
    message: 'Are there any test instructions you would like your contributors to follow?'
},
{   type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'BSD', 'No License'],
},
{   type: 'input',
    name: 'username',
    message: 'Please enter your GitHub Username.',
},
{   type: 'input',
    name: 'email',
    message: 'Please enter your email that you would like to be linked to your project.',
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
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data)
    }

    )}

// Function call to initialize app
init();