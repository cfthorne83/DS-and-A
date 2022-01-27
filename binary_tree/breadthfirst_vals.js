// Write a function, breadthFirstValues, that takes in the
// root of a binary tree. The function should return an array
// containing all values of the tree in breadth-first order.
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const breadthFirstValues = root => {
    let queue = [root];
    let vals = [];

    while (queue.length){
        let current = queue.shift();
        vals.push(current);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return vals;
}