/* 类数组 */

// function test(){
//   console.log(arguments);
// }
// test(1,2,3);

// var obj = {
//   '0': 1,
//   '1': 2,
//   '2': 3,
//   'length': 3,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push
// }
// obj.push(7);
// console.log(obj);


// obj.push(7);
// console.log(obj);

// var obj = {
//   '0': 1,
//   '1': 2,
//   '2': 3,
//   'length': 3,
// }
// Object.prototype.push = Array.prototype.push;
// Object.prototype.splice = Array.prototype.splice;
// obj.push(7);
// console.log(obj);

// var obj = {
//   '1': 2,
//   '2': 3,
//   '3': 4,
//   'length': 2,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push
// }
// obj.push(1);
// obj.push(2);
// console.log(obj);

// var person = {
//   '0': '张小一',
//   '1': '张小二',
//   '2': '张小三',
//   'name': '张三',
//   'age': 32,
//   'height': 140,
//   'weight': 180,
//   'length': 3
// }
// Object.prototype.push = Array.prototype.push;
// Object.prototype.splice = Array.prototype.splice;

// console.log(person[1]); // 张小二
// console.log(person.weight);// 180
// function test(){
//   console.log(Array.prototype.slice.call(arguments));
// }
// test(1,2,3);

// var arr = ['d', 'e', 'f']
// Array.prototype.myUnshift = function () {
//   let argArr = Array.prototype.slice.call(arguments);
//   let newArr = argArr.concat(this);
//   return newArr;
// }
// let newArr = arr.myUnshift('a', 'b', 'c');
// console.log(newArr);

/* 数组按照元素的字节数排序 */

// let arr = ['Chocolate','我爱你','OK','杰伦'];
// arr.sort((a,b)=>getBytes(a)-getBytes(b));
// console.log(arr);
// function getBytes(str) {
//   let bytes = str.length;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) > 255) {
//       bytes++;
//     }
//   }
//   return bytes;
// }

/* 封装 typeof */
// 返回值 number string boolean object function 
// undefined 
// function myTypeof(val){
//   let type = typeof(val);
//   let toStr = Object.prototype.toString;
//   if(val === null){
//     return 'null';
//   }else if(type === 'object'){
//     let res = toStr.call(val);
//     res = res.slice(8,-1);
//     res = res[0].toLowerCase() + res.substr(1);
//     return res;
//   }else{
//     return type;
//   }
// }
// console.log(myTypeof(1)); // number
// console.log(myTypeof({name: 'chocolate'})); // object
// console.log(myTypeof([])); // array
// console.log(myTypeof(new Number(1))); // number
// console.log(myTypeof(new String(1))); // string
// console.log(myTypeof(new Boolean(1))); // boolean
// console.log(myTypeof(null)); // null
// console.log(myTypeof(undefined)); // undefined
// console.log(myTypeof(function(){})); // function

/* 数组去重 */
// let arr = [0,0,0,1,1,1,2,3,3,3,'a','b','a'];

// Array.prototype.unique = function(){
//   let tmp = {};
//   let newArr = [];
//   for(let i=0;i<this.length;i++){
//     if(!tmp.hasOwnProperty(this[i])){
//       tmp[this[i]] = this[i];
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// }
// console.log(arr.unique());

/* 闭包回顾 */


// function Test(a, b, c) {
//   var d = 0;
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   function e() {
//     d++;
//     console.log(d);
//   }
//   this.f = e;
// }
// var test1 = new Test();
// test1.f();
// test1.f();
// var test2 = new Test();
// test2.f();

// function test(){
//   console.log(typeof(arguments));
// }
// test(); // 

// var test = function a(){
//   return 'a';
// }
// console.log(typeof(a)); // 

// function test(day) {
//   switch (day) {
//     case 1:
//       console.log('Mon');
//       break;
//     case 2:
//       console.log('Tue');
//       break;
//     case 3:
//       console.log('Wed');
//       break;
//     case 4:
//       console.log('Thu');
//       break;
//     case 5:
//       console.log('Fri');
//       break;
//     case 6:
//       console.log('Sat');
//       break;
//     case 7:
//       console.log('Sun');
//       break;
//     default:
//       console.log('no solution');
//   }
// }



