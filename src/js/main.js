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

// Let's hide useless sides to avoid display bugs
// and assign a color to the others

for (let cubeIndex = 0; cubeIndex < 27; cubeIndex++) {
    switch(cubeIndex) {
        case 0:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 1:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 2:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 3:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 4:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 5:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 6:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 7:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 8:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    case 4:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "green"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 9:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 10:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 11:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 12:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 13:
            for(let side of cubesSides[cubeIndex]) 
                side.style.display = "none"
            break
        case 14:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 15:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 16:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 17:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 18:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 19:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 20:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 2:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "blue";
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 21:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 22:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 23:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 24:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 0:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "red";
                        break
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 25:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
        case 26:
            for (let sideIndex = 0; sideIndex < 6; sideIndex++)
                switch (sideIndex) {
                    case 1:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "yellow"
                        break
                    case 3:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "white"
                        break
                    case 5:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "orange"
                        break
                    default:
                        cubesSides[cubeIndex][sideIndex].style.backgroundColor = "black"
                }
            break
    }
}   
