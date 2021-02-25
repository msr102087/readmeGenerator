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
            name: 'installation',
            message: 'Describe how to install this application.',

        },

        {

            type: 'input',
            name: 'usage',
            message: 'Please describe how to use this application.',

        },

        {

            type: 'input',
            name: 'license',
            message: 'Please provide the license for the project.',
    

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


// Async Function
async function init() {
    try {

    // Generate User Answers
    const response = await promptUser();
    const userContent = generateReadMe(response);

    // Function to generate input content to README

    await writeFileAsync('./dist/README.md', userContent);
    console.log ('User Input Successfully wrote to README.md');

    }

    catch(error) {

        console.log(error);
    }


}

init();
