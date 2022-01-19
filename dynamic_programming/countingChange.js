// Write a function, countingChange, that takes in an amount and an array of 
// coins. The function should return the number of different ways it is possible
//  to make change for the given amount using the coins.

// You may reuse a coin as many times as necessary.

const countingChange = (amount, coins, ways=0, memo={}) => {
    if (amount === 0) return 1;
    if (amount < 0) return 0;

    for (let coin of coins){
        ways += countingChange(amount - coin, coins, ways);
    }
    return ways;
};

console.log(countingChange(4, [1,2,3]))// -> 4