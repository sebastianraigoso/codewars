// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram


// Solution 1
const isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    let testList = {}
    let originalList = {}

    for(let characters in test) {
        if(testList.hasOwnProperty(test[characters])) {
            testList[test[characters]] += 1
        } else {
            testList[test[characters]] = 1
        }
    }

    for(let characters in original) {
        if(originalList.hasOwnProperty(original[characters])) {
            originalList[original[characters]] += 1
        } else {
            originalList[original[characters]] = 1
        }
    }

    return test.length === original.length &&
        Object.keys(testList).length === Object.keys(originalList).length &&
        Object.keys(testList).every(
            key => testList[key] === originalList[key]
    )
}

// Solution 2
function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
}


console.log(isAnagram("foefet", "toffee")) // true
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true
console.log(isAnagram("dumble", "bumble")) // false
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false
