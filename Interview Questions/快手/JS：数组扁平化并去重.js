/* 将数组扁平化去并除其中重复部分数据，得到一个升序且不重复的数组 */

/*测试代码：console.log( JSON.stringify( flatten([1, 9, [4, [6, 7], 8], [9, 6], [1, [3, 2, [5] ] ] ] ) ) ) // => [1,2,3,4,5,6,7,8,9] */

let arr = [1, 9, [4, [6, 7], 8], [9, 6], [1, [3, 2, [5] ] ] ]

let flatAndSet = (arr) => {
  return Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{return a-b})
}
console.log(flatAndSet(arr))