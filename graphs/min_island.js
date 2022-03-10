// Write a function, minimumIsland, that takes in a grid containing Ws and Ls.W 
// represents water and L represents land.The function should return the size of 
// the smallest island.An island is a vertically or horizontally connected region 
// of land.
// You may assume that the grid contains at least one island.

//iterate throught the matix
//assign a variable to keep track of the smallest island
//explore the neighbors of each L element
    //conduct a depth first search to explore each adjacent index
    //assign a var to track the number of adjacent elements
    //return the size of the island explored
// reassign the size var if smaller than the current

const minimumIsland = grid => {
    let min = Infinity;
    let visited = new Set();

    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            let size = explore(r, c, grid, visited);
            if (size < min) min = size;
            // console.log([r,c])
        }
    }
    return min;
};

const explore = (r, c, grid, visited) => {
    if (r < 0 || r > grid.length - 1 || c < 0 || c > grid[0].length - 1) return Infinity;
    if (grid[r][c] === "W") return Infinity;
    if (visited.has(`${r},${c}`)) return Infinity;

    visited.add(`${r},${c}`);

    let size = 1;
    let down = explore(r - 1, c, grid, visited);
    let up = explore(r + 1, c, grid, visited);
    let right = explore(r, c - 1, grid, visited);
    let left = explore(r, c + 1, grid, visited);

    let neighbors = [down, up, right, left];

    for (let n of neighbors){
        if (n !== Infinity) size += n;
    }

    return size;
};

const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

console.log(minimumIsland(grid)); // -> 1
// console.log(explore(1, 0, grid, new Set()));

