// Write a function, arrayStepper, that takes in an array of numbers as an 
// argument. You start at the first position of the array. The function should
// return a boolean indicating whether or not it is possible to reach the last 
// position of the array. When situated at some position of the array, you may 
// take a maximum number of steps based on the number at that position.

const arrayStepper = (nums, i=0, memo={}) => {
    if (i in memo) return memo[i];
    if (i === nums.length - 1){
        memo[i] = true;
        return true;
    } 

    const steps = nums[i];//4
    for (let step = 1; step <= steps; step++){
        if (arrayStepper(nums, i + step, memo) === true) return true;
    }
    memo[i] = false;
    console.log(memo);
    return false;
}

console.log(arrayStepper([2, 4, 2, 0, 0, 1])); // -> true