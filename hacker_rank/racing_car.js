class Node{
    constructor(lane){
        this.lane = lane;
        this.count = 0;
        this.right = null;
        this.left = null;
    }
}

const minMoves = (obstacles, currentLane=2, count=0) => {
    
    buildTree(currentLane, obstacles.length);
};

const buildTree = (rootVal, height) => {

    for (let level = 1; level <= height; level++){
        let lanes = [1, 2, 3];
        lanes = lanes.splice(rootVal - 1, 1); 
        let newNode = new Node(rootVal);
        newNode.right = lanes[0];
    }
}
console.log(buildTree(2, 3))
let arr = [2, 1, 2];
// console.log(minMoves(arr))
//create an matrix
//[0, 1, 0]
//[1, 0, 0]
//[0, 1, 0]
//find all possible moves from that each position and return the min

//OR
//create a Node class and find all possible neighbors 
//increment count if both children are diff than parent