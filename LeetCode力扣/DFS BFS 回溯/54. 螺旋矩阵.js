/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix.length) return []
  let n = matrix.length
  let m = matrix[0].length
  let total = n*m
  let top = 0,bottom = n-1
  let left = 0,right = m-1
  let res = []
  while(res.length < total){
      for(let i=left;i<=right;i++) res.push(matrix[top][i]) // 从左到右
      top++
      for(let i=top;i<=bottom;i++) res.push(matrix[i][right]) // 从上到下
      right--
      /* 因为n 和 m 不相同的时候，最后可能会留一列或一行，避免重复计算，总数够了直接跳出去 */
      if(res.length === total) break
      for(let i=right;i>=left;i--) res.push(matrix[bottom][i]) // 从右到左
      bottom--
      for(let i=bottom;i>=top;i--) res.push(matrix[i][left]) // 从下到上
      left++
  }
  return res
};