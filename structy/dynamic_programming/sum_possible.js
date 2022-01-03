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

    for (let num of numbers){
        num.buildTree(num, numbers, amount)
    }
};

const buildTree = (root, numbers, amount) => {
    if ((amount - root) === 0) return true;
    if ((amount - root) < 0) return false;

    let newAmount = amount - root;
    for (let num of numbers) {
        // console.log([num, numbers, newAmount])
        if (buildTree(num, numbers, newAmount) === true) return true;
    }

    return false;
};

console.log(buildTree(4,[5, 12, 4], 8 ))
// console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4









