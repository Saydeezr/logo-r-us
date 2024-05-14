const createLogo = (data) => {
   
   //  const { initials, textColor, background, shape } = data;

    //implement user's initials + text color
    const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>`

    //imlement user's shape + background color
    let shapeElement;
        if (shape === 'Circle'){
           shapeElement =`<circle fill="${background}" cx="150" cy="100" r="80"/>`
        } else if (shape === 'Square'){
           shapeElement =`<rect fill="${background}" x="50" y="15" height="200" width="200"/>`
        } else {
           shapeElement =`<polygon fill="${background}" height='100%' width='100%' points="0,200 300,200 150,0"/>`
        }
 
    //take both elements and formulate the logo
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement}
    ${textElement}
    </svg>`;

    return svgContent;
}



module.exports = createLogo;