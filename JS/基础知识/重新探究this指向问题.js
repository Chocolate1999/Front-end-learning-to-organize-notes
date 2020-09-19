/* this指向问题 */

// function test(){
//   this.a = 1;
//   console.log(this);
//   console.log(this.a);
// }
// test();
// console.log(a);

// var a = 1;
// function test() {
//   console.log(this);
//   console.log(this.a);
// }
// test();

// function test(a){
//   this.a = a;
//   console.log(this.a);
//   console.log(window.a);
// }
// new test(1);

// function test(a){
//   this.a = a;
//   console.log(this.a);
// }
// var a = 223;
// test.prototype.say = function(){
//   console.log(a);
// }
// test.prototype.say();

// function test(a){
//   this.a = a;
// }
// var a = 223;
// test.prototype.say = function(){
//   console.log(this.a);
// }
// var t = new test(1);
// t.say();