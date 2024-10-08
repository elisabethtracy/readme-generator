// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'mit':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'gpl 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'bsd 3-clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  };
  if (!license) {
    return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'mit':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'gpl 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'bsd 3-clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
  };
  if (!license) {
    return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  if (!license) {
    return '';
  } else {
    return `${badge}\n${link}`;
  };
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n 
## Description\n ${data.description}\n 
## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [License](#license)\n
  - [Questions](#questions)\n 
## Installation\n ${data.installation}\n 
## Usage\n ${data.usage}\n 
## Contributing\n ${data.contributing}\n
## Tests\n ${data.tests}\n
## License\n ${renderLicenseSection(data.license)}\n
## Questions\n
  If you have any questions, please contact me at [${data.email}](mailto:${data.email}).\n
  Github: [${data.github}](https://github.com/${data.github})`;
};
export default generateMarkdown;

