class Shape {
    constructor(){
        this.background ='';
    }
    setColor(background) {
        this.background = (background);
    }
}

class Circle extends Shape{
    render(){
        return `<circle fill="${background}" cx="150" cy="100" r="80"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect fill="${background}" x="50" y="15" height="200" width="200"/>`
    }
}

class Triangle extends Shape{ 
    render(){
        return `<polygon fill="${background}" height='100%' width='100%' points="0,200 300,200 150,0"/>`
    }
}
module.export = { Circle, Square, Triangle }