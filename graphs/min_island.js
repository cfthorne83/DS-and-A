// Write a function, minimumIsland, that takes in a grid containing Ws and Ls.W 
// represents water and L represents land.The function should return the size of 
// the smallest island.An island is a vertically or horizontally connected region 
// of land.
// You may assume that the grid contains at least one island.

const minimumIsland = (grid) => {
    let visited = new Set();
    let min = Infinity;

    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            let island = explore(r, c, visited, grid);
            if ( (island < min) && (island > 0)) min = island;
        }
    }
    return min;
};

const explore = (r, c , visited, grid) => {
    let rowInbounds = r < grid.length && r > -1;
    let colInbounds = c < grid[0].length && c > -1;

    if (!rowInbounds || !colInbounds) return 0;
    if (visited.has(`${r},${c}`)) return 0;
    if (grid[r][c] === "W") return 0;

    visited.add(`${r},${c}`);

    let left = explore(r - 1, c, visited, grid);
    let right = explore(r + 1, c, visited, grid);
    let down = explore(r, c - 1, visited, grid);
    let up = explore(r, c + 1, visited, grid);
    return 1 + left + right + down + up;
};

const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

console.log(minimumIsland(grid)); // -> 1
// console.log(explore(0, 0, new Set(), grid));