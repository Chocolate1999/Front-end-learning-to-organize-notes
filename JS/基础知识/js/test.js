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

// var obj = {a:1,b:2};
// // 1.获取原型 [[GetPrototypeOf]]
// var proto = Object.getPrototypeOf(obj);
// console.log(proto);
// console.log(obj.__proto__);
// console.log(Object.prototype);

// var obj = { a: 1, b: 2 };
// // 2.设置原型 [[SetPrototypeOf]]
// Object.setPrototypeOf(obj, { c: 3, d: 4 });
// // 同样也可以采用如下两种方式，直接赋值
// // obj.__proro__ = xxx;
// // Object.prototype = xxx;
// console.log(obj);

// var obj = { a: 1, b: 2 };
// // 3.获取对象的可拓展性 [[IsExtensible]]
// var extensible = Object.isExtensible(obj);
// console.log(extensible);
// // 冻结属性
// Object.freeze(obj);
// var extensible2 = Object.isExtensible(obj);
// console.log(extensible2);

// var obj = { a: 1, b: 2 };
// Object.seal(obj);
// obj.c = 3;  // 不可修改
// console.log(obj);
// delete obj.a; // 不可删除
// console.log(obj);
// obj.b = 3; // 可写
// console.log(obj);

// var obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.c = 3;  // 不可修改
// console.log(obj);
// delete obj.a; // 不可删除
// console.log(obj);
// obj.b = 3; // 不可写
// console.log(obj);
// for (var key in obj) {
//   console.log(obj[key]);
// }
// var obj = { a: 1, b: 2 };
// // 4.获取自有属性 [[getOwnProperty]]
// Object.setPrototypeOf(obj, { c: 3, d: 4 });
// console.log(Object.getOwnPropertyNames(obj));

// var obj = { a: 1, b: 2 };
// // 5.禁止拓展对象 [[PreventExtensions]]
// Object.preventExtensions(obj);
// obj.c = 3;
// console.log(obj);
// delete obj.a;
// console.log(obj);


// var obj = { a: 1, b: 2 };
// 6.拦截对象操作 [[DefineOwnProperty]]
// Object.defineProperty()

// var obj = { a: 1, b: 2 };
// // 7.判断是否是自身属性 [[HasProperty]]
// console.log(obj.hasOwnProperty('a'));

// var obj = { a: 1, b: 2 };
// // 8.获取对象属性 [[Get]]
// console.log('c' in obj);
// console.log('a' in obj);
// console.log(obj.a);

// var obj = { a: 1, b: 2 };
// // 9.设置对象属性 [[SET]]
// obj.a = 3;
// obj['b'] = 4;
// console.log(obj);


// var obj = { a: 1, b: 2 };
// // 10.删除对象属性 [[Delete]]
// delete obj.a;
// console.log(obj);

// var obj = { a: 1, b: 2 };
// // 11. 枚举 [[Enumerate]]
// for (var k in obj) {
//   console.log(obj[k]);
// }

// var obj = { a: 1, b: 2 };
// // 12.获取键集合 [[OwnPropertyKeys]]
// console.log(Object.keys(obj));

// // 13.调用函数
// var obj = { a: 1, b: 2 };
// function test() { }
// test();
// obj.test = function () { }
// obj.test();
// function Test() { };
// new Test();


