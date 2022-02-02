const minMoves = (obstacles) => {
    if (!obstacles.length) return 0;

    minMoves(obstacles.slice(1));
};