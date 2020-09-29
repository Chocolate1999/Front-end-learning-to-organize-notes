/* 编程题：打印出 1 - 10000 之间的所有对称数 例如 121、1331 等 */

/* 方法一 */

let res = [];
for (let i = 1; i <= 10000; i++) {
  let num = i+'';
  let rnum = num.split('').reverse().join('');
  if(num === rnum){
    res.push(num);
  }
}
console.log(res);

/* 方法二 */

let result = [];

let arr = [...Array(10000).keys()];
arr = arr.filter(x=>{
  return x.toString().length>1 && x.toString() === x.toString().split('').reverse().join('');
})
console.log(arr);