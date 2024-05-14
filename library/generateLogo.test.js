//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const createLogo = require('./generateLogo.js');

describe('createLogo', () => {
    test('if creates a logo with a circle shape', () => {
      const entryData = {
        initials: 'ABC',
        textColor: 'white',
        background: 'black',
        shape: 'Circle'
      };
      const expectedCircle = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle fill="black" cx="150" cy="100" r="80"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
      </svg>`;
      expect(createLogo(entryData)).toEqual(expectedCircle.trim());
    });
})