// Write a function, arrayStepper, that takes in an array of numbers as an 
// argument. You start at the first position of the array. The function should
// return a boolean indicating whether or not it is possible to reach the last 
// position of the array. When situated at some position of the array, you may 
// take a maximum number of steps based on the number at that position.

const arrayStepper = (nums, i=0) => {
    if (i >= nums.length) return true;
    if (nums[i] === 0) return false;

    return arrayStepper(nums, i + nums[i]);
}

arrayStepper([2, 4, 2, 0, 0, 1]); // -> true