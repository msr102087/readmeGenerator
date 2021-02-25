function generateReadMe(response) {

    return `
# ${response.title}


${licenseBadge(response.license)}

## Project Description 

${response.description}

## Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributors](#contributors)
-[Tests](#tests)
- [Questions](#questions)
    
    


## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Project Contributors

${response.contributors}

## Tests

${response.tests}

## Questions

If you have any questions or comments regarding this project.  Please contact ${response.username} at ${response.email}

`

    
    
}

function licenseBadge (license) {

    return `![github license](https://img.shields.io/badge/License-${license}-yellowgreen.svg)`
}

module.exports = generateReadMe