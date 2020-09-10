/* reduce将一个对象数组合并成一个对象 */

/* js 对数组的操作，数组对象去重，合并数组
 https://zhuanlan.zhihu.com/p/107295796
  自从学会了 Array.reduce() ，再也离不开它
 https://juejin.im/post/6844904025310117901
*/

let json = [
  { a: 'aaa' ,name: 'Chocolate'},
  { b: 'bbb' },
  { c: 'ccc' },
]

let res = json.reduce((pre,cur)=>{
  for(let key in cur){
    pre[key] = cur[key]
  }
  return pre
},{})

console.log(res)