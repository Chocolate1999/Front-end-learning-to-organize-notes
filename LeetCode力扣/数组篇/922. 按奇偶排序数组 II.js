/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let ans = []; // 输出结果数组
  let len = A.length;
  for (let i = 0; i < len; i++) {
      if (i & 1) { //拿到奇数项
          let tmp;
          while (1) {
              tmp = A.shift();
              if (tmp & 1) break;
              else A.push(tmp);
          }
          ans[i] = tmp; // 存放当前奇数下标的奇数项
      } else { // 拿到偶数项
          let tmp;
          while (1) {
              tmp = A.shift();
              if (tmp % 2 == 0) break;
              else A.push(tmp);
          }
          ans[i] = tmp; // 存放当前偶数下标的偶数项
      }
  }
  return ans;
};