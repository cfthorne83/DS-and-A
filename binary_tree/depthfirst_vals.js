// Write a function, depthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in 
// depth-first order.
class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
const depthFirstValues = (root, vals=[]) => {
    if (!root) return;
    
    vals.push(root.val);
    depthFirstValues(root.right, vals);
    depthFirstValues(root.left, vals);
    return vals
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a)); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']