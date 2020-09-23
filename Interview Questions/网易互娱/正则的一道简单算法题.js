/* 
  对输入的字符串，去除其中的字符'b'以及连续出现的'a'和'c'，例如：
  'aacbd' -> 'ad'
  'aabcd' -> 'ad'
  'aaabbccc' -> ''

*/

function fun(str){
  let res = str.replace(/b+/g,'');
  while(res.match(/(ac)+/)){
    res = res.replace(/ac/,'');
  }
  return res;
}
let str = 'aacbd';
console.log(fun(str));