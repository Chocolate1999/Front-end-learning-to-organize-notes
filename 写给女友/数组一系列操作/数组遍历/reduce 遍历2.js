let arr = [1, 2, 3, 4, 5];
let res = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0)
console.log(res);// 15