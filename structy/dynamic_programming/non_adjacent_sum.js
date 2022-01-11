// Write a function, nonAdjacentSum, that takes in an array of numbers as an 
// argument. The function should return the maximum sum of non-adjacent elements 
// in the array. There is no limit on how many elements can be taken into the sum 
// as long as they are not adjacent.

const nonAdjacentSum = (nums) => {
//iterate through each num and, for each, return the sum of the num and the 
//max nonadjecent neighbor. Keep a variable of the ultimate max sum to compare
//to and return that sum

    let result = -Infinity;
    for (let num of nums){
        let maxSum = maxNeighborSum(num)
        if ( maxNeighborSum(num) > result ) result = maxSum;
    }
    return result; 
};

const

const nums = [2, 4, 5, 12, 7];
nonAdjacentSum(nums); // -> 16