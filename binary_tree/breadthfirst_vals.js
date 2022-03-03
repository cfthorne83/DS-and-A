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
    let stack = [root];
    let vals = [];

    while (stack.length){
        let current = stack.pop();
        vals.push(current.val);
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
    return vals;
};

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

console.log(breadthFirstValues(a)); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']