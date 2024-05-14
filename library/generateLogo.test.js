//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {
    test('if a circle shape is rendered', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(`<circle fill="blue" cx="150" cy="100" r="80"/>`);
    });
});

describe('Square', () => {
  test('if a square shape is rendered', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<rect fill="blue" x="50" y="15" height="200" width="200"/>`);
  });
});

describe('Triangle', () => {
  test('if a triangle shape is rendered', () => {
    const shape = new Triangle();
    shape.setColor("blue")
    expect(shape.render()).toEqual(`<polygon fill="blue" height='100%' width='100%' points="0,200 300,200 150,0"/>`)
  })
})
