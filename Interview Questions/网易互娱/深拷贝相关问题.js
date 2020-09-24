/* JSON.parse(JSON.stringify()) 可以拷贝数据吗？ */

let obj = {
  arr: [1,2,3],
  name: 'Chocolate',
  age: 21
}

let res = JSON.parse(JSON.stringify(obj));
console.log(res); // 可以 { arr: [ 1, 2, 3 ], name: 'Chocolate', age: 21 }