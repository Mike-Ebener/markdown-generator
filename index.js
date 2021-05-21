


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./src/page-template');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];

/*inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Readme
  =================
  `);*/
  
    // If there's no 'projects' array property, create one
   // if (!portfolioData.projects) {
    //  portfolioData.projects = [];
   // }
//end added code
   
//const promptUser = () => 
const promptUser = portfolioData =>
{
    
return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please provide the title of your Project (Required)?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a decription of your project',
       // validate: descriptionInput => {
         // if (descriptionInput) {
        //    return true;
        //  } else {
       //     console.log('Please enter your project description!');
       //     return false;
        //  }
      //  }
      },
      {
        type: 'input',
        name: 'contents',
        message: 'Provide table of contents:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation steps and details:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their Github profiles:'
      },
      {
        type: 'input',
        name: 'license',
        message: 'Provide details of licensing for other developers:'
      },
      {
        type: 'input',
        name: 'badges',
        message: 'Include any badges associated with this project:'
      },
      {
        type: 'input',
        name: 'features',
        message: 'Provide a list of your features:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Add details of how others can contribute:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide examples about tests and how to to run them:'
      },
    ])
    .then(portfolioData => {
        console.log(portfolioData);
        return portfolioData;
        //projectData.push(portfolioData);
      });
};
    promptUser()
      .then(portfolioData => {
       console.log(portfolioData);
       
        const pageMD = generateMarkdown(portfolioData);
        fs.writeFile('./dist/README.md', pageMD, err => {
          if (err) throw new Error(err);
         console.log('Page created! Check out README.md in the dist directory to see it!');
        });
    });
    
    
    /*.then(projectData => {
       portfolioData.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
      console.log(portfolioData) */
  

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init(promptProject);
