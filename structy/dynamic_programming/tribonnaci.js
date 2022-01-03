const tribonacci = (n, memo={}) => {
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;

    memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    return memo[n];
};

console.log(tribonacci(5));