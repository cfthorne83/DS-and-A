function SearchingChallenge(str) { 
  let stack = [];

  for (let char of str){
    if (char === "("){
      stack.push("(")
    } else if (char === ")"){
      if (!stack.length) return 0;
      stack.pop();
    }
  }
  
  if (stack.length === 0){
    return 1;
  } else {
    return 0;
  }
}
let str = "(coder)(byte))";
console.log(SearchingChallenge(str))