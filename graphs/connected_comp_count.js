// Write a function, connectedComponentsCount, that takes in the adjacency list 
// of an undirected graph. The function should return the number of connected 
// components within the graph.

const connectedComponentsCount = (graph) => {
    let count = 0;
    let visited = new Set();

    for (let node of Object.keys(graph)){
        if (!visited.has(parseInt(node))){
            console.log([node, visited])
            if (explore(node, graph, visited)) count++;
        }
    }
    return count;
};

const explore = (node, graph, visited) => {
    if (visited.has(node)) return false;

    visited.add(parseInt(node));
    for (let edge of graph[node]){
        if (!visited.has(edge)){
            explore(edge, graph, visited);
        }
    }
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
