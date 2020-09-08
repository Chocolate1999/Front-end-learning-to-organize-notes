/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 如果是奇数，不可能匹配成功，直接返回false
  if(s.length & 1) return false
  let stack = []
  for(let i=0;i<s.length;i++){
    if(s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i])
    else if(s[i] === ')' && stack[stack.length-1] === '(') stack.pop()
    else if(s[i] === '}' && stack[stack.length-1] === '{') stack.pop()
    else if(s[i] === ']' && stack[stack.length-1] === '[') stack.pop()
    else return false
  }
  return !stack.length
};
let s = '()[]{}'
console.log(isValid(s))