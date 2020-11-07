Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    return new TypeError('error');
  }
  const that = this;
  const args = [...arguments].slice();
  return function f() {
    if (this instanceof f) {
      return new that(...args, ...arguments);
    }
    return that.apply(context, args.concat(...arguments));
  }
}

/* 以下是对实现的分析：

- 前几步和之前的实现差不多，就不赘述了
- bind 返回了一个函数，对于函数来说有两种方式调用，一种是直接调用，一种是通过 new 的方式，我们先来说直接调用的方式
- 对于直接调用来说，这里选择了 apply 的方式实现，但是对于参数需要注意以下情况：因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(...arguments)
- 最后来说通过 new 的方式，在之前的章节中我们学习过如何判断 this，对于 new 的情况来说，不会被任何方式改变 this，所以对于这种情况我们需要忽略传入的 this */