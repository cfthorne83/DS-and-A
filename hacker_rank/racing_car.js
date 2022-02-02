const minMoves = (obstacles, currentLane=2, count=0) => {
    if (!obstacles.length) return 0;
    if (obstacles[0] === currentLane) count++;
    
    let availLanes = [];
    for (let i = 1; i <= 3; i++){
        if (i !== obstacles[0]) availLanes.push(i);
    }
    
    let right = minMoves(obstacles.slice(1), availLanes[0], count);
    let left = minMoves(obstacles.slice(1), availLanes[1], count);

    return count + Math.min(right, left);
};
let arr = [2, 1, 3, 2];
console.log(minMoves(arr))