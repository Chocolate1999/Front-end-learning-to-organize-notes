class Father {
  constructor(name){
    this.name = name
  }
  sayHi() {
    console.log('Hello ' + this.name)
  }
}

class Son extends Father {
  constructor(name,age){
    super(name)
    this.age = age
  }
  sayAge(){
    console.log(this.age)
  }
}

const son = new Son('Chocolate',20)
// console.log(son.name)
// console.log(son.age)
// son.sayHi()
// son.sayAge()
// Chocolate
// 20
// Hello Chocolate
// 20

/* 实例原型链 */
console.log(son.__proto__ === Son.prototype) // true
console.log(Son.prototype.__proto__ === Father.prototype) // true
console.log(Father.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
/* 构造函数原型链 */
console.log(Son.__proto__ === Father) // true
console.log(Father.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true