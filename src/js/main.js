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
        // if the current side does NOT includes "covered"
        if (!cubeSides[i].className.includes("covered"))
            switch(i) {
                // depending on the side orientation,
                // give it a particular backgroundColor
                case 0:
                    cubeSides[i].style.backgroundColor = "red"
                    break
                case 1:
                    cubeSides[i].style.backgroundColor = "blue"
                    break
                case 2:
                    cubeSides[i].style.backgroundColor = "green"
                    break
                case 3:
                    cubeSides[i].style.backgroundColor = "yellow"
                    break
                case 4:
                    cubeSides[i].style.backgroundColor = "orangered"
                    break
                case 5:
                    cubeSides[i].style.backgroundColor = "white"
                    break
            }
})
