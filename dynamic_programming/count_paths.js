// Write a function, countPaths, that takes in a grid as an argument. In the 
// grid, 'X' represents walls and 'O' represents open spaces. You may only move 
// down or to the right and cannot pass through walls. The function should return 
// the number of ways possible to travel from the top-left corner of the grid to 
// the bottom-right corner.

// start at [0,0], check all availble paths from that position and explore each 
//path 
//if pos = [grid.length, grid[0].length] return 1

const countPaths = (grid, r=0, c=0, memo={}) => {
  const pos = `${r},${c}`;
  if(pos in memo) return memo[pos]; 
  if (r >= grid.length || c >= grid[0].length) return 0;
  if (grid[r][c] === "X") return 0;
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

  let right = countPaths(grid, r + 1, c, memo);
  let down = countPaths(grid, r, c + 1, memo);

  memo[pos] = right + down;
  console.log(memo);
  return memo[pos];
};

const grid = [
  ["O", "O"],
  ["O", "O"],
];
console.log(countPaths(grid)); // -> 2