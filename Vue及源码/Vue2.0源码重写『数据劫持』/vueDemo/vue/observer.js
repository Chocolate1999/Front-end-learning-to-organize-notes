import defineReactiveData from './reactive';
import observerArr from './observerArr';
import { arrMethods } from './array';
function Observer(data) {
  // 处理数组
  if (Array.isArray(data)) {
    data.__proto__ = arrMethods; // 将重写数组的prototype替换到data上的prototype
    observerArr(data); // 可能数组里面还有数组，我们还需要再次观察一下
  } else {
    this.walk(data);
  }
}

// 原型上方法 walk
Observer.prototype.walk = function (data) {
  // 响应式需求，我们需要重新定义对象
  // 获取对象中的 key 数组
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      val = data[key];
    // 处理响应式
    defineReactiveData(data, key, val);
  }
}

export default Observer;