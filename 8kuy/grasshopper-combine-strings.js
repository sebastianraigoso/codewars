// Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name).
// The function should return the full name.

// Example:
// With "James" as the first name and "Stevens" as the last name should return "James Stevens"

function combineNames(first, last) {
    return first + " " + last
}

const combineNames = (...names) => {
    return names.join(' ')
}