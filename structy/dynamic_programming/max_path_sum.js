// Write a function, maxPathSum, that takes in a grid as an argument. The function
//  should return the maximum sum possible by traveling a path from the top-left 
//  corner to the bottom-right corner. You may only travel through the grid by 
//  moving down or right.

// You can assume that all numbers are non-negative.

const maxPathSum = (grid, r, c) => {
    if (r === grid.length - 1 || c === grid[0].length - 1) return 0;

    if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
};

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
maxPathSum(grid); // -> 18