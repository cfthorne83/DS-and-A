// Write a function, maxPathSum, that takes in a grid as an argument. The function
//  should return the maximum sum possible by traveling a path from the top-left 
//  corner to the bottom-right corner. You may only travel through the grid by 
//  moving down or right.

// You can assume that all numbers are non-negative.

//move through the grid from [0,0] check right and down position
//explore all possible paths and return the one with the largest sum 
//if you are at the last position return the sum
//if not add the current pos val to the sum 



const maxPathSum = (grid, r=0, c=0, memo={}) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r >= grid.length || c >= grid[0].length) return 0;
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

  const right = maxPathSum(grid, r + 1, c, memo);
  const down = maxPathSum(grid, r, c + 1, memo);

  const max = grid[r][c] + Math.max(right, down);
  memo[pos] = max;
  console.log(memo);
  return memo[pos];
};

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
// const grid = [
//   [1, 9],
//   [3, 6],
// ];
console.log(maxPathSum(grid)); // -> 18