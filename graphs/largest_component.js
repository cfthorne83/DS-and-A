// Write a function, largestComponent, that takes in the adjacency list of an 
// undirected graph. The function should return the size of the largest connected 
// component in the graph.

//est a var to keep track of the size of the largest connected comp
//iterate through the nodes
//explore all connected components of that node 
    //depth first search of all neighbors while tracking the number of nodes visited
    //return the number of nodes visited
//keep track of visited nodes to prevent cycles

const largestComponent = (graph) => {
    let visited = new Set();
    let largest = 0;

    for (let node in graph){
        let size = explore(graph, node, visited);
        if (size > largest) largest = size;
    }
    return largest;
};

const explore = (graph, node, visited) => {
    if (visited.has(String(node))) return 0;
    visited.add(String(node));

    let size = 1;
    for(let neighbor of graph[node]){
       size += explore(graph, neighbor, visited);
    }
    return size;
};  


let graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
} // -> 6
console.log(largestComponent(graph))
// console.log(explore(graph, 2, new Set()))