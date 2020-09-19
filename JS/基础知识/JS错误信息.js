// /* JS 错误信息类型 */

// // 1、SyntaxError 语法错误
// // 变量名不规范
// // var 1 = 1;
// // var 1ab = 1;

// // 关键字不可赋值
// new = 5;

// 基本语法错误
// var a = 5:

// 变量或函数未被声明
// test();
// console.log(a);
// 给无法被赋值的对象赋值的时候
// var a = 1 = 2;

// 数组长度赋值为负数
// let arr = [1, 2, 3];
// arr.length = -1;
// console.log(arr);

// 对象方法参数超出范围
// var num = new Number(66.66);
// console.log(num.toFixed(-1));


/* 类型错误 */

// 调用不存在的方法
// 123();


// var obj = {};
// obj.say();

// 实例化原始值
// var a = new 'string';


// eval('var a=1; console.log(a);');


// try {
//   console.log('正常执行1');
//   console.log(a);
//   console.log('正常执行2');
// } catch (error) {
//   console.log(error.name + ':' + error.message);
// // }
// function test(){
//   console.log(this);
// }
// test.call(1);
// 'use strict';
// var obj = {
//   a: 1,
//   a: 2
// }
// console.log(obj.a);

eval('var a=1; console.log(a);');
console.log(a);