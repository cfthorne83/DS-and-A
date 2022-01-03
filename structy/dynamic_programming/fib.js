const fib = (n, memo={}) => {
    if (memo[n]) return memo[n]
    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = memo[n - 1] + memo[n - 2]
    return memo[n];
};

console.log(fib(3));