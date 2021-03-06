// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number 
// by each number between itself and 1. 
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function findfactorial(number) {
    // base case
    if (number === 2) {
        return 2
    }
    // recursive case
    return number * findfactorial(number - 1) // get closer until number === 2
}

console.log(findfactorial(5))