// Notice that this maze has 3 exits paths. 
// Your recursive function should print all three of the paths with the proper directions.
// For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

// function findAllExits(row, column, solution, allSolutions) {
//     let maze = [
//         [' ', ' ', ' '],
//         [' ', '*', ' '],
//         [' ', ' ', 'e']
//         ];
    
//     solution = solution.slice(0)
//     allSolutions.slice(0)

//     if (column < 0 || column > (maze[0].length -1) || row < 0 || row > (maze.length - 1)) return false; 

//     if (maze[row][column]=== '*') return false; 
        
//         let merged = [].concat.apply([], maze);
//         if (!merged.includes(' ')) {
//             console.log(maze)
//             console.log('end')
//             console.log(allSolutions)
//             return true
//         }

//     if (maze[row][column] === 'e'){
//         solution.join('')
//         console.log('solution', solution)
//         console.log('all', [...allSolutions, solution.join('')])
//         findAllExits(0, 0, [], [...allSolutions, solution.join('')])
//         //return true
//     }

//     if(maze[row][column] === '!')
//     return false;


//     maze[row][column] = '!';
    
//     console.log(row, column)
   
//     if(findAllExits(row+1, column, [...solution, 'D'], allSolutions)) {
//                 console.log('if D') 
//                 return true
//         }  
//         if(findAllExits(row, column+1, [...solution, 'R'], allSolutions)) {
//                 console.log('if R') 
//                 return true
//         }  
//         if(findAllExits(row, column-1, [...solution, 'L'], allSolutions)) {
//                 console.log('if L') 
//                 return true
//         }
//         if(findAllExits(row-1, column, [...solution, 'U'], allSolutions)) {
//                 console.log('if U') 
//                 return true
//         }

//     maze[row][column] = '$'                   

//     console.log('false')
//     return false;
// };

// findAllExits(0, 0, [], []);