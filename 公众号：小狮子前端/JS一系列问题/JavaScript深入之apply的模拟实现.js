Function.prototype.myApply = function (context = window, arr) {
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  }
  else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push(arr[i]);
    }
    result = context.fn(...args);
  }

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