const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./generateLogo')
const { default: Choices } = require('inquirer/lib/objects/choices.js');

//prompts on CLI for user to input answers
const entries = inquirer.prompt([{
    type: 'input',
    message: 'Type in up to 3 letters for your logo:',
    name:'initials'
}, {
    type: 'input',
    message: 'Type a color for the text on your logo:',
    name: 'textColor'
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
])  //after entries are filled, do the work to get back the logo
.then((data) => {
    const svgContent = createLogo(data)
    const filePath = './library/shapes.js'
    fs.writeFile(filePath, 'logo.svg', svgContent, (err) => {
        if (err) console.error(err);
        else console.log('logo created successfuly');
  })
});