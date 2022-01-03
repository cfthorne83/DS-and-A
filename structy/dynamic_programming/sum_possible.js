class Node{
    constructor(val, prev=null){
        this.val = val;
        this.prev = prev;
        this.sum = this.prev ? this.prev.sum + this.val : this.val;
    }
}

const sumPossible = (amount, numbers) => {

    for (let n of numbers){
        if (buildTree(n, amount, numbers)) return true;
    }
    return false;
};

const buildTree = (root, amount, numbers) => {
    let stack = [new Node(root)];

    while (stack.length){
        let current = stack.pop();

        for (let num of numbers){
            if (num + current.sum === amount){
                return true;
            } else if ((num  + current.sum) < amount){
                let newNode = new Node(num, current)
                stack.push(newNode);
            }
        }
    }
    return false;
}

// console.log(buildTree(12, 8, [5, 12, 4] ))
console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4