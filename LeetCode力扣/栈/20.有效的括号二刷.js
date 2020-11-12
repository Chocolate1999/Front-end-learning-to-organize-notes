/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  if (len & 1) return false;
  let stack = [];
  for (let i = 0; i < len; i++) {
      if (s[i] === '(' || s[i] == '{' || s[i] == '[') stack.push(s[i]);
      else if (s[i] == ')' && stack[stack.length - 1] == '(') stack.pop();
      else if (s[i] == '}' && stack[stack.length - 1] == '{') stack.pop();
      else if (s[i] == ']' && stack[stack.length - 1] == '[') stack.pop();
      else return false;
  }
  return !stack.length;
};