Function.prototype.myBind = function (context = window) {
  //判断调用者是否为函数
  if (typeof this !== 'function') {
    return new TypeError('Error');
  }
  //保存this调用方法的本身
  const that = this;
  //获取参数
  const args = Array.from(arguments).slice(1);
  //一个空函数，用来维护原型
  var tmp = function () { }
  let fn = function () {
    //由于返回一个函数，因此对于new fn();
    //不能改变this指向
    if (this instanceof fn) {
      return new that(...args, ...arguments);
    } else {
      return that.apply(context, args.concat(...arguments));
    }
  }
  //维护原型
  tmp.prototype = that.prototype;
  fn.prototype = new tmp();
  //返回函数
  return fn;
}
var foo = {
  value: 1,
};
function bar(name, age) {
  this.name = name;
  this.age = age;
  console.log(name);
  console.log(age);
  console.log(this.value);
}
let fn = bar.myBind(foo, 'Chocolate', 18);
fn();
console.log(foo);

// Chocolate
// 18
// 1
// { value: 1, name: 'Chocolate', age: 18 }