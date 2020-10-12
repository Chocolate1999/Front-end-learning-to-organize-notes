class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get userInfo() {
    return '姓名：' + this._name + ',年龄：' + this._age;
  }
}

const handler = {
  get: function (target, key) {
    if (key[0] === '_') { // 访问私有属性，返回一个 error
      throw new Error('Attempt to access private property');
    } else if (key === 'toJSON') {
      const obj = {};
      for (const key in target) { // 只返回公共属性
        if (key[0] !== '_') {
          obj[key] = target[key];
        }
      }
      return () => obj;
    }
    return target[key]; // 访问公共属性，默认返回
  },
  set: function (target, key, value) {
    if (key[0] === '_') {
      throw new Error('Attempt to access private property');
    }
    target[key] = value;
  },
  // 解决私有属性能遍历问题，通过访问属性对应的属性描述符，然后设置 enumerable 为 false
  getOwnPropertyDescriptor(target, key) {
    const desc = Object.getOwnPropertyDescriptor(target, key);
    if (key[0] === '_') {
      desc.enumerable = false;
    }
    return desc;
  }
}

const stu = new Proxy(new Student('Chocolate', 21), handler);

console.log(stu.userInfo);           // 姓名：Chocolate,年龄：21
console.log(stu instanceof Student); // true
console.log(JSON.stringify(stu));  // "{}"
for (const key in stu) {           // No output 不能遍历私有属性
  console.log(key);
}
stu._name = 'Lionkk';                  // Error: Attempt to access private property