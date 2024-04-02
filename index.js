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
        },
        {
            type: "list",
            message: "What shape do you want?",
            name: "shapes",
            choices: ["circle","triangle","square","star"],
        }
    ])
    .then((response) => {
        console.log(response);
        console.log(`The three characters you enter are: ${response.text}!`);
        console.log(`The color you chose is: ${response.color}!`);
        console.log(`The shape you chose is: ${response.shapes}!`);
    }
    );