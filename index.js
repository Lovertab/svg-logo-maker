const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",
            message: "enter three character:",
            name: "text",
        },
        {
            type: "input",
            message: "Enter a text color (it can be keyword or a hexadecimal number):",
            name:"color",
        }
    ])
    .then((response) => {
        console.log(response);
        console.log(`The three characters you enter are: ${response.text}!`);
        console.log(`The color you chose is: ${response.color}!`);
    }
    );