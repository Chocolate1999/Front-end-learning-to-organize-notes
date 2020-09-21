// function defineProperty(){
//   var _obj = {};
//   Object.defineProperties(_obj,{
//     a: {
//       value: 1
//     },
//     b: {
//       value: 2
//     }
//   })
//   return _obj;
// }
// var obj = defineProperty();
// console.log(obj);


// function defineProperty(){
//   var _obj = {};
//   Object.defineProperties(_obj,{
//     a: {
//       value: 1,
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     b: {
//       value: 2
//     }
//   })
//   return _obj;
// }
// var obj = defineProperty();
// obj.a = 5;
// console.log(obj);
// for(var k in obj){
//   console.log(k + ':' + obj[k]);
// }
// delete obj.a;
// console.log(obj);

// function defineProperty(){
//   var _obj = {};
//   var a = 1;
//   Object.defineProperties(_obj,{
//     a: {
//       get(){
//         return 'the value of a is ' + a;
//       },
//       set(newVal){
//         console.log('the set value is' + newVal);
//       }
//     },
//     b: {
//       value: 2
//     }
//   })
//   return _obj;
// }
// var obj = defineProperty();
// console.log(obj.a);
// obj.a = 1;


// function DataArr() {
//   var _val = null,
//     _arr = [];
//   Object.defineProperty(this, 'val', {
//     get: function () {
//       return _val;
//     },
//     set: function (newVal) {
//       _val = newVal;
//       _arr.push({ val: _val });
//       console.log('A new value ' + _val + ' hash been pushed to _arr');
//     }
//   });
//   this.getArr = function () {
//     return _arr;
//   }
// }
// var dataArr = new DataArr();
// dataArr.val = 123;
// dataArr.val = 234;
// console.log(dataArr.getArr());

/* proxy */

// let obj = new Proxy(target, handler);

// var target = {
//   a: 1,
//   b: 2
// }
// let proxy = new Proxy(target, {
//   get(target, prop) {
//     console.log('This is property value ' + target[prop]);
//   },
//   set(target, prop, newVal) {
//     target[prop] = newVal;
//   }
// })
// proxy.a = 3;
// proxy.a;
// console.log(target);

// let fn = function () {
//   console.log('I am a function.');
// }

// fn.a = 123;

// let newFn = new Proxy(fn, {
//   get(fn, prop) {
//     return fn[prop] + 'This is a Proxy return';
//   }
// })
// console.log(newFn.a);
// let arr = [{ name: 'Chocolate', age: 21 }, { name: 'jack', age: 20 }];

// let persons = new Proxy(arr, {
//   get(arr, prop) {
//     return arr[prop];
//   },
//   set(arr, prop, newVal) {
//     arr[prop] = newVal;
//   }
// })
// console.log(persons[1]);
// persons[2] = { name: 'leo', age: 18 };
// console.log(persons, arr);

