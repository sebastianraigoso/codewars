// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    let newOrder = ''
    const aLower = 'abcdefghijklmnopqrstuvwxyz'
    const aUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for(let i = 0; i < message.length; i++) {
        if(aLower.includes(message[i])) {
            if(aLower.indexOf(message[i]) + 13 >= 26) {
                newOrder += aLower[aLower.indexOf(message[i])+13-26]
            } else {
               newOrder += aLower[aLower.indexOf(message[i])+13]
            }

        } else if(aUpper.includes(message[i])) {
            if(aUpper.indexOf(message[i]) + 13 >= 26) {
                newOrder += aUpper[aUpper.indexOf(message[i])+13-26]
            } else {
               newOrder += aUpper[aUpper.indexOf(message[i])+13]
            }

        } else {
            newOrder += message[i]
        }
        
    }
    return newOrder
}

console.log(rot13("Test")) // Grfg