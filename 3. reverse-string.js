// Write a function that reverses a string. 
// Take a string as input, reverse the string, 
// and return the new string. 

function reverseString(string) {
    //base case
    if (string === '') {
        return ''
    }
    //recursive case
    const newChar = string[0]
    return reverseString(string.slice(1)) + newChar
}

console.log(reverseString('grace'))