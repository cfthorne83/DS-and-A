// Write a function minChange that takes in an amount and an array of coins.The 
// function should return the minimum number of coins required to create the 
// amount.You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

//keep track of a min variable
//iterate through the array and subtract coin from amt, keeping track of how 
//many tree levels have been traversed = if amt is 0 and the levels are less 
//than the min var, replace the min var
//return the min var
//if amount is not found return -1

const minChange = (amt, coins, min=Infinity) => {
    if (amt === 0) return min;
    if (amt < 0) return -1;

    for (let coin of coins){
        let count = 1 + minChange(amt - coin, coins, min);
        if (count < min && count > 0) min = count;
    }
    return min !== Infinity ? min : -1;
};


console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible