/* 原型基础 */

// function Foo(name,age){
//   this.name = name;
//   this.age = age;
// }
// Foo.prototype.sex = '男士'

// var foo = new Foo('Chocolate',21);
// console.log(foo.name); // Chocolate
// console.log(foo.sex); // 男士
// Car.prototype.name = 'Benz';

// function Car() {};
// Car.prototype = {
//   name: 'Math'
// }
// var car = new Car();

// console.log(car.name);

// Professor.prototype.tSkill = 'Java';
// function Professor(){}
// var progessor = new Professor();

// Teacher.prototype = progessor;
// function Teacher(){
//   this.mSkill = 'js';
//   this.success = {
//     alibaba: '28',
//     tencent: '30'
//   }
// }
// var teacher = new Teacher();

// Student.prototype = teacher;
// function Student(){
//   this.pSkill = 'html';
// }

// var student = new Student();
// student.success.baidu = '100';
// student.success.tencent = '50';
// console.log(teacher,student);

// Professor.prototype.tSkill = 'Java';
// function Professor(){}
// var progessor = new Professor();

// Teacher.prototype = progessor;
// function Teacher(){
//   this.mSkill = 'js';
//   this.students = 500;
// }
// var teacher = new Teacher();

// Student.prototype = teacher;
// function Student(){
//   this.pSkill = 'html';
// }

// var student = new Student();
// console.log(student.students);
// student.students++;
// console.log(student, teacher);


// function Car(){
//   this.brand = 'Benz';
// }
// Car.prototype = {
//   brand: 'Mazda',
//   intro: function(){
//     console.log('我是' + this.brand + '车');
//   }
// }
// var car = new Car();
// car.intro();

// var obj = Obeject.create();

// var test = {
//   num: 2
// }

// function Obj(){
// }
// Obj.prototype.num = 1;
// var obj1 = Object.create(Obj.prototype);
// var obj2 = new Obj();
// console.log(obj1);
// console.log(obj2);


// var obj1 = Object.create(null);
// console.log(obj1);

// var obj = Object.create(null);
// obj.num = 1;
// var obj1 = {
//   count: 2
// }
// obj.__proto__ = obj1;
// console.log(obj.count);

// console.log(null.toString()); // TypeError: Cannot read property 'toString' of null

// console.log(undefined.toString()); // TypeError: Cannot read property 'toString' of undefined

// var num = 1;

// console.log(num.toString());

// var num2 = new Number(num);
// console.log(num2);

// var num = 1;
// var obj = {};
// var obj2 = Object.create(null);
// document.write(num);
// document.write(obj);
// document.write(obj2);

function Car(brand,color){
  this.brand = brand;
  this.color = color;
}
var newCar = {};
Car.apply(newCar,['Benz','red']);
console.log(newCar);