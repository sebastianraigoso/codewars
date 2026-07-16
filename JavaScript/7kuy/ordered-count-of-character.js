// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. 
// For empty output return (an empty list).
// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(text) {
  const counts = new Map()

  for (let char of text) {
    if (counts.has(char)) {
      counts.set(char, counts.get(char) + 1)
    } else {
      counts.set(char, 1)
    }
  }

  return [...counts]
}

console.log(orderedCount("abaracadabra")) // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]