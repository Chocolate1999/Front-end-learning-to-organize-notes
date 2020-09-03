function f() {}
const a = f.prototype,b = Object.getPrototypeOf(f)
console.log(a === b);
