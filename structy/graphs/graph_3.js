const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;

    for (let node in graph){
        if (findAllPaths(node, graph, visited)){
            count += 1;
        }
    }
    return count;
};

const findAllPaths = (root, graph, visited) => {
    if ( visited.has(String(root))) return false;
    let stack = [root];

    while (stack.length){
        let current = stack.pop();
        visited.add(String(current));

        for (let neighbor of graph[current]){
            if (!(visited.has(String(neighbor)))){
                stack.push(neighbor);
            }
        }
    }
    return true;
    // return visited;
}


const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};

// console.log(findAllPaths(0, graph, new Set() ))
console.log(connectedComponentsCount(graph))