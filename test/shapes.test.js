// const Triangle = require('./triangle');
// const Circle = require('./circle');
// const Square = require('./square');
// const Star = require('./star');
const Shapes= require('../lib/shape')

describe('Triangle Class', () => {
    test('Triangle render method should generate correct SVG code', () => {
        const triangle = new Triangle(220, 500, 'lime', 'purple', 3);
        const expectedSVG = `
            <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 150,190 50,190" style="fill:lime;stroke:purple;stroke-width:3" />
            </svg>
        `;
        expect(triangle.render()).toEqual(expectedSVG);
    });
    });

describe('Circle Class', () => {
    test('Circle render method should generate correct SVG code', () => {
        const circle = new Circle(100, 100, 'red');
        const expectedSVG = `
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" fill="red" />
            </svg>
        `;
        expect(circle.render()).toEqual(expectedSVG);
    });
});
describe('Square Class', () => {
    test('Square render method should generate correct SVG code', () => {
        const square = new Square(280, 360, 'lime', 'purple', 3);
        const expectedSVG = `
            <svg height="280" width="360" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" style="fill:lime;stroke:purple;stroke-width:3" />
            </svg>
        `;
        expect(square.render()).toEqual(expectedSVG);
    });
});

describe('Star Class', () => {
    test('Star render method should generate correct SVG code', () => {
        const star = new Star(210, 500, 'lime', 'purple', 5);
        const expectedSVG = `
            <svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5" />
            </svg>
        `;
        expect(star.render()).toEqual(expectedSVG);
    });
});
