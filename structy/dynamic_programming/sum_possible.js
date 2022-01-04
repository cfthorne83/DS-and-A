// class Node{
//     constructor(val, prev=null){
//         this.val = val;
//         this.prev = prev;
//         this.sum = this.prev ? this.prev.sum + this.val : this.val;
//     }
// }

// const sumPossible = (amount, numbers) => {

//     for (let n of numbers){
//         if (buildTree(n, amount, numbers)) return true;
//     }
//     return false;
// };

// const buildTree = (root, amount, numbers) => {
//     let stack = [new Node(root)];

//     while (stack.length){
//         let current = stack.pop();

//         for (let num of numbers){
//             if (num + current.sum === amount){
//                 return true;
//             } else if ((num  + current.sum) < amount){
//                 let newNode = new Node(num, current)
//                 stack.push(newNode);
//             }
//         }
//     }
//     return false;
// }

///////////////////////////////////////////////////////////
const sumPossible = (amount, numbers) => {
    if (amount === 0 && numbers.length === 0) return true;
    let memo = {};

    for (let num of numbers){
        // console.log(memo);
            if (buildTree(num, numbers, amount, memo)) return true;
            // console.log(memo)
        }
    return false;
};

const buildTree = (root, numbers, amount, memo) => {
    if (root in memo) return memo[root];
    if ((amount - root) === 0){
        memo[root] = true;
        return;
    } 
    if ((amount - root) < 0){
        memo[root] = false;
        return;
    }
    
    let newAmount = amount - root;
    for (let num of numbers) {
        console.log([num, memo]);
        if (buildTree(num, numbers, newAmount, memo) === true){
            // memo[num] = true;
            memo[root] = true;
            return true;
        }
    }
    memo[root] = false;
    console.log(memo);
    return memo[root];
};

console.log(buildTree(4,[5, 12, 4], 8 , {}))
// console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4









