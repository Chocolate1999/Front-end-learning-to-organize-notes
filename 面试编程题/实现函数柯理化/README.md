```js
let currying = (fn, ...args) => {
  // console.log('fnLen', fn.length)
  // console.log('argsLen', args.length)
  if (fn.length > args.length) {
    let curry = (...arguments) => {
      return currying(fn, ...args, ...arguments)
    }
    return curry
  } else {
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

```
