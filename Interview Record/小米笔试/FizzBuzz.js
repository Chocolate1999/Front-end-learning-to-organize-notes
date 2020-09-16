/* 

实现 fizzBuzz 函数，参数 num 与返回值的关系如下： 1、如果 num 能同时被 7 和 9 整除，返回字符串 fizzbuzz 2、如果 num 能被 7 整除，返回字符串 fizz 3、如果 num 能被 9 整除，返回字符串 buzz 4、如果参数为空或者不是 Number 类型，返回 false 5、其余情况，返回参数 num
*/

function Solution(num) {
  if(num%7 == 0 && num%9 == 0){
    return 'fizzbuzz';
  }else if(num % 7 == 0){
    return 'fizz';
  }else if(num % 9 == 0){
    return 'buzz';
  }else if(!num || typeof(num) !== 'number'){
    return false;
  }
  return num;
}
let num = 1;
console.log(Solution(num));