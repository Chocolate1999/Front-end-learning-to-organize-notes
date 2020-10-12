const map = new WeakMap();
// 创建一个在每个实例中存储私有变量的对象
const internal = (obj) => {
  if (!map.has(obj)) {
    map.set(obj, {});
  }
  return map.get(obj);
}

class ClassE {
  constructor(name, age) {
    internal(this).name = name;
    internal(this).age = age;
  }
  get userInfo() {
    return '姓名：' + internal(this).name + ',年龄：' + internal(this).age;
  }
}

const classe1 = new ClassE('Chocolate', 18);
const classe2 = new ClassE('Lionkk', 19);

console.log(classe1.userInfo); // 姓名：Chocolate,年龄：18
console.log(classe2.userInfo); // 姓名：Lionkk,年龄：19
/* 无法访问私有属性 */
console.log(classe1.name); // undefined
console.log(classe2.age); // undefined