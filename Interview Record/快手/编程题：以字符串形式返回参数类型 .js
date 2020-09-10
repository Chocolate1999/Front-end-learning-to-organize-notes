/* 编程题：以字符串形式返回参数类型  */

function getArgType(arg){
  let str = Object.prototype.toString.call(arg).slice(8,-1)
  let res = str[0].toLowerCase() + str.substr(1)
  return res
}
console.log(getArgType(null))
console.log(getArgType(undefined))

const a = 1
const b = new Number(1)
console.log(a === b)
console.log(getArgType(a))
console.log(getArgType(b))
console.log(getArgType(new Date(2020,9,10)))
console.log(getArgType(new RegExp(/^\s+|\s$/g)))
