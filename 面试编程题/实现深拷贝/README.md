```js
let obj = {
  a: 1,
  b: {
      c: 2,
      d: 3
  },
  d: new RegExp(/^\s+|\s$/g)
}
// console.log(Object.prototype.toString.call(1).slice(8,-1))
// let deepClone = (obj, map = new WeakMap()) => {
//   // if(obj instanceof Data) return new Data(obj)
//   if(obj instanceof RegExp) return new RegExp(obj)
//   if(obj == null || typeof obj != 'object') return obj
//   if(map.has(obj)){
//     return map.get(obj)
//   }
//   let res = {}
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       res[key] = deepClone(obj[key], map)
//     }
//   }
//   return res
// }

let deepClone = (obj) => {
  // if(obj instanceof Data) return new Data(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(obj == null || typeof obj != 'object') return obj

  let res = {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      res[key] = deepClone(obj[key])
    }
  }
  return res
}
let cloneObj = deepClone(obj)
console.log(cloneObj)
console.log(obj)
```
