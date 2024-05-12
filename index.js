const inquirer = require("inquirer");
const jest = require('jest');
const fs = require('fs');
const Shapes = require('./lib/shapes')

class Triangle extends Shape {
    constructor(height, width, fill, stroke, strokeWidth) {
        super(height, width, fill, stroke, strokeWidth);
    }

    render() {
        return `
            <svg height="${this.height}" width="${this.width}" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 150,190 50,190" style="fill:${this.fill};stroke:${this.stroke};stroke-width:${this.strokeWidth}" />
            </svg>
        `;
    }
}
class Square extends Shape {
    constructor(height, width, fill, stroke, strokeWidth) {
        super(height, width, fill, stroke, strokeWidth);
    }

    render() {
        return `
            <svg height="${this.height}" width="${this.width}" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" style="fill:${this.fill};stroke:${this.stroke};stroke-width:${this.strokeWidth}" />
            </svg>
        `;
    }
}
class Circle extends Shape {
    constructor(height, width, fill, stroke, strokeWidth) {
        super(height, width, fill, stroke, strokeWidth);
    }

    render() {
        return `
            <svg height="${this.height}" width="${this.width}" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" fill="${this.fill}" />
            </svg>
        `;
    }
}
class Star extends Shape {
    constructor(height, width, fill, stroke, strokeWidth) {
        super(height, width, fill, stroke, strokeWidth);
    }

    render() {
        return `
            <svg height="${this.height}" width="${this.width}" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:${this.fill};stroke:${this.stroke};stroke-width:${this.strokeWidth}" />
            </svg>
        `;
    }
}


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
            name: "color",
        },
        {
            type: "list",
            message: "What shape do you want?",
            name: "shapes",
            choices: ["circle", "triangle", "square", "star"],
        }
    ])
    .then((response) => {
        console.log(response);
        console.log(`The three characters you enter are: ${response.text}!`);
        console.log(`The color you chose is: ${response.color}!`);
        console.log(`The shape you chose is: ${response.shapes}!`);
        const circle = `
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="red" />
        </svg>`;
        const triangle = `
        <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 150,190 50,190" style="fill:lime;stroke:purple;stroke-width:3" />
        </svg>`;
        const square = `
        <svg height="280" width="360" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,15 258,77 258,202 150,265 42,202 42,77"
        style="fill:lime;stroke:purple;stroke-width:3" />
        </svg>`;
        const star = `
        <svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 40,198 190,78 10,78 160,198"
        style="fill:lime;stroke:purple;stroke-width:5;" />
        </svg>`;
        fs.writeFile('shape.svg', shape, err => {
            if (err) throw err
            console.log('created shape')
        })
    }
    );