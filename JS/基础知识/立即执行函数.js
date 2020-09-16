// function test1(){
//   console.log(1);
// }
// function test2(){
//   console.log(2);
// }
// test2();
// function test3(){
//   test1();
// }
// test3();

// var res = (function(a,b){
//   return a + b;
// }(1,2))
// console.log(res);

// (function(a,b){
//   console.log(a+b);
// })(1,2)

// var test1 = function(){
//   console.log(1);
// }()
// console.log(test1);
// (function (a,b){
//   console.log(a+b);
// }(1,2))

// function test3(){
//   console.log(3);
// }();


// var test1 = function(){
//   console.log(1);
// }()
// console.log(test1);

// var test = function(){
//   console.log(1);
// }
// console.log(test);

// + function test(){
//   console.log(1);
// }()


// function test(){
//   var arr = [];
//   for(var i=0;i<10;i++){
//     arr[i] = function(){
//       console.log(i);
//     }
//   }
//   return arr;
// }
// var myArr = test();
// for(var i=0;i<10;i++){
//   myArr[i]();
// }

// function test() {
//   for (var i = 0; i < 10; i++) {
//     (function() {
//       console.log(i);
//     }())
//   }
// }
// test();

// function test() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     (function (j) {
//       arr[j] = function () {
//         console.log(j);
//       }
//     }(i))
//   }
//   return arr;
// }
// var myArr = test();
// for (var i = 0; i < 10; i++) {
//   myArr[i]();
// }

// var fn = (
//   function test1(){
//     return 1;
//   },
//   function test2(){
//     return '2';
//   }
// )();
// console.log(typeof(fn));
// console.log((1,2));

var a = 10;
if(function b(){}){
  a += typeof(b);
}
console.log(a);