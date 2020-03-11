// What is the input to the program? 0, 3, 25
// What is the output of the program? 0, 11, 11001
// What is the input to each recursive call?
// What is the output of each recursive call?

// Write a recursive function that prints out the binary representation of a given number. 
// For example, the program should take 3 as an input and print 11 as output, 
// or 25 as an input and print 11001 as an output. 
// Note that the binary representation of 0 should be 0.

function binaryRep(num) {
    if (num > 0) {
      let binary = Math.floor(num % 2);
      return binaryRep(Math.floor(num / 2)) + binary;
    } else {
      return '';
    }
  }
  
  console.log(binaryRep(25))
