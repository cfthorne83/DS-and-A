// Write a function, connectedComponentsCount, that takes in the adjacency list 
// of an undirected graph. The function should return the number of connected 
// components within the graph.

//loop through each node in the list and explore all neighbors 
//add each explored node to a set 
//keep a count variable to track all connected components

const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;

    for ( let node in graph){
        if (explore(node, graph, visited)) count++;
    }
    return count;
};

const explore = (node, graph, visited) => {
    if (visited.has(String(node))) return false;
    visited.add(String(node));

    for (let neighbor of graph[node]){
        explore(neighbor, graph, visited);
    }
    // console.log(visited);
    return true;
};

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};
// console.log(explore(0, graph, new Set()));
console.log(connectedComponentsCount(graph))
