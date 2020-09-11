/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let res = []
  let lowLen = low.toString().length
  let highLen = high.toString().length
  for(let i=lowLen;i<=highLen;i++){
      for(let j=1;j<=10-i;j++){
          let str = ''
          let num = j
          str += num
          let k = i-1
          while(k--){
              num++
              str += num
          }
          let ans = parseInt(str)
          if(ans>=low && ans<=high){
              res.push(ans)
          }
      }
  }
  return res    
};