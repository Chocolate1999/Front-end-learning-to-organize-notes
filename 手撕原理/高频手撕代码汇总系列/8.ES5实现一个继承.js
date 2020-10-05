/* 
寄生组合继承（ES5继承的最佳方式）

所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的形式来继承方法。

只调用了一次父类构造函数，效率更高。避免在子类.prototype上面创建不必要的、多余的属性，与其同时，原型链还能保持不变。

*/

function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'yellow'];
}

Parent.prototype.getName = function(){
  return this.name;
}

function Child(name,age){
  Parent.call(this,name);
  this.age = age;
}

// 寄生组合式继承

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.getAge = function(){
  return this.age;
}

let child = new Child('Chocolate',21);
console.log(child);
console.log(child.getName());
console.log(child.getAge());
/* 
Child {
  name: 'Chocolate',
  colors: [ 'red', 'blue', 'yellow' ],
  age: 21
}
Chocolate
21
*/