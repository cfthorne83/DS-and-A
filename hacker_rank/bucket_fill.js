const strokesRequired = (strArr) => {
    //construct a 2d array from the strings
    //do a breadth first search to find all connected sections
    let pic = [];
    for (let str of strArr){
        pic.push(str.split(""));
    }
};

const picture = ['aabba', 'aabba', 'aaacb'];

console.log(strokesRequired(picture));
