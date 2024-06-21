class Shape {
    constructor(color, text, textColor) {
        this.height = 200;
        this.width = 300;
        this.color = color;
        this.text = text.substring(0, 3);
        this.textColor = textColor;
    }
    render() {
        throw new Error("Implement this method")
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
        <polygon height="100%" width="100%" fill="${this.color}" points="0,200 300,200 150,0">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Circle extends Shape {
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
        <circle height="100%" width="100%" fill="${this.color}" cx="50%" cy="50%" r="100">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
        <rect x="50" height="200" width="200" fill="${this.color}">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = {Triangle, Circle, Square}