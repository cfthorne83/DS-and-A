// Write a function sumPossible that takes in an amount and an array of positive 
// numbers. The function should return a boolean indicating whether or not it is 
// possible to create the amount by summing numbers of the array. You may reuse 
// numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

//iterate through the numbers and subtract them from the amount, do that conse
//cutively until you reach 0 or you reach a neg number
//if 0 is reached, return true
//if not return false

const sumPossible = (amt, arr, hash={}) => {
    if (amt in hash) return hash[amt];
    if (amt === 0 ) return true;
    if (amt < 0) return false;

    for (let num of arr) {
        if (sumPossible(amt - num, arr, hash)){
            hash[amt] = true;
            return true;
        } 
    }
    hash[amt] = false;
    return false;
};

console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4









