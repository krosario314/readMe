// generate markdown readme function
function generateMarkdown(data) {
  return `
  # Project title
  ${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [Contributing](#-Contributing)
  * [Contact](#-Contact-Information
  * [License](#-Installation)
  * [Tests](#-Tests)
  * [Report](#-)

  # Installation
  ${data.install}

  # Usage
  ${data.usage}

  # Contributors
  ${data.contributors}

  # License
  ${data.license}
  
  # Tests
  ${data.tests}

  # Report
  ${data.report}

  # Contact
  * GitHub: ${data.username}
  * Email: ${data.email}
`;
}
// export function
module.exports = generateMarkdown;
