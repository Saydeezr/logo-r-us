const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./library/shapes.js')
const { default: Choices } = require('inquirer/lib/objects/choices.js');

const entries = inquirer.prompt([{
    type: 'input',
    message: 'Type in up to 3 letters for your logo:',
    name:'letter'
}, {
    type: 'input',
    message: 'Type a color for the text on your logo:',
    name: 'text color'
}, {
    type: 'input',
    message: 'Type a background color for your logo:',
    name: 'background'
}, {
    type: 'list',
    message: 'Choose a shape for your logo:',
    choices: ['Circle', 'Square', 'Triangle'],
    name: 'shape'
}
])
.then((data) => {
    fs.writeFile('logo.svg', createLogo(data), (err) => {
        if (err) console.error(err)})
});