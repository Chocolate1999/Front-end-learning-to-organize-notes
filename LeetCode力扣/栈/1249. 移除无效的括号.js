/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let res = [...s]
  let stack = []
  for(let i=-0;i<s.length;i++){
      let ch = s[i]
      if(ch === '('){
          stack.push(i)
      }else if(ch === ')'){
          if(stack.length) stack.pop()
          else delete(res[i])
      }
  }
  while(stack.length){
      let idx = stack.pop()
      delete(res[i])
  }
  res = res.filter(item=>item)
  return res.join('')
};