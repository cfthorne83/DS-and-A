// Write a function, undirectedPath, that takes in an array of edges for an 
// undirected graph and two nodes (nodeA, nodeB). The function should return a 
// boolean indicating whether or not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, nodeA, nodeB, visited=new Set()) => {
    if (nodeA === nodeB) return true;
    const graph = buildGraph(edges);

    visited.add(nodeA);
    // console.log(nodeA);
    for (let neighbor of graph[nodeA]){
        if (!visited.has(neighbor)){
           if (undirectedPath(edges, neighbor, nodeB, visited)) return true;
        }
    }
    return false;

};

const buildGraph = edges => {
    let graph = {};

    for (let edge of edges){
        let [node1, node2] = edge;
        for (let node of edge){
            if (!graph[node]) graph[node] = [];
        }
        graph[node1].push(node2)
        graph[node2].push(node1)
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