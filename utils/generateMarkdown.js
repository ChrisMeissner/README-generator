function createBadge(license){
  if(license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } 
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${createBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.tests}

## Questions
If you have any questions, contact ${data.email}
You can find more of my work at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;