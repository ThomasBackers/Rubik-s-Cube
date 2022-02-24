// Palette
let bordersColor = "#000",
    coveredSidesClr = "#000",
    sidesColor1 = "#495867",
    sidesColor2 = "#577399",
    sidesColor3 = "#BDD5EA",
    sidesColor4 = "#F7F7FF",
    sidesColor5 = "#FE5F55",
    sidesColor6 = "#BC170F",
// Sizing
    cubesWidth = 60, //px
    cubesHeight = 60, //px
    cubesDepth = 60, //px
    bordersWidth = 4, //px
// Positioning
    transformCoeff = -0.5,
    sidesRotationAngle = 90 //deg

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
// front, back, right, left, top and bottom
// ------------------------------------------------------------
// cubes are encountered in the following order in cubesSides:
//   Z    Y    X
// front top right,    middle top right,    back top right,
// front top center,   middle top center,   back top center,
// front top left,     middle top left,     back top left,
// front center right, middle center right, back center right,
// etc.
// ---- BEWARE: orientations are valid depending on the current Rubik's cube CSS orientation only ----

// for each cube (represented by its sides array) in cubesSides 
cubesSides.forEach(cubeSides => {
    // we want to loop through the sides
    // but we'll need the index so:
    for (let i = 0; i < 6; i++)
        // if the current side does NOT include "covered"
        if (!cubeSides[i].className.includes("covered"))
            switch(i) {
                // depending on the side orientation,
                // give it a particular backgroundColor
                case 0:
                    cubeSides[i].style.backgroundColor = sidesColor1
                    break
                case 1:
                    cubeSides[i].style.backgroundColor = sidesColor2
                    break
                case 2:
                    cubeSides[i].style.backgroundColor = sidesColor3
                    break
                case 3:
                    cubeSides[i].style.backgroundColor = sidesColor4
                    break
                case 4:
                    cubeSides[i].style.backgroundColor = sidesColor5
                    break
                case 5:
                    cubeSides[i].style.backgroundColor = sidesColor6
                    break
            }
})



class Cube {
    constructor(HTMLElement) {
        this.HTMLElement = HTMLElement
        this.sides = [...HTMLElement.children]
        this.coordinates = [,,]
    }
    setSidesColor(
        color1 = bordersColor,
        color2 = sidesColor1,
        color3 = sidesColor2,
        color4 = sidesColor3,
        color5 = sidesColor4,
        color6 = sidesColor5,
        color7 = sidesColor6,
        color8 = coveredSidesClr
    ) {
        for (let i = 0; i < 6; i++) {
            if (!this.sides[i].className.includes("covered")) {
                this.sides[i].style.border = `4px solid ${color1}`
                switch(i) {
                    case 0:
                        this.sides[i].style.backgroundColor = color2
                        break
                    case 1:
                        this.sides[i].style.backgroundColor = color3
                        break
                    case 2:
                        this.sides[i].style.backgroundColor = color4
                        break
                    case 3:
                        this.sides[i].style.backgroundColor = color5
                        break
                    case 4:
                        this.sides[i].style.backgroundColor = color6
                        break
                    case 5:
                        this.sides[i].style.backgroundColor = color7
                        break
                }
            } else this.sides[i].style.backgroundColor = color8
        }
    }
}

cubes[0].style.transform = `translate3d(0, 0, -60px)`
console.log(cubes[0].style.transform)
