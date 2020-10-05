const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const promptUser = () => {
  return inquirer.prompt(questions)
};

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?'
  },
  {
    type: 'input',          
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Please provide a link to your repository.'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',          
    name: 'description',
    message: 'Please give a description of your project'
  },
  {
    type: 'list',          
    name: 'license',
    message: 'What type of license should your project have?',
    choices:['GNU', 'MIT', 'Apache', 'None']
  },
  {
    type: 'input',          
    name: 'installation',
    message: 'What is needed for installation?'
  },
  {
    type: 'input',          
    name: 'usage',
    message: 'What should the user know about using your repo?'
  },
  {
    type: 'input',          
    name: 'contributors',   
    message: 'Who has contributed to this repo?'
  }
] 


// function to write README file
function writeToFile (data) {
  return new fs.promises((resolve,reject) => {
    fs.writeFile('./responseREADME.md', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Click on responseREADME.md to view your new README file!'
      });
    });
  });
};

// function to initialize program
function init() {
  promptUser()
    .then(data => writeToFile(generateMarkdown(data)));
  }

// function call to initialize program
init();
