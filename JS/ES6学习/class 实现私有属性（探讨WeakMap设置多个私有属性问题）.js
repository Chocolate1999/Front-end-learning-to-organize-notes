/* WeakMap  */
const classE = (function () {
  const _x = new WeakMap();
  const _y = new WeakMap();
  class ClassE {
    constructor(x, y) {
      _x.set(this, x);
      _y.set(this, y);
    }
    getX() {
      return _x.get(this);;
    }
    getY() {
      return _y.get(this);;
    }
  }
  return ClassE;
})();

let classe = new classE(5, 6);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classe._x); // undefined
console.log(classe.getX()); // 5

console.log(classe._y); // undefined
console.log(classe.getY()); // 6