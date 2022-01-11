// Write a function, nonAdjacentSum, that takes in an array of numbers as an 
// argument. The function should return the maximum sum of non-adjacent elements 
// in the array. There is no limit on how many elements can be taken into the sum 
// as long as they are not adjacent.

const nonAdjacentSum = (nums) => {
//iterate through each num and, for each, return the sum of the num and the 
//max nonadjecent neighbor. Keep a variable of the ultimate max sum to compare
//to and return that sum

    let result = -Infinity;
    for (let i in nums){
        let maxSum = maxNeighborSum(i, nums)
        if ( maxSum > result ) result = maxSum;
    }
    return result; 
};

const maxNeighborSum = (idx, arr) => {
    let filtered = [];

    for (let i = 0; i < arr.length; i++){
        if ( i !== (idx - 1) || i !== (idx + 1) || i !== idx){
            filtered.push(arr[i]);
        }
    }
    return arr[idx] +  Math.max(...filtered);
}

const nums = [2, 4, 5, 12, 7];
// console.log(maxNeighborSum(0, nums))
console.log(nonAdjacentSum(nums)); // -> 16