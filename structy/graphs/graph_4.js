const largestComponent = (graph) => {
    let visited = new Set();
    let maxSize = 0;

    for (let node in graph) {
        let componentSize = explore(node, graph, visited);
        if ( componentSize && componentSize > maxSize){
            maxSize = componentSize;
        }
    }
    return maxSize;
};

const explore = (node, graph, visited) => {
    if (visited.has(node)) return false;
    visited.add(String(node));
    let size = 1;
    
    for (let neighbor of graph[node]){
        if (!visited.has(String(neighbor))){
            size += explore(neighbor, graph, visited);
        }
    }
    return size;
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