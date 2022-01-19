const sumPossible = (amount, numbers, memo={}) => {
    if ( amount in memo) return memo[amount];
    if (amount === 0){
        memo[amount] = true;
        return memo[amount];
    };
    if (amount < 0){
        memo[amount] = false;
        return memo[amount];
    };

    for (let num of numbers) {
        if (sumPossible(amount - num, numbers, memo) === true) return true; 
    }

    memo[amount] = false;
    return false;
}
// console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4









