/* WeakMap  */
const classE = (function () {
  const _x = new WeakMap();
  class ClassE {
    constructor(x, y) {
      _x.set(this, x);
      _x.set(this, y);
    }
    getX() {
      return _x.get(this);;
    }
  }
  return ClassE;
})();

let classe = new classE(5, 6);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classe.getX()); // 6
