let currying = (fn,...args) => {
  if(fn.length>args.length){
    return (...arguments) => {
      return currying(fn,...args,...arguments)
    }
  }else{
    return fn(...args)
  }
}
// let currying = (fn, ...args) =>
//             fn.length > args.length ?
//             (...arguments) => currying(fn, ...args, ...arguments) :
//             fn(...args)

let addSum = (a, b, c) => a + b + c
let add = currying(addSum)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1, 2, 3))
