/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let top = 0, bottom =n-1
  let left = 0, right = n-1
  let res = []
  for(let i=0;i<n;i++) res[i] = []
  let cur = 1, total = n*n
  while(cur<=total){
      for(let i=left;i<=right;i++) res[top][i] = cur++  // 从左到右
      top++
      for(let i=top;i<=bottom;i++) res[i][right] = cur++ // 从上到下
      right--
      for(let i=right;i>=left;i--) res[bottom][i] = cur++ // 从右到左
      bottom--
      for(let i=bottom;i>=top;i--) res[i][left] = cur++ // 从下到上
      left++
  }
  return res
};