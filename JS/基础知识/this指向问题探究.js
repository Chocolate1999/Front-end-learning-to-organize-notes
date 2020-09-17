// function test(b){
//   this.d = 3;
//   var a = 1;
//   function c(){}
// }
// test(123);
// console.log(d);

// function test(a,b,c){
//   console.log(arguments.callee.length);
// }
// test(1,2,3);

// var sum = (function(n){
//   if(n<=1){
//     return 1;
//   }
//   return n + arguments.callee(n-1);
// })(10);
// console.log(sum);
// test2();
// function test2(){
//   console.log(test2.caller);
// }

// function foo() {
//   bar.apply(null, arguments);
// }
// function bar() {
//   console.log(arguments);
// }
// foo(1, 2, 3, 4, 5);

// function b(x,y,a){
//   a = 10;
//   console.log(arguments[2]);
// }
// b(1,2,3);

// var f = (
//   function f(){
//     return '1';
//   },
//   function g(){
//     return 2;
//   }
// )()
// console.log(typeof f);


// console.log(undefined == null);
// console.log(undefined === null);
// console.log(isNaN('100'));
// console.log(parseInt('1a') == 1);
// console.log(parseInt(true))

// console.log({} == {});
// var obj = {};
// var obj1 = obj;
// console.log(obj == obj1); // true

// var a = '1';
// function test(){
//   var a = '2';
//   this.a = '3';
//   console.log(a);
// }
// test();
// new test();
// console.log(a);

var a = 5;
function test(){
  a = 0;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(a);
}
test(); // 0 5 0
new test(); // 0 undefined 0 

/*
Go = {
  a: undefined -> 5,
  test: function(){...}
}
AO = {
  a: undefined -> 0 
}

*/