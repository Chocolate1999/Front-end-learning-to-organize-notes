```js
let isType = (type) => {
  return (obj) => {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}
let isArray = isType('Array')
let isFun = isType('Function')
console.log(isArray([1,2,3]))
console.log(isFun(function(){}))
```
