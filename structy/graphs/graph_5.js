const shortestPath = (edges, nodeA, nodeB) => {
    const graph = createGraph(edges);
    let queue = [[nodeA, 0]];
    let visited = new Set();

    while (queue.length){
        console.log(queue);
        let current = queue.shift();
        if (current[0] === nodeB) return current[1]
        
        if (!visited.has(current[0])){
            visited.add(current[0])
            for (let neighbor of graph[current[0]]){
                queue.push([neighbor, current[1] + 1])
            }
        }
    }
    return -1;
};

const createGraph = (edges) => {
    let graph = {};

    for (let edge of edges) {
        let [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
console.log(shortestPath(edges, 'w', 'z')); // -> 2