// Write a function, getNodeValue, that takes in the head of a linked list and an 
// index. The function should return the value of the linked list at the specified 
// index.

// If there is no node at the given index, then return null.
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const getNodeValue = (head, i) => {
    if (!head) return null;
    if (i === 0) return head.val;

    return getNodeValue(head.next, i - 1);
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'