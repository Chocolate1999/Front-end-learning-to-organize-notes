class Student {
  private name;
  private age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get userInfo() {
    return '姓名：' + this.name + ',年龄：' + this.age;
  }
}

const stu = new Student('Chocolate', 21);
console.log(stu.userInfo);           // 姓名：Chocolate,年龄：21