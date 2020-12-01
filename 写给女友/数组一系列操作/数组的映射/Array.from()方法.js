let arr = [1, 2, 3];

let newArr = Array.from(arr, function (cur) {
  return cur + 10;
})
console.log(newArr);// [ 11, 12, 13 ]