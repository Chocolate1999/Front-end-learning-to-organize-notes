/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  // 借助一个新的栈
  let stack = []
  for(let cur of pushed){
      // 存放入栈的元素
      stack.push(cur)
      // 和出栈元素进行比对，如果匹配都弹出栈
      while(stack[stack.length-1] === popped[0] && stack.length){
          stack.pop()
          popped.shift()
      }
  }
  return !stack.length
};