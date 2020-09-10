/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let str = s + s
  console.log(str.indexOf(s,1))
  return (s+s).indexOf(s,1) !== s.length
};
console.log(repeatedSubstringPattern('abab'))