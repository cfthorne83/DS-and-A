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

var foo = 101;
function func1() {
  return function() {
    console.log(foo)
  }
  var foo = 202;
}
var func2 = func1();
func2();