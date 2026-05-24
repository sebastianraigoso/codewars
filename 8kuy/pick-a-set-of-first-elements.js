// Write a function to get the first element(s) of a sequence.
// Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n = 1) {
  if(n === 0) return []

  let sequence = []
  for(let i = 0; i < Math.max(n, arr.length); i++) {
    sequence.push(arr[i])
  }
  return sequence
}

const arr = ["a", "b", "c", "d", "e"]
console.log(first([...arr]   )) //      ['a'])
console.log(first([...arr], 2)) // ['a', 'b'])