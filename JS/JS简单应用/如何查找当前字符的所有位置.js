/* 查找当前字符 e 在字符串中的所有位置 */
let str = 'Learning is like sailing against the current'
let pos = str.indexOf('e')
let arr = []
while(pos !== -1){
  arr.push(pos)
  pos = str.indexOf('e',pos+1)
}
console.log(arr)