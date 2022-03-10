// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land.The function should return the 
// number of islands on the grid.An island is a vertically or horizontally 
// connected region of land.

//iterate through each element in the matrix
//add indices to a visited set
//keep track of a count var
//if the element is L and not in visited explore all adjacent neighbors and 
//increment the count
    //explore: depth first search to find all adjacent L elements
//return the count

const islandCount = grid => {
    let visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            console.log([r, c])
                // if (explore(r, c, grid, visited)) count++;
                console.log(explore(r, c, grid, visited));
        }
    }
    return count;
};

const explore = (r, c, grid, visited) => {
    if (r < 0 || r > grid.length - 1 || c < 0 || c > grid[0].length - 1) return false;
    if ( grid[r][c] === "W") return false;
    if (visited.has(`${r},${c}`)) return false;
    visited.add(`${r},${c}`);

    explore(r + 1, c, grid, visited);
    explore(r - 1, c, grid, visited);
    explore(r, c + 1, grid, visited);
    explore(r, c - 1, grid, visited);
    return visited;
};


const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];
console.log(explore(0, 3, grid, new Set()))
// console.log(islandCount(grid));