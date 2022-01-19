function solution(A) {
    let sorted = A.sort();
    let result = 1;
    for (let i = 0; i < sorted.length; i++){
        if (sorted[i + 1] - sorted[i] > 1){
            return Math.max(sorted[i] + 1, result);
        }
    }
    return Math.max(sorted[sorted.length - 1] + 1, result);
}
const arr = [1, 2,3];
console.log(solution(arr))