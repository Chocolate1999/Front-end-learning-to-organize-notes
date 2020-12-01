function Foo() {
  this.sum = 0;
  this.cnt = 0;
}
// 在原型上添加一个名为 doSth 方法
Foo.prototype.doSth = function (arr) {
  let newArr = arr.map(function (cur) {
    this.sum += cur;
    this.cnt++;
    return cur + 10;
  }, this) // this 指向实例对象
  return newArr;
}

let foo = new Foo();
let arr = [1, 2, 3];

console.log(foo.doSth(arr)); // [ 11, 12, 13 ]
console.log(foo.sum);// 6
console.log(foo.cnt);// 3