// Write a function, nonAdjacentSum, that takes in an array of numbers as an 
// argument. The function should return the maximum sum of non-adjacent elements 
// in the array. There is no limit on how many elements can be taken into the sum 
// as long as they are not adjacent.

// [2, 4] 
const nonAdjacentSum = (nums, i=0, memo={}) => {
    if (i in memo) return memo[i];
    if (i >= nums.length) return 0;

    let exclude = nonAdjacentSum(nums, i + 1, memo); // 4

    let include = nums[i] + nonAdjacentSum(nums, i + 2, memo); // 2
    
    memo[i] = Math.max(include, exclude);
    console.log(memo);
    return memo[i];
};



const nums = [2, 4, 5, 12, 7];
// const nums = [2, 4];
// console.log(maxNeighborSum(4, nums))
console.log(nonAdjacentSum(nums)); // -> 16
// memo = { '0': { '2': 7, '3': 14}}