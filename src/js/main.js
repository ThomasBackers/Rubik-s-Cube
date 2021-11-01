// get the Rubik's cube HTML element
const rubiksCube = document.querySelector(".rubik-s-cube")
// store all the cubes inside it into a const
const cubes = rubiksCube.children
// create a list which will contain all cubes as arrays of sides
// instead of simple HTML elements
const cubesSides = []
// for each cube
for (let cube of cubes) {
    // create an array to store its sides
    const sidesArray = []
    // loop through each side
    // and push each side inside the sides array
    for (let side of cube.children) sidesArray.push(side)
    // then we push this sides array inside the cubesSides array
    cubesSides.push(sidesArray)
}
// now cubeSides contains 27 arrays
// each array represents a cube and contains
// the all 6 sides of that cube in the following order:
// front, back, left, right, top and bottom
// -----------------------------------------------------
// and the cubes are contained in the following 
// order inside cubeSides:
//  Y    X    Z   | Y   X     Z    |  Y   X    Z  
// top left front, top left between, top left back,
// top center front, top center between, top center back,
// top right front, top right between, top right back,
// center left front, center left between, center left back,
// etc 
