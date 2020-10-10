/* 约定命名 */
class ClassA {
  constructor(x) {
    this._x = x;
  }
  getX() {
    return this._x;
  }
}

let classa = new ClassA(1);
/* 此时可以访问我们自定义私有属性命名的_x */
console.log(classa._x); // 1
console.log(classa.getX()); // 1


/* 闭包 */
class ClassB {
  constructor(x) {
    let _x = x;
    this.getX = function () {
      return _x;
    }
  }
}
let classb = new ClassB(1);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classb._x); // undefined
console.log(classb.getX()); // 1


/* 进阶版闭包 */
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

let classc = new classC(3);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classc._x); // undefined
console.log(classc.getX()); // 3



/* Symbol */
const classD = (function () {
  const _x = Symbol('x');
  class ClassD {
    constructor(x) {
      this[_x] = x;
    }
    getX() {
      return this[_x];
    }
  }
  return ClassD;
})();

let classd = new classD(4);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classd._x); // undefined
console.log(classd.getX()); // 4
// classd[_x] = 1;
// console.log(classd[_x]); // ReferenceError: _x is not defined


console.log(classd[Object.getOwnPropertySymbols(classd)[0]]); // 4



/* WeakMap  */
const classE = (function () {
  const _x = new WeakMap();
  class ClassE {
    constructor(x) {
      _x.set(this, x);
    }
    getX() {
      return _x.get(this);;
    }
  }
  return ClassE;
})();

let classe = new classE(5);
/* 此时不可以访问我们自定义私有属性命名的_x */
console.log(classe._x); // undefined
console.log(classe.getX()); // 5