// Write a function, countPaths, that takes in a grid as an argument. In the 
// grid, 'X' represents walls and 'O' represents open spaces. You may only move 
// down or to the right and cannot pass through walls. The function should return 
// the number of ways possible to travel from the top-left corner of the grid to 
// the bottom-right corner.

const countPaths = (grid, row=0, col=0, count=0, memo={}) => {
    let pos = `${row},${col}`;
    if (pos in memo) return memo[pos];
  
    if ( row >= grid.length) return 0;
    if ( col >= grid[0].length) return 0;
    if (grid[row][col] === "X") return 0;
  
    if (row === grid.length - 1 && col === grid[0].length - 1) return 1;
    

    let right = countPaths(grid, row + 1, col, memo);
    let down = countPaths(grid, row, col + 1, memo);

    memo[pos] = right + down;
    return memo[pos];
};

const grid = [
  ["O", "O"],
  ["O", "O"],
];
console.log(countPaths(grid)); // -> 2