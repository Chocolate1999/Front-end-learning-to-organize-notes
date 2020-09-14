// var test = function test1() {
//   var a = 1;
//   console.log(a);
// }
// test()
// test1()

// var test = function() {
//   var a = 1;
//   console.log(a);
// }
// test() // 1

// function test (a,b) {
//   console.log(test.length)  // 形参的长度 2
//   console.log(arguments.length) // 实参的长度 3
// }
// test(1,2,3)

// function test(a, b) {
//   a =3;
//   console.log(arguments[0]);
// }
// test(1,2);

// function test(a, b) {
//   b = 3;
//   console.log(arguments[1]);
// }
// test(1);

// a = 1;
// function test1() {
//   var b = 2;
//   console.log(a)
//   function test2() {
//     var c = 3
//     console.log(b);
//   }
//   test2();
//   console.log(c);
// }
// test1();

/* 函数默认参数 */
// function test(a = 1, b = 1) {
//   console.log(a)
//   console.log(b)
// }
// test()

// function test(a = 1, b) {
//   console.log(a)
//   console.log(b)
// }
// test(undefined, 2)

// function test(a, b) {
//   a = arguments[0] || 1
//   b = arguments[1] || 1
//   console.log(a)
//   console.log(b)
// }
// test(undefined, 2)


