// Write a function, undirectedPath, that takes in an array of edges for an 
// undirected graph and two nodes (nodeA, nodeB). The function should return a 
// boolean indicating whether or not there exists a path between nodeA and nodeB.

//create and adjacency list
//write a hasPath func

const undirectedPath = (edges, nodeA, nodeB) => {
    let visited = new Set();
    const graph = buildGraph(edges);
    
    if (explore(graph, visited, nodeA, nodeB)) return true;

    return false;
};

const explore = (graph, visited, nodeA, nodeB) => {
    if (visited.has(nodeA)) return false;
    if (nodeA === nodeB) return true;

    visited.add(nodeA);

    for (let neighbor of graph[nodeA]){
        if (explore(graph, visited, neighbor, nodeB)) return true;
    }
    return false;
};

const buildGraph = edges => {
    const graph = {};

    for (let edge of edges) {
        let [nodeA, nodeB] = edge;
        if (!(nodeA in graph)) graph[nodeA] = [];
        if (!(nodeB in graph)) graph[nodeB] = [];
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }
    return graph;
};
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm')); // -> true
// console.log(buildGraph(edges))