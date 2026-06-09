// Some people just have a first name; 
// some people have first and last names and 
// some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
  const sName = name.split(' ')
  return sName.length <= 2 ? sName.join(' ') 
                            : `${sName[0]} ${sName.slice(1, -1).map(n => n[0].toUpperCase() + '.').join(' ')} ${sName[sName.length-1]}`
}

console.log(initializeNames('Dimitri')) // 'Dimitri'
console.log(initializeNames('Jack Ryan')) // 'Jack Ryan'
console.log(initializeNames('Lois Mary Lane')) // 'Lois M. Lane'
console.log(initializeNames('Alice Betty Catherine Davis')) // 'Alice B. C. Davis'