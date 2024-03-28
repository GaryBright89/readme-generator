// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPL-3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)',
    'Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  };

  if (licenseBadges.hasOwnProperty(license)) {
    return licenseBadges[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'Mozilla':'https://www.mozilla.org/en-US/MPL/2.0/',
    'Unlicense': 'https://unlicense.org/'
  }
  if (licenseLinks.hasOwnProperty(license)) {
    return licenseLinks[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);

  if (licenseLink && licenseBadge) {
    return ` License
${licenseBadge}

This project is licensed under the ${license} license - see the [LICENSE.txt](${licenseLink}) file for details.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license)
  return `# ${data.title}
## Description
          ### ${data.description}
## Table of Contents
          1. [Description](#description)
          2. [Installation](#installation)
          3. [Usage](#usage)
          4. [Contribution](#contribution)
          5. [Tests](#tests)
          6. [Questions](#questions)
          7. [Github](#github)
          8. [License](#license)
## Installation
          ### ${data.installation}
## Usage
          ### ${data.usage}
## Contribution
          ### ${data.contributing}
## Tests
          ### ${data.tests}
## Questions
          ### For any questions, please reach out to  ${data.email}.
## GitHub
          ### Feel free to visit my GitHub! ${data.github}
## License
          ### ${license}

`;
}

module.exports = generateMarkdown;
