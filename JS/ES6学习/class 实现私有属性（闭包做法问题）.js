/* 进阶版闭包带来的问题 */
const classC = (function () {
  let _x;

  class ClassC {
    constructor(x) {
      _x = x;
    }
    getX() {
      return _x;
    }
  }
  return ClassC;
})();

let classc1 = new classC(3);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classc1._x); // undefined
console.log(classc1.getX()); // 3

/* 问题引出：此时新创建一个实例 */
let classc2 = new classC(4);
/* 出现了问题：实例之间会共享变量 */
console.log(classc1.getX()); // 4