/* 
柯理化函数含义：是给函数分步传递参数，每次传递部分参数，并返回一个更具体的函数接收剩下的参数，
这中间可嵌套多层这样的接收部分参数的函数，直至返回最后结果。
*/

function add(a, b, c, d) {
  return a + b + c + d;
}

function currying(fn, ...args) {
  if (fn.length === args.length) {
    return fn(...args);
  } else {
    return function (...newArgs) {
      return currying(fn, ...args, ...newArgs);
    }
  }
}

let addSum = currying(add)(1,2);
console.log(addSum(3)(4)); // 10