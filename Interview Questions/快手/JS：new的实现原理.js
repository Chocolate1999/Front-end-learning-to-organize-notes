/* new实现原理 */
/* 
Object.create(..)和new(..)的内部实现
https://juejin.im/post/6844903717091672077
*/

let myNew = (fn,...args)=>{
  let context = Object.create(fn.prototype)
  let res = fn.apply(context,args)
  if(typeof res === 'object' && res !== null) return res
  return context
}

function Foo(name, age,friends) {
  this.name = name;
  this.age = age;
  this.friends = friends
}

Foo.prototype.getName = function() {
  console.log(this.name)
  console.log(this.age)
  console.log(this.friends)
}

let f1 = myNew(Foo,'Chocolate',21,['a','b','c'])
let f2 = myNew(Foo,'Hack',20,['a','b','c','d'])
f2.friends = ['a','b','c','d']
f1.getName()