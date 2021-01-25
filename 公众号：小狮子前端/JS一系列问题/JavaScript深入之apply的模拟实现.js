Function.prototype.myApply = function (context = window, arr) {
  context.fn = this;
  var result = context.fn(...arr);
  delete context.fn
  return result;
}

// 测试一下
var foo = {
  value: 1
};

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

bar.myApply(foo, ['kevin', 18]);
// kevin
// 18
// 1