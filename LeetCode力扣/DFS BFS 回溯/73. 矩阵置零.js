/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/* 空间复杂度 O(n) */

var setZeroes = function(matrix) {
  let n = matrix.length
  let m = matrix[0].length
  let arr = []
  for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
          if(matrix[i][j] == 0){
              arr.push([i,j])
          }
      }
  }
  while(arr.length){
      let [x,y] = arr.pop()
      for(let i=0;i<n;i++) matrix[i][y] = 0
      for(let j=0;j<m;j++) matrix[x][j] = 0
  }
  return matrix
};

/* 空间复杂度 O（1） */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix[0].length;j++){
          if(Object.is(matrix[i][j],0)){
              // 对行进行操作
              for(let k=0;k<matrix.length;k++)
                  if(!Object.is(matrix[k][j],0) && k!==i) matrix[k][j] = -0
              // 对列进行操作
              for(let k=0;k<matrix[0].length;k++)
                  if(!Object.is(matrix[i][k],0) && k!==j) matrix[i][k] = -0
          }
      }
  }
  return matrix
};