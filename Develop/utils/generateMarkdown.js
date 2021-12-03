// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// checks the answer, contingent of the reponse, it returns a link that generates the associated badge
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](<https://img.shields.io/badge/License-MIT-yellow.svg>)`
  } else if (license === 'Apache 2.0') {
    return `![License: Apache 2.0](<https://img.shields.io/badge/License-Apache_2.0-blue.svg>)`
  } else if (license === 'BSD') {
    return `![License: BSD](<https://img.shields.io/badge/License-BSD_3--Clause-blue.svg>)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// creates a link depending on which answer is chosen, then returns it into the 'License Section' function.
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache 2.0') {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD') {
    return `[BSD (3-Clause) License](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return ``
  }

}

// TODO: Create a function that returns the license section of README
// renders the entire license section the with proper license heading.
// if the option "no license" is selected, an empty string is returned.
function renderLicenseSection(license) {
  if (license === 'No License') {
    return ``
  } else {
    return `# License
  ## ${license}
  This project is licensed under the ${renderLicenseLink(license)}.`
  }


}

function licenseTableOfContents(license) {
  if (license === 'No License') {
    return ``
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ${data.description}
  # Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${licenseTableOfContents(data.license)}
---
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contributing:
  ${data.contributing}
  ## Tests:
  ${data.tests}
  ## Questions:
  For any further assistance, you may contact me at:
  * Github: [${data.username}](<https://github.com/${data.username}>)
  OR
  * Email: ${data.email}
  ---
  ___
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;