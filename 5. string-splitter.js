// Write a recursive function that splits a string 
// based on a separator (similar to String.prototype.split). 
// Don't use JS array's split function to solve this problem.

// try
// indexOf() method returns the first index at which 
// a given element can be found in the array, or -1 if it is not present.
// slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

function stringSplitter(string, splitter) {
     // base case
     if (string.indexOf(splitter) === -1) {
        return [string.slice(0, string.length)]
    }
    // recursive case
    return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitter('02/20/2020', '/'))
