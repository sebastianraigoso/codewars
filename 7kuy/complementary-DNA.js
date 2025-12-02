// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA; you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all.

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
    let complementary = ''
    for(let i = 0; i < dna.length; i++) {
        if(dna[i] === 'A') {
            complementary += 'T'
        }else if(dna[i] === 'T') {
            complementary += 'A'
        }else if(dna[i] === 'G') {
            complementary += 'C'
        }else if(dna[i] === 'C') {
            complementary += 'G'
        }
    }
    return complementary
}

console.log(dnaStrand("AAAA")) // "TTTT"
console.log(dnaStrand("ATTGC")) // "TAACG"
console.log(dnaStrand("GTAT")) // "CATA"