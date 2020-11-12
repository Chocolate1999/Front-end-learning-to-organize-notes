/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let ans = [];
  let len = A.length;
  for (let i = 0; i < len; i++) {
      if (i & 1) {
          let tmp;
          while (1) {
              tmp = A.shift();
              if (tmp & 1) break;
              else A.push(tmp);
          }
          ans[i] = tmp;
      } else {
          let tmp;
          while (1) {
              tmp = A.shift();
              if (tmp % 2 == 0) break;
              else A.push(tmp);
          }
          ans[i] = tmp;
      }
  }
  return ans;
};