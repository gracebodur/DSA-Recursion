# DSA Recursion

### Algorithm

- Algorithms are simply steps in a process that we take to perform a desired action with computers.
- Allow us to use language built in data structures like arrays and objects or primitives such as integers
 and booleans and even custom datatypes
- Algorithms allow us to use these data structures to perform actions on that data.

### Recursion
- isn't technically an algorithm but a concept(terminal list items or files recursively: ls -R)
- when you define something in terms of itself. 
- a function that refers to itself inside a function/ a function that refers to itself
- Recursion is really good for tasks that have repeated subtasks to do that. 
- same tasks that we do over and over again
- It kind of like when we looked at the folders inside of this project, DOM traversal on a website

- one of recursions downside we have to hold onto each function calls which can get really expensive.
- computer needs to allocate memory to remember things, 'Whoaaaa this is getting silly! you have to stop this I'm just going to error out!'

**RECURSIVE FUNCTION have 2 paths**
**RECURSIVE CASE** 
- call the function again and run items
  
```
const countDown = function (some parameters) {
    // other logic that the function should perform

    countDown(some other parameters);
};

countDown(some parameters);

```
  
**BASE CASE**
- stop calling the function
- every recursive function needs to have a base case or a stop point.
- if base case wasnt there, function will just keep on running
- stop calling a function by adding a conditional statement

```
const countDown = function(from) {
    // Base case
    if (from === 0) {
        return;
    }

    // General case
    console.log(from);
    countDown(from - 1);
};

countDown(5);
```

**RULES:** 
1. Identify the base case
2. Identify the recursive case
3. The argument of the function must be modified with each call
4. The function does not return the outcome until all recursive calls are finished
5. A recursive call returns to the recursive function that called it
6. Get closer and return when needed, usually you have 2 returns for the recursive and base case

**WHY USE RECURSION?**
- anything that you do with recursion CAN be done iteratively(loop)
- its easier to write
- allow your code to be DRY
- codes simplier
- made code readable
- Tail Call optimization

**WHEN TO USE RECURSION?**
- when traversing through trees or graphs
- recursion is better with searching
- Every time you are using a tree or converting something into a tree, consider recursion

[Technical Interview Mind Map](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)
