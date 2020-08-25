```js
var arr = [1, 1, '1', '1', null, null, 
                undefined, undefined, 
                new String('1'), new String('1'), 
                /a/, /a/,
                NaN, NaN
            ];


使用 Set
let res = [...new Set(arr)]
console.log(res)

// 使用filter
// let res = arr.filter((item,index)=>{
//   return arr.indexOf(item) === index
// })
// console.log(res)

// 使用reduce
// let res = arr.reduce((pre,cur)=>{
//   return pre.includes(cur) ? pre: [...pre,cur]
// },[])
// console.log(res)

//使用Object 键值对
// let obj = {}
// let res = arr.filter((item)=>{
//   // console.log(typeof item+item)
//   return obj.hasOwnProperty(typeof item+item) ? false : (obj[typeof item + item] = true)
// })
// console.log(obj)
// console.log(res)
// console.log(obj.hasOwnProperty('objectnull'))

// let obj = {}
// let res = arr.filter(item=>{
//   return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item+item] = true)
// })
// console.log(res)
```
