const strokesRequired = (strArr) => {
    let count = 0;
    let pic = buildMatrix(strArr);

    let explored = new Set();

    for (let r = 0; r < pic.length; r++) {
        for (let c = 0; c < pic[0].length; c++){
            let cell = pic[r][c];
            if (explore(r, c, pic, explored, cell)) count++;
        }
    }
    return count;
};

const explore = (r, c, arr, explored, cell) => {
    if ( r >= arr.length || r < 0 ) return false;
    if ( c >= arr[0].length || c < 0 ) return false;
    if ( arr[r][c] !== cell ) return false;
    
    const val = r + "," + c;
    if (explored.has(val)) return false;

    explored.add(val);

    let down = explore(r + 1, c, arr, explored, cell);
    let up = explore(r - 1, c, arr, explored, cell);
    let right = explore(r, c + 1, arr, explored, cell);
    let left = explore(r, c - 1, arr, explored, cell);

    return true;
}

const buildMatrix = (strArr) => {
    let pic = [];
    for (let str of strArr){
        pic.push(str.split(""));
    }
    return pic;
}

const picture = ['aabba', 'aabba', 'aaacb'];
// const arr = buildMatrix(picture);

console.log(strokesRequired(picture));
// console.log(explore(0, 0, arr, new Set(), 'a'))
