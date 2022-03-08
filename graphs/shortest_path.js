// Write a function, shortestPath, that takes in an array of edges for an 
// undirected graph and two nodes (nodeA, nodeB). The function should return the 
// length of the shortest path between A and B. Consider the length as the number 
// of edges in the path, not the number of nodes. If there is no path between A 
// and B, then return -1.

//build an ad list
//
const shortestPath = (graph, nodeA, nodeB) => {


};

const buildGraph = edges => {
    const graph = {};

    for (let edge of edges){
        let [nodeA, nodeB] = edge;
        if (!(nodeA in graph)) graph[nodeA] = [];
        if (!(nodeB in graph)) graph[nodeB] = [];
    }
};
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
// console.log(shortestPath(edges, 'w', 'z')); // -> 2
console.log(buildGraph(edges))