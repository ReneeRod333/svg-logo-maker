const { Triangle, Circle, Square } = require("./shapes");

test("properly returns svg file for triangle", () => {
    const shape = new Triangle("blue", "RMR", "white");
    const expectedShape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon height="100%" width="100%" fill="blue" points="0,200 300,200 150,0" /><text x="150" y="150" font-size="70" text-anchor="middle" fill="white">RMR</text></svg>';
    expect(shape.render()).toEqual(expectedShape)
})

test("properly returns svg file for circle", () => {
    const shape = new Circle("blue", "RMR", "white");
    const expectedShape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle height="100%" width="100%" fill="blue" cx="50%" cy="50%" r="100" /><text x="150" y="120" font-size="70" text-anchor="middle" fill="white">RMR</text></svg>';
    expect(shape.render()).toEqual(expectedShape)
})

test("properly returns svg file for square", () => {
    const shape = new Square("blue", "RMR", "white");
    const expectedShape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" height="200" width="200" fill="blue" /><text x="150" y="120" font-size="70" text-anchor="middle" fill="white">RMR</text></svg>';
    expect(shape.render()).toEqual(expectedShape)
})