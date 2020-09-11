/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if(k===0) return []
  if(shorter === longer) return [k*shorter]
  let res = []
  for(let i=k;i>=0;i--){
      let shortCnt = i
      let longCnt = k-i
      let cnt = shortCnt*shorter + longCnt*longer
      res.push(cnt)
  }
  return res
};