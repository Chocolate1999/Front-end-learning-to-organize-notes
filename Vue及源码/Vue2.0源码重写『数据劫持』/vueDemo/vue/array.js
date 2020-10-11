import { ARR_METHODS } from './config';
import observerArr from './observerArr';
var originArrMethods = Array.prototype,  // 取出数组原型
  arrMethods = Object.create(originArrMethods); // 拷贝一份，原因：避免影响到了原来的原型链

// 装饰者模式，重写原型方法
ARR_METHODS.map(function (m) {
  arrMethods[m] = function () {
    // 把arguments 类数组转化成数组
    var args = Array.prototype.slice.call(arguments);
    // 先调用原来的方法
    var rt = originArrMethods[m].apply(this, args);
    console.log('重写数组方法', args);
    var newArr; // 用来存储新增的那一项

    switch (m) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args.slice(2);
        break;
      default:
        break;
    }
    // 如果有新增项，那么需要观察这个新增项
    newArr && observerArr(newArr);
    return rt; // 返回调用原来方法得到的结果
  }
})

export {
  arrMethods
}