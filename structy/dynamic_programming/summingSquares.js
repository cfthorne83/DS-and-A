// Write a function, summingSquares, that takes a target number as an argument. 
// The function should return the minimum number of perfect squares that sum to 
// the target. A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.



const summingSquares = (n) => {
    if (n === 0) return 0;
    const squares = getSquares(n);

    for (let square of squares){
        summingSquares(n - square)
    }
    // return 1 + 
};

const getSquares = (n) => {
    let squares = [];
    for (let num = 1; num < n ; num++){
        if (isSquare(num)) squares.push(num);
    }
    return squares;
}

const isSquare = (n) => {
    for (let i = 1; i <= n; i++){
        if (i * i === n) return true;
    }
    return false;
}

console.log(getSquares(12));