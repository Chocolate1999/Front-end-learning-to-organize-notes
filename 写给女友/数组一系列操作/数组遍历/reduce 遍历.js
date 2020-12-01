let arr = [3, 5, 7, 1, 2];
let res = arr.reduce(function (acc, cur, index, arr) {
  console.log(acc, cur, index, arr);
  return acc + cur;
}, 0)
// 0 3 0 [ 3, 5, 7, 1, 2 ]
// 3 5 1 [ 3, 5, 7, 1, 2 ]
// 8 7 2 [ 3, 5, 7, 1, 2 ]
// 15 1 3 [ 3, 5, 7, 1, 2 ]
// 16 2 4 [ 3, 5, 7, 1, 2 ]
console.log(res);
// 18

