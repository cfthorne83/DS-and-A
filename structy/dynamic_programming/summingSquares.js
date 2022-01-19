// Write a function, summingSquares, that takes a target number as an argument. 
// The function should return the minimum number of perfect squares that sum to 
// the target. A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.



const summingSquares = (n, min=Infinity) => {
    if (n === 0) return 0;
    // if (n < 0) return Infinity;
    const squares = getSquares(n);

    for (let square of squares){
        // let summingSquares(n - square, min)//2 [1]
        // // min = Math.min(count, min);
        // min = count;
        // console.log(count);
    }
    // return min;
};

const getSquares = (n) => {
    let squares = [];
    for (let num = 1; num <= n ; num++){
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

console.log(getSquares(8));