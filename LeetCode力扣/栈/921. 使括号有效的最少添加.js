/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  // 长度为0，无须添加
  if(!S.length) return 0
  let stack = []
  for(let i=0;i<S.length;i++){
      let ch = S[i]
      // 如果当前栈顶元素和目前字符括号匹配，则弹出栈顶元素
      if(ch === ')' && stack[stack.length-1] === '(') stack.pop()
      else stack.push(ch)
  }
  // 栈的剩余元素个数，即需要的括号数
  return stack.length
};