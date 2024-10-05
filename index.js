// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project, including motivation, purpose, problem it solves, and what you learned.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application? Examples are welcomed!',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list your collaborators (& links to their github profiles), 3rd party assets that require attribution, and links to any tutorials you used.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['mit', 'apache 2.0', 'gpl 3.0', 'bsd 3-clause']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email would you like others to contact you at?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github profile name?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        err ? console.error(err) : console.log('README.md file created!');
    });
};


// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
.then((data) => {
    console.log(data);
    const markdownContent = generateMarkdown(data);
    writeToFile('README.md', markdownContent);
})
.catch((error) => {
    console.error(error);
});
};

// Function call to initialize app
init();

