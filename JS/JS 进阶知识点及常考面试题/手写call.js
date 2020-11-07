Function.prototype.call = function (context = window) {
  if (typeof this !== 'function') {
    return new TypeError('error');
  }
  context.fn = this;
  const args = [...arguments].slice(1);
  const res = context.fn(...args);
  delete context.fn;
  return res;
}

/* 以下是对实现的分析：

- 首先 context 为可选参数，如果不传的话默认上下文为 window
- 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
- 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
- 然后调用函数并将对象上的函数删除 */