// Write a function that creates an anagram list, 
// listing all the rearrangements of a given word. 
// For example, if the user types "east", 
// the program should list all 24 permutations, 
// including "eats", "etas", "teas", and non-words like "tsae".

function getAllPermutations(string) {
    let results = [];
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let innerPermutations = getAllPermutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
  
  console.log(getAllPermutations('east'))