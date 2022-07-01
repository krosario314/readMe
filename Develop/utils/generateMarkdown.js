// generate markdown readme function
function generateMarkdown(data) {
  return `
  # Project title
  ${data.title}
  # Description
  ${data.description}
  # Table of Contents
  *
  # Installation
  ${data.title}
  # Usage
  ${data.title}
  # Contributors
  ${data.title}
  # Contact
  ${data.title}
  # License
  ${data.title}
  # Report
  ${data.title}
  # GitHub
  ${data.title}
`;
}

module.exports = generateMarkdown;
