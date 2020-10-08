const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your Github username!');
        return false;
      }
    }
  },
  {
    type: 'input',          
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email adress!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please a title for your project!');
        return false;
      }
    }
  },
  {
    type: 'input',          
    name: 'description',
    message: 'Please give a description of your project',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    }
  },
  {
    type: 'list',          
    name: 'license',
    message: 'What type of license does your project have?',
    choices:['ISC', 'GNU', 'MIT', 'Apache', 'None'],
  },
  {
    type: 'input',          
    name: 'installation',
    message: 'How do you install the README generator?',
    default: "npm i"
  },
  {
    type: 'input',          
    name: 'usage',
    message: 'What should the user know about using your program?'
  },
  {
    type: 'input',          
    name: 'contributors',   
    message: 'Who has contributed to this repo?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What do you use for tests?',
    default: 'npm test'
  },
] 


// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, function(err){
    if (err) throw err
    console.log("finished")
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(data => {
    console.log("generating README");
    writeToFile("README.md", generateMarkdown(data));
  }) 
} 

// function call to initialize program
init();
