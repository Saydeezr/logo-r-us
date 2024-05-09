const createLogo = (data) => {
    const { initials, textColor, background, shape } = data;

    //implement user's initials + text color
    const textElement = `<text x="50" y="50" fill="${textColor}">${initials}</text>`

    //imlement user's shape + background color
    let shapeElement;
        if (shape === circle){
            <circle fill="${background}" cx="150" cy="100" r="80"/>
        } else if (shape === rectangle){
            <rect fill="${background}" x="100" y="100" height="50" width="50"/>
        } else {
            <polygon points="250,60 100,400 400,400"/>
        }
 

    const svgContent = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    ${textElement}
    ${shapeElement}
    </svg>`
}



module.exports = createLogo;