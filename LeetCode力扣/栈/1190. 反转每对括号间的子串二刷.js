/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = [''];
  for (let i = 0; i < s.length; i++) {
      if (s[i] == '(') {
          stack.push('');
      } else if (s[i] == ')') {
          let str = stack.pop();
          let tmp = str.split('').reverse().join('');
          stack[stack.length - 1] += tmp;
      } else {
          stack[stack.length - 1] += s[i];
      }
  }
  return stack.pop();
};