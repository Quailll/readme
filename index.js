// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
 
const questions = [
  {
    type: "input",
    message: "What is your title of github project?",
    name: "title"
  },
  {
    type: "input",
    message: "The description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Installation instruction for the project?",
    name: "installation"
  },
  {
    type: "input",
    message: "Usage instruction for your project?",
    name: "usage"
  },
  {
    type: "list",
    message: "What is the license of your project",
    name: "license",
    choices: [
      "Academic Free License v3.0",
      "Eclipse Public License 2.0",
      "MIT",
      "Open Software License 3.0",
      "The Unlicense",
    ]
  },
  {
    type: "input",
    message: "Things you need to know to contribute to project",
    name: "contributing"
  },
  {
    type: "input",
    message: "How do you test project",
    name: "test"
  },
  {
    type: "input",
    message: "What is your email or github profile",
    name: "question"
  },
]



inquirer.prompt(questions).then((answers) => {
  const newReadMe = generateMarkdown(answers);

  fs.writeFile("newReadMe.md", newReadMe, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
});
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
