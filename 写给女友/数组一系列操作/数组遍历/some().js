let res1 = [1, 2, 3, 4, 5].some(function (cur) {
  return cur > 10;
})
console.log(res1); // false

let res2 = [1, 2, 3, 4, 5].some(function (cur) {
  return cur === 1;
})
console.log(res2); // true
