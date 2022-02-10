// Write a function, largestComponent, that takes in the adjacency list of an 
// undirected graph. The function should return the size of the largest connected 
// component in the graph.

const largestComponent = (graph) => {
    let visited = new Set();
    let largest = 0;

    for (let node in graph){
        console.log(node);
    }
};


let graph = {
    1: ['2'],
    2: ['1', '8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
} // -> 6

console.log(explore(1, graph, new Set()) )