/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  let mod = 1e9+7
  // 维护一个栈
  let stack = []
  // 求以A[i]为最小值的子数组左边大于或等于自己的个数
  let prev = []
  for(let i=0;i<A.length;i++){
    while(stack.length && A[stack[stack.length-1]] >= A[i]) stack.pop()
    // 如果栈为空，即左边都比自己大，则返回i+1，否则返回i-栈顶元素（即保存的下标值）
    prev[i] = stack.length ? i - stack[stack.length-1] : i+1
    stack.push(i)
  }
  stack = []
  // 求以A[i]为最小值的子数组右边大于自己的个数（没有等号是因为不会重复计算相等的值）
  let nextv = []
  for(let i=A.length-1;i>=0;i--){
    while(stack.length && A[stack[stack.length-1]] > A[i]) stack.pop()
    // 如果栈为空，即右边都比自己大，则返回A.length-i，否则返回栈顶元素（即保存的下标值）-i
    nextv[i] = stack.length? stack[stack.length-1] - i : A.length-i
    stack.push(i)
  }
  let sum = 0
  for(let i=0;i<A.length;i++){
    // 以A[i] 为最小值的子数组的组合共有prev[i]*nextv[i]种情况，那么和的话乘以A[i]累加即可
    sum += (prev[i]*nextv[i]*A[i])
    // 按题意，进行取模运算
    sum %= mod
  }
  return sum
};
