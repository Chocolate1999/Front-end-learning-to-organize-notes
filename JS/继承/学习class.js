class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(`姓名 ${this.name}, 学号 ${this.number}`)
  }
}

const stu = new Student('Chocolate',20)
console.log(stu.name)
console.log(stu.number)
stu.sayHi()