// Write a function minChange that takes in an amount and an array of coins.The 
// function should return the minimum number of coins required to create the 
// amount.You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

const minChange = (amount, coins, min=Infinity, memo={}) => {
   if (amount in memo) return memo[amount];
   if (amount === 0) return 0;
   if (amount < 0) return Infinity;

   for (let coin of coins) {
       let count = 1 + minChange(amount - coin, coins, min, memo);
       min = Math.min(count, min);
   }
   memo[amount] = min;
   return memo[amount] === Infinity? -1 : memo[amount];
};

console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible