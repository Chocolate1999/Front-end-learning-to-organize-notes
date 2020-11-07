Function.prototype.apply = function (context = window) {
  if (typeof this !== 'function') {
    return new TypeError('error');
  }
  context.fn = this;
  let res;
  if (arguments[1]) {
    res = context.fn(...arguments[1]);
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
}

/* 以下是对实现的分析：

- 首先 context 为可选参数，如果不传的话默认上下文为 window
- 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
- 因为 apply 可以传入数组作为调用函数的参数，所以需要将参数剥离出来
- 然后调用函数并将对象上的函数删除 */