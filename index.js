const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",
            message: "enter three character:",
            name: "text",
        }
    ])
    .then((response) => {
        console.log(response);
        console.log(`The three characters you enter are: ${response.text}!`);
    }
    );