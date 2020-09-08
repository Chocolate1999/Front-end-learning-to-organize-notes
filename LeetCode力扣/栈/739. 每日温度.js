/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let stack = []
  // 初始化气温列表，默认值为0
  let res = new Array(T.length).fill(0)
  for(let i=0;i<T.length;i++){
      //将栈顶元素下标对应的值和当前元素进行比较
      while(T[i] > T[stack[stack.length-1]] && stack.length){
          let idx = stack.pop()
          res[idx] = i-idx
      }
      stack.push(i)
  }
  return res
};