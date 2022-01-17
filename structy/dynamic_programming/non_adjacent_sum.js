// Write a function, nonAdjacentSum, that takes in an array of numbers as an 
// argument. The function should return the maximum sum of non-adjacent elements 
// in the array. There is no limit on how many elements can be taken into the sum 
// as long as they are not adjacent.

const nonAdjacentSum = (nums, i=0) => {
    if (i >= nums.length) return 0;

    let exclude = nonAdjacentSum(nums, i + 1);
    let include = nums[0] + nonAdjacentSum(nums, i + 2);
    console.log([include, exclude])
    return Math.max(include, exclude);
};



const nums = [2, 4, 5, 12, 7];
// const nums = [2, 4];
// console.log(maxNeighborSum(4, nums))
console.log(nonAdjacentSum(nums)); // -> 16
// memo = { '0': { '2': 7, '3': 14}}