function bonAppetit(bill, k, b) {
    //def a owed var
    //calculate annas amount owed
        //iterate thru the arr, if the index of the bill item !== k
        //add bill / 2 to the owed var
    //subtract the the amount owed from payed and return the diff
    //if diff === 0 return the string
    
    // let owed = 0;
    return 0;
    // for (let i = 0; i < bill.length; i++){
    //     if (i !== k) {
    //         owed += bill[i] / 2;
    //     }
    // }
    
    // if ( owed !== b ){
    //     return b - owed;
    // }
    
    // return 'Bon Appetit';
}
function diagonalDifference(arr) {
    //def a right diag and left diag var
    //def a right dia sum and left dia sum
    // iterate through the matrix
        // increment the right dia
        //decrement the left  dia
        // add the integers at those indices to the appropriate var
    //subtract right from left and return the abs value
    
    let rightIndex = 0;//1
    let leftIndex = arr.length - 1;//1
    
    let rightSum = 0;//1
    let leftSum = 0;//3
    
    for (let row of arr){
        rightSum += row[rightIndex];
        leftSum += row[leftIndex];
         console.log([row, rightSum, leftSum])
        rightIndex++;
        leftIndex--;
    }
    return Math.abs(rightIndex - leftIndex);
}

let matrix = [
    [1, 2, 3],
[4, 5, 6],
[9, 8, 9] ]

console.log(diagonalDifference(matrix));