//module.exports = (title, description, contents, installation, usage, 
 //   credits, license, badges, features, contributing, tests) => {
   
    module.exports = templateData => {
        // destructure page data by section
        const { title, description, contents, installation, usage, 
              credits, license, badges, features, contributing, tests, github, email } = templateData;
 
 return `
# Readme Title: 
${title}

## Description: 
${description}

## Table of Contents (Optional): 
${contents}

## Installation: 
${installation}

## Usage: 
${usage}

## Credits: 
${credits}

## License: 
${license}

## Badges: 
${badges}

## Features: 
${features}

## Contributing: 
${contributing}

## Tests: 
${tests}

## Questions?
Checkout my GitHub profile here: https://github.com/${github}
If you have any questions kindly reach out to me at ${email}

    `;
  };