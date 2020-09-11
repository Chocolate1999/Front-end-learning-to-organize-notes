/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = ['']
  for(let i=0;i<s.length;i++){
    let ch = s[i]
    if(ch === '('){
      stack.push('')
    }else if(ch === ')'){
      let str = stack.pop()
      let tmp = str.split('').reverse().join('')
      stack[stack.length-1] += tmp
    }else{
      stack[stack.length-1] += ch
    }
  }
  return stack.pop()
};
let s = '(ed(et(oc))el)'
console.log(reverseParentheses(s))