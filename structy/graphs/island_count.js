// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land.The function should return the 
// number of islands on the grid.An island is a vertically or horizontally 
// connected region of land.

const islandCount = (grid) => {
    let visited = new Set();
    let count = 0;


    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){

            if (explore(row, col, grid, visited) === true){
                count += 1;
            } 
        }
    }
    return count;
};

const explore = (row, col, grid, visited) => {
    const rowInbounds = row > -1 && row < grid.length;
    const colInbounds = col > -1 && col < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;
    if (visited.has(`${row},${col}`)) return false;
    if (grid[row][col] === "W") return false;

    visited.add(`${row},${col}`);

    explore(row - 1, col, grid, visited);
    explore(row + 1, col, grid, visited);
    explore(row, col - 1, grid, visited);
    explore(row, col + 1, grid, visited);
    
    return true;
};



const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];
// console.log(explore(3, 2, grid, new Set()))
console.log(islandCount(grid));