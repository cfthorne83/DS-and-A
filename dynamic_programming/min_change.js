// Write a function minChange that takes in an amount and an array of coins.The 
// function should return the minimum number of coins required to create the 
// amount.You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

// if amt === 0 and min is less than current min return min
//iterate through the coins, subtract them from the amt and pass that new 
// amt to minChange

const minChange = (amt, coins, min=Infinity, memo={}) => {
    if (amt in memo) return memo[amt];
    if (amt === 0) return 0;
    if (amt < 0) return Infinity;

    for (let coin of coins){
       let count = 1 + minChange(amt - coin, coins, min, memo);
       min = Math.min(count, min);
    }
    return min === Infinity ? -1 : min;
};


console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible
