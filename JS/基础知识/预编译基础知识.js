/* 预编译 */
// test()
// function test(){
//   console.log(1)
// }

// console.log(a);
// var a = 1;

// console.log(a)
// function a(a) {
//   var a = 10;
//   var a = function () {

//   }
// }
// var a = 1;

// a = 1;
// console.log(a);

// function test() {
//   var a = b = 1;
// }
// test();
// console.log(b)

// function test(a){
//   console.log(a);
//   var a = 1;
//   console.log(a);
//   function a() {}
//   console.log(a);
//   var b = function(){}
//   console.log(b)
//   function d(){}
// }
// test(2);

// function test(a,b) {
//   console.log(a); // 1
//   c = 0;
//   var c;
//   a = 5;
//   b = 6;
//   console.log(b); // 6
//   function b(){}
//   function d(){}
//   console.log(b) // 6
// }
// test(1)
/*
AO = {
  a: undefined -> 1 -> 5
  b: undefined -> function b(){} -> 6
  c: undefined -> 0
  d: function d(){}
}
*/

// var a = 1;
// function a () {
//   console.log(2)
// }
// console.log(a)
// var b = function() {}
// console.log(a,b)
// function a() {}

// var b = 3;
// console.log(a); // function a(){}
// function a(a) {
//   console.log(a); // function a(){}
//   var a = 2;
//   console.log(a); // 2
//   function a() {}
//   var b = 5;
//   console.log(b); // 5
// }
// a(1);

/*
GO = {
  b: undefined -> 3
  a: undefined -> function a() {}
}
AO = {
  a: undefined -> 1 -> function a(){} -> 2
  b: undefined -> 5
}
*/


// console.log(a)
// function a(a) {
//   var a = 10;
//   var a = function () {

//   }
// }
// var a = 1;
 /*
GO = {
  a: undefined -> function a() { } -> 1
}
*/

// a = 1;
// function test() {
//   console.log(a); 
//   a = 2;
//   console.log(a); 
//   var a =3;
//   console.log(a);
// }
// test();
// var a;

/*
GO = {
  a: undefined -> 1
  test: function(){}
}
AO = {
  a: undefined -> 2 -> 3
}
*/

// function test(){
//   console.log(b); 
//   if(a){
//     var b = 2;
//   }
//   c = 3;
//   console.log(c); 
// }
// var a;
// test();
// a = 1;
// console.log(a); 

/*
GO = {
  a: undefined -> 1
  test: fucntion(){...}
  c: undefined -> 3
}
AO = {
  b: undefined
}
*/

// function test() {
//   return a;
//   a = 1;
//   function a() {}
//   var a = 2;
// }
// console.log(test());

/*
GO = {
  test: function() {...}
}
AO = {
  a: undefined -> function a(){} -> 1 -> 2
}
*/

// function test() {
//   a = 1;
//   function a() {}
//   var a = 2;
//   return a;
// }
// console.log(test())

/*
GO = {
  test: function(){...}
}
AO = {
  a: undefined -> function a(){} -> 1 -> 2
}
*/


a = 1;
function test(e){
  function e(){}
  arguments[0] = 2;
  console.log(e); 
  if(a){
    var b = 3;
  }
  var c;
  a = 4;
  var a;
  console.log(b); 
  f = 5;
  console.log(c); 
  console.log(a); 
}
var a;
test(1);
console.log(a);
console.log(f);

/*
GO = {
  a: undefined -> 1
  test: function(){...}
  f: undefined -> 5
}
AO = {
  e: undefined -> 1 -> function e(){} -> 2
  b: undefined 
  a: undefined -> 4
  c: undefined 
}
*/

// var a = false + 1;
// console.log(a);

// var b = false == 1;
// console.log(b)
// console.log(-true) // -1
// console.log(+undefined) // NaN
// if(typeof(a) && (-true) + (+undefined) + ''){
//   console.log(1);
// }else{
//   console.log(0);
// }
// console.log(typeof(-'123')) // number
// console.log((-true) + (+undefined) + '') // NaN

// if(1+5*'3' === 16){
//   console.log(1);
// }else{
//   console.log(0);
// }

// console.log(!!' ' + !!'' - !!false || '未通过');

// window.a || (window.a = '1')
// console.log(window.a)