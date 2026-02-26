// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Solution 1
function remove(s,n) {
    for(let i = 0; i < n; i++) {
        s = s.replace('!', '')
    }
    return s
}

// Solution 2
function remove(s,n) {
    return n > 0 ? remove(s.replace('!', ''), n-1) : s
}

console.log(remove("Hi!",1)) // "Hi"
console.log(remove("Hi!",100)) // "Hi"
console.log(remove("Hi!!!",1)) // "Hi!!"
console.log(remove("Hi!!!",100)) // "Hi"
console.log(remove("!Hi",1)) // "Hi"
console.log(remove("!Hi!",1)) // "Hi!"
console.log(remove("!Hi!",100)) // "Hi"
console.log(remove("!!!Hi !!hi!!! !hi",1)) // "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",3)) // "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",5)) // "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",100)) // "Hi hi hi"