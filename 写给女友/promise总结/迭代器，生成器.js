var arr = [1, 2, 3, 4];
var str = '123';
var obj = { a: 1, b: 2 };
// 遍历数组
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 遍历字符串
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// 遍历数组
arr.forEach(function (item) {
  console.log(item);
})
// 遍历对象
for (let key in obj) {
  console.log(key, obj[key]);
}

function test() {
  console.log([...arguments]);
}
test(1, 2, 3);