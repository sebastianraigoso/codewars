// We want to generate a function that computes the series starting from 0 and ending until the given number.

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {

    if (count < 0) return `${count}<0`
    if (count === 0) return "0=0"

    const numbers = [...Array(count + 1).keys()]
    const sum = numbers.reduce((acc, n) => acc + n, 0)

    return `${numbers.join("+")} = ${sum}`
  }

  return SequenceSum
})()