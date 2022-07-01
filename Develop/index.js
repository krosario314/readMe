// added applications
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const {prompt} = require("inquirer");

// questions array
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your project."
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is your project used?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please name any contributons to your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email associated with your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the license of your project?",
        choices: ["MIT", "Apache 2.0", "BSD 3.0", "none", "other"]
    },
    {
        type: "input",
        name: "report",
        message: "How can I report any errors?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any test instructions?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username."
    },
];

// write readme function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, "/example/", fileName), data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();