// Write a function, shortestPath, that takes in an array of edges for an 
// undirected graph and two nodes (nodeA, nodeB). The function should return the 
// length of the shortest path between A and B. Consider the length as the number 
// of edges in the path, not the number of nodes. If there is no path between A 
// and B, then return -1.

//build an ad list
//
const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set();

    let queue = [[nodeA, 0]];
    

    while(queue.length){
        let [current, dst] = queue.shift();
        if (current === nodeB) return dst;
        // console.log(current)
        visited.add(current);
        
        for (let neighbor of graph[current]){
            if (!visited.has(neighbor)){
                queue.push([neighbor, dst + 1 ]);
            }
        }
    }
    return -1;
};

const buildGraph = edges => {
    const graph = {};

    for (let edge of edges){
        let [nodeA, nodeB] = edge;
        if (!(nodeA in graph)) graph[nodeA] = [];
        if (!(nodeB in graph)) graph[nodeB] = [];

        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }
    return graph;
};
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
console.log(shortestPath(edges, 'w', 'z')); // -> 2
// console.log(buildGraph(edges))