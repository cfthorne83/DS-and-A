class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function maxPosPrefixes(arr) {
    // find every possible arrangement of integers beginning with a pos num
    // calculate the psum of each
    // return the num of pos integers of the arr with the most
    for (let num in arr){
        buildTree(num, arr)
    }
}

const buildTree = (rootVal, arr) => {
    const rootNode = new Node(rootVal);
    
}

arr = [-6, 3, 4, -10];
//optimal arrangement = [3, 4, -6, -10]
//psum = [3, 7, 1, -9]
//return 3

//[3, 4, -6, -10]
//[3, -6, 4, -10]
//[3, -6, 4, -10]