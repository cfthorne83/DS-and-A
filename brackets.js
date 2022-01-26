// function SearchingChallenge(str) { 
//   let stack = [];

//   for (let char of str){
//     if (char === "("){
//       stack.push("(")
//     } else if (char === ")"){
//       if (!stack.length) return 0;
//       stack.pop();
//     }
//   }
  
//   if (stack.length === 0){
//     return 1;
//   } else {
//     return 0;
//   }
// }
// let str = "(coder)(byte))";
// console.log(SearchingChallenge(str))

// Promise.resolve('200!')
// .then(() => {
//   throw Error('Help!')
// })
// .catch(error => {
//   return 'sucess'
// })
// .then(data => {
//   throw Error('Data failed')
// })
// .catch(error => console.log(error.message))

// var foo = 101;
// function func1() {
//   return function() {
//     console.log(foo)
//   }
//   var foo = 202;
// }
// var func2 = func1();
// func2();

// function solution(number) {
//     let count = 0;
    
    // for (let i1 = 0; i1 <= number.length; i1++){
    //     for (let i2 = i1 + 1; i2 <= number.length; i2++){
    //         let sub = number.substring(i1, i2);
    //         let num = parseInt(sub);
    //         if ((sub[0] === '0' && sub.length > 1)) continue;
    //         // if (num % 3 === 0 && (sub[0] !== 0 && sub.length > 1)) count += 1;
    //         if (num % 3 === 0) count++;
    //         console.log([num, count])
    //     }
    // }
    // return count;
// };
// function fullSquare(num) {
//     for (let i = 1; i < num; i++){
//         if ( i * i === num) return true;
//     }
//     return false;
// }
function solution(numbers) {
    let count = 0;
    
    for (i1 = 0; i1 <= numbers.length; i1++){
        for (i2 = i1 + 1; i2 <= numbers.length; i2++){
            if (fullSquare(i1 + i2) && i1 <= i2) count ++;
        }
    }
    return count;
}

function fullSquare(num) {
    for (let i = 1; i < num; i++){
        if ( i * i === num) return true;
    }
    return false;
}
console.log(fullSquare(9));
