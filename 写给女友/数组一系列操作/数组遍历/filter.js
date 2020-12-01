let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter(function (cur, index) {
  console.log(cur, index);
  return cur % 2 == 0;
})
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

console.log(newArr); // [ 2, 4 ]