//module.exports = (title, description, contents, installation, usage, 
 //   credits, license, badges, features, contributing, tests) => {
   
    module.exports = templateData => {
        // destructure page data by section
        const { title, description, contents, installation, usage, 
              credits, license, badges, features, contributing, tests } = templateData;
 
 return `
# Your Project Title: ${title}

## Description: ${description}

## Table of Contents (Optional): ${contents}

## Installation: ${installation}

## Usage: ${usage}

## Credits: ${credits}

## License: ${license}

## Badges: ${badges}

## Features: ${features}

## Contributing: ${contributing}

## Tests: ${tests}


    `;
  };