/* 数组的常见方法 shift push splice sort every reverse以及说说哪些是更改原数组的方法 */
/* https://blog.csdn.net/yexudengzhidao/article/details/100976127 
   https://juejin.im/post/6844904194919366669
*/

let arr = [1,3,5,2,10]


/* 改变原数组的方法 */

// pop()

// let res = arr.pop()
// console.log(res)
// console.log(arr)

// shift()

// let res = arr.shift()
// console.log(res)
// console.log(arr)

// unshift()
// reverse()
// sort()
// splice()

/* 不改变原数组的方法 */

// concat()
// let res = [100]
// arr.concat(res)
// console.log(arr)

// join()
// arr.join('_')
// console.log(arr)

// slice()
// arr.slice(1,2)
// console.log(arr)

// filter()
// every()
// arr.every(item=>item>5)
// console.log(arr)

// reduce()
let res = arr.reduce((pre,cur)=>{
  return [...pre,cur+1]
},[])
console.log(res)
console.log(arr)