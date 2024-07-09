const inquirer = require('inquirer');

function getLicenseNotice(license) {
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the MIT License.';
    case 'Apache 2.0':
      return 'This project is licensed under the Apache License 2.0.';
    case 'GPL 3.0':
      return 'This project is licensed under the GNU General Public License v3.0.';
    case 'BSD 3-Clause':
      return 'This project is licensed under the BSD 3-Clause "New" or "Revised" License.';
    default:
      return '';
  }
}

inquirer.prompt([
  { type: 'input', message: 'What is the project title?', name: 'title' },
  { type: 'input', message: 'What is the license?', name: 'license' },
  { type: 'input', message: 'Enter a description', name: 'description' },
  { type: 'input', message: 'Enter the installation instructions', name: 'install' },
  { type: 'input', message: 'Enter the usage information', name: 'usage' },
  { type: 'input', message: 'Enter contribution guidelines', name: 'contribution' },
  { type: 'input', message: 'Enter the test instructions', name: 'test' },
  { type: 'input', message: 'Enter your GitHub username', name: 'github' },
  { type: 'input', message: 'Enter your email', name: 'email' },
])
  .then((response) => {
    console.log(`
# ${response.title}

## License
[![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-brightgreen)](https://opensource.org/licenses/${response.license})

${getLicenseNotice(response.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Description
${response.description}

## Installation
${response.install}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Testing
${response.test}

## Questions
Here is my [GitHub account](https://github.com/${response.github}).

Email me with any questions: [${response.email}](mailto:${response.email})
`);
  });