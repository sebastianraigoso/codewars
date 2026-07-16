// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.
// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).
// For example, given width = 3 and height = 3:

// ***
// * *
// ***

// End each line of the string (including the last one) with a carriage return-line feed combination.
// Note: You may assume that width and height will always be greater than zero.

function getRectangleString(width, height) {
    let rectangle = ''
    
    for(let i = 1; i <= height; i++) {
        if(i === 1 || i === height) {
            rectangle += '*'.repeat(width) + '\r\n'
        } else {
            rectangle += '*' + ' '.repeat(width - 2) + '*' + '\r\n'
        }
    }
    return rectangle
}


console.log(getRectangleString(1, 1))
console.log(getRectangleString(1, 2))
console.log(getRectangleString(2, 2))
console.log(getRectangleString(3, 3))
console.log(getRectangleString(5, 7))