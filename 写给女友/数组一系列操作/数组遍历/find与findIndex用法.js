let res1 = [1, 2, 3, 4, 5].find(function (cur) {
  return cur > 2;
})
console.log(res1); // 3

let res2 = [1, 2, 3, 4, 5].findIndex(function (cur) {
  return cur > 2;
})
console.log(res2); // 2
