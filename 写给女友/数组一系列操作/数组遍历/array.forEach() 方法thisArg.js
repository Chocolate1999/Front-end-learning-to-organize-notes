function Foo() {
  this.sum = 0;
  this.cnt = 0;
}
// 在原型上添加一个名为 doSth 方法
Foo.prototype.doSth = function (arr) {
  arr.forEach(function (cur) {
    this.sum += cur;
    this.cnt++;
  }, this) // this 指向实例对象
}

let foo = new Foo();
let arr = [1, 2, 3];
foo.doSth(arr);

console.log(foo.sum, foo.cnt);
// 6 3
// 解释： 6 === (1+2+3)  3 === (1+1+1)