var msg = 'Chocolate';
function test() {
  return this.msg;
}
var obj = {
  msg: 'aaa'
}
var res = test(obj);
console.log(res); // 'Chocolate'



// let msg = 'Chocolate';
// function test() {
//   return this.msg;
// }
// var obj = {
//   msg: 'aaa'
// }
// var res = test(obj);
// console.log(res); // 'undefined'