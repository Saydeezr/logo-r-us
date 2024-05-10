const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./generateLogo')
const { default: Choices } = require('inquirer/lib/objects/choices.js');
const util = require('util')
const promiseFs = util.promisify(fs.writeFile)

async function init() {
    try {
        const data = await inquirer.prompt([{
            type: 'input',
            message: 'Type in up to 3 letters for your logo:',
            name: 'initials'
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
        ])
    } catch (error) {
        console.error(error)
    }


    const svgContent = createLogo(data)
    const filePath = './library/logo.svg'

    try {
        await promiseFs(filePath, svgContent)
    } catch (error) {
        console.error(error)
    }
}
//prompts on CLI for user to input answers
// const entries = inquirer.prompt([{
//     type: 'input',
//     message: 'Type in up to 3 letters for your logo:',
//     name:'initials'
// }, {
//     type: 'input',
//     message: 'Type a color for the text on your logo:',
//     name: 'textColor'
// }, {
//     type: 'input',
//     message: 'Type a background color for your logo:',
//     name: 'background'
// }, {
//     type: 'list',
//     message: 'Choose a shape for your logo:',
//     choices: ['Circle', 'Square', 'Triangle'],
//     name: 'shape'
// }
// ])  //after entries are filled, do the work to get back the logo
// .then(async(data) => {
//     const svgContent = createLogo(data)
//     const filePath = './library/logo.svg'
//     fs.writeFile(filePath, svgContent, (err) => {
//         if (err) console.error(err);
//         else console.log('logo created successfuly');
//   })

//    try {
//     await promiseFs(filePath, svgContent)
//    } catch (error) {
//     console.error(error)
//    }
// });

init();