// Write a function, maxPathSum, that takes in the root of a 
// binary tree that contains number values. The function should 
// return the maximum sum of any root to leaf path within the 
// tree.

// You may assume that the input tree is non-empty.
class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
const maxPathSum = root => {
    if (!root) return 0;

    let right = maxPathSum(root.right);
    let left = maxPathSum(root.left);

    return root.val + Math.max(right, left);
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(maxPathSum(a)); // -> 18