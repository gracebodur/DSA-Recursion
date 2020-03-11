// You have entered a Maze and need to find your way out of it. 
// There are more than one possible paths through the Maze to the single exit point. 
// Write a recursive function that will help you find a possible path though the maze.
// The Maze is represented as a N*M matrix 
// You can use the following mazes to test your program.
// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The starting point is the top left corner and the exit is indicated by e. 
// For simplicity purpose, use the bottom right corner of the maze as the exit.
// You can't go outside the boundaries of the maze. 
// The maze has passages that are blocked and you can't go through them. 
// These blocked passages are indicated by *. 
// passing through a blocked cell as well as passing though a cell 
// that you have already passed before are forbidden.

function findExit(row, column, solution) {
    let maze = [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', 'e']
    ];

    solution = solution.slice(0)
    if (column < 0 || column > (maze[0].length -1) || row < 0 || row > (maze.length - 1)) return false; //if it is outside of map
    if (maze[row][column]=== '*') return false; 

    if (maze[row][column] === 'e'){
        console.log(solution.join(''))
        return true
    }

    if(maze[row][column] === '!')
        return false;

    maze[row][column]='!'
    
    if(findExit(row+1, column, [...solution, 'D'])) 
        return true   
    if(findExit(row, column+1, [...solution, 'R'])) 
        return true    
    if(findExit(row, column-1, [...solution, 'L']))
        return true
    if(findExit(row-1, column, [...solution, 'U'])) 
        return true                    

    return false;
};

console.log(findExit(0, 0, []))