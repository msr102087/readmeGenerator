// Constants
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./generateReadMe');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


// User README Question Prompts

function promptUser(){

    return inquirer.prompt([
        {

            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',

        },

        {

            type: 'input',
            name: 'description',
            message: 'Write a brief description of the project',

        },

        {

            type: 'input',
            name: 'installation',
            message: 'Describe how to install this application.',

        },

        {

            type: 'input',
            name: 'usage',
            message: 'Please describe how to use this application.',

        },

        {

            type: 'list',
            name: 'license',
            message: 'Select the appropriate license for this project.',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
                
            ]


        },

        {

            type: 'input',
            name: 'contributors',
            message: 'Please list the contributors of this project.',


        },

        {

            type: 'input',
            name: 'tests',
            message: 'Are there any tests associated with this project?',


        },

        {

            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username.',

        },

        {

            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',

        }


    ]);
}


init();
