// // function Foo() {}
// // let oldName = Foo.name
// // Foo.name = 'bar'
// // // console.log([oldName, Foo.name]);
// // let a = Foo.prototype
// // let b = new Foo()
// // let c = b.prototype
// // console.log(a === c)


// let name = 'global';
// function getName() {
//  name = 'local';
//  return function() {
//      return name;
//  }
// }
// // let getPrivate = getName();
// getName()
// console.log(name);
// // console.log(getPrivate());



// async function test() {
//   return 1;
// }
// async function call() {
//   const a = test();
//   const b = await test();
//  console.log(a, b)
// }
// call()


for (var i = 1;i <= 5;i ++) {

  setTimeout(function timer() {
  
  console.log(i)
  
  },5)
}
  
  