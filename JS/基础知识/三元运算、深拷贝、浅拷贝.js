// /* 三元运算 */

// // var str = 89 > 9? ('89' > '9'? '通过了': '内层未通过') : '外层未通过';
// // console.log(str);

// var person1 = {
//   name: 'Chocolate',
//   age: 21,
//   child: {
//     car: ['Benz', 'Mazda'],
//     first: {
//       name: 'cc',
//       age: 10
//     },
//     second: {
//       name: 'dd',
//       age: 11
//     }
//   }
// }

// // var person2 = clone(person1);
// // person2.child.car.push('BYD');
// // console.log(person2);

// // console.log(person1);

// // /* 浅拷贝 */
// // function clone(origin, target) {
// //   var tar = target || {};
// //   for (var key in origin) {
// //     if (origin.hasOwnProperty(key)) {
// //       tar[key] = origin[key];
// //     }
// //   }
// //   return tar;
// // }
// var person2 = deepClone(person1);
// person2.child.car.push('BYD');
// console.log(person2);

// console.log(person1);

// var person3 = JSON.parse(JSON.stringify(person1));
// console.log(person3);

// function deepClone(origin, target) {
//   var tar = target || {};
//   for(var key in origin) {
//     if (origin.hasOwnProperty(key)) {
//       if (typeof (origin[key]) == 'object' && origin[key] !== null) {
//         if (Object.prototype.toString.call(origin[key]).slice(8, -1) == 'Array') {
//           tar[key] = [];
//         } else {
//           tar[key] = {};
//         }
//         deepClone(origin[key], tar[key]);
//       } else {
//         tar[key] = origin[key];
//       }
//     }
//   }
//   return tar;
// }


// function test(){
//   console.log(foo); 
//   var foo = 2;
//   console.log(foo); 
//   console.log(a);
// }
// test();

// function a(){
//   var test;
//   test();
//   function test(){
//     console.log(1);
//   }
// }
// a();

// var name = '222';
// var a = {
//   name: '111',
//   say: function(){
//     console.log(this.name);
//   }
// }
// var fun = a.say;
// fun(); // 
// a.say(); // 
// var b = {
//   name: '333',
//   say: function(fun){
//     fun();
//   }
// }
// b.say(a.say); // 
// b.say = a.say; 
// b.say(); //

// function test(){
//   var marty = {
//     name: 'marty',
//     printName: function(){
//       console.log(this.name)
//     }
//   }
//   var test1 = {
//     name: 'test1'
//   }
//   var test2 = {
//     name: 'test2'
//   }
//   var test3 = {
//     name: 'test3'
//   }
//   test3.printName = marty.printName;
//   marty.printName.call(test1); // 
//   marty.printName.apply(test2); // 
//   marty.printName(); // 
//   test3.printName(); // 
// }
// test();

// var bar = {
//   a: '1'
// }
// function test(){
//   bar.a = 'a';
//   Object.prototype.b = 'b';
//   return function inner(){
//     console.log(bar.a);
//     console.log(bar.b);
//   }
// }
// test()(); // 

function Foo(){
  getName = function(){
    console.log(1);
  }
  return this;
}
Foo.getName = function(){
  console.log(2);
}
Foo.prototype.getName = function(){
  console.log(3);
}
var getName = function(){
  console.log(4);
}
function getName(){
  console.log(5);
}

Foo.getName(); // 
getName(); // 
Foo().getName(); //  
getName(); // 
new Foo.getName(); // 
new Foo().getName(); // 
new new Foo().getName(); // 


/* 2 4 1 1 2 3 3 */