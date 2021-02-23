// Constants
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utilities/generateReadMe');
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
            name: ''
        }
    ])
}


