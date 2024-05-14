class Svg {
   constructor(){
   this.shapeElement = ''
   this.textElement = ''
}

render(){
   return `
   <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>
   ${this.shapeElement}
   ${this.textElement}
   </svg>`
}

setShapeElement(shape){
   this.shapeElement = shape.render()
}

setTextElement(textColor,initials){
   this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>`
  }
}
  
module.exports = Svg;  
  
