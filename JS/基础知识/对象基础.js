// /* 对象基础知识 */

// var teacher = {
//   name: '张三',
//   age: 32,
//   sex: 'male',
//   height: 176,
//   weight: 130,
//   teach: function(){
//     console.log('I am teaching JS');
//   },
//   smoke: function(){
//     console.log('I am smoking');
//   },
//   eat: function(){
//     console.log('I am having a dinner');
//   }
// }
// /* 查找 */
// console.log(teacher.name);
// teacher.teach();
// teacher.smoke();
// teacher.eat();

// /* 增加 */
// teacher.address = '北京'
// teacher.drink = function(){
//   console.log('I am drinking beer');
// }
// console.log(teacher.address);
// teacher.drink();

// /* 修改 */
// teacher.teach = function(){
//   console.log('I am teaching Vue');
// }
// teacher.teach();

// /* 删除 */
// delete teacher.address;
// delete teacher.teach;
// console.log(teacher);
/* 系统自带的构造函数 */
// var obj = new Object();
// obj.name = '张三';
// obj.sex = '男士';
// console.log(obj);

/* 自定义构造函数 采用大驼峰命名*/
// function Teacher(){
//   this.name = '张三';
//   this.sex = '男士';
//   this.smoke = function(){
//     console.log('I am smoking')
//   }
// }

// var teacher1 = new Teacher();
// var teacher2 = new Teacher();

// teacher1.name = '李四';
// console.log(teacher1.name);
// console.log(teacher2.name);


// function Teacher(opt){
//   this.name = opt.name;
//   this.sex = opt.sex;
//   this.weight = opt.weight;
//   this.course = opt.course;
//   this.smoke = function(){
//     this.weight--;
//     console.log(this.weight);
//   }
//   this.eat = function(){
//     this.weight++;
//     console.log(this.weight);
//   }
// }

// var t1 = new Teacher({
//   name: '张三',
//   sex: '男士',
//   weight: 130,
//   course: 'JS'
// });
// var t2 = new Teacher({
//   name: '李四',
//   sex: '女士',
//   weight: 90,
//   course: 'Vue'
// });
// console.log(t1);
// console.log(t2);


// var a = 'abc';
// console.log(a);

// var aa = new String('abc');
// aa.name = 'aa';
// console.log(aa);


// var bb = aa + 'bcd';
// console.log(bb);

// var a = 123;
// a.len = 3;
// console.log(a.len);

// var b = 'abc';
// console.log(b.length);

// var obj = {
//   name: 'Chocolate'
// }
// console.log(obj.name); // Chocolate
// delete obj.name;
// console.log(obj.name); // undefined

// var b = 'abc';
// console.log(b.length);

// var arr = [1,2,3,4,5];
// arr.length = 3;
// console.log(arr); // 1 2 3


// var name = 'Chocolate';
// name += 10;
// var type = new String(typeof(name));
// if(type.length === 6){
//   type.text = 'string';
// } 
// console.log(type.text);


// function test(a,b,c){
//   var d = 1;
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   function f(){
//     d++;
//     console.log(d);
//   }
//   this.g = f;
// }
// var test1 = new test();
// test1.g(); // 
// test1.g(); // 
// var test2 = new test();
// test2.g(); // 


// var x = 1,
// y = z = 0;

// function add(n){
//   return n = n+1;
// }
// y = add(x);

// function add(n){
//   return n = n+3;
// }
// z = add(x);

// console.log(x,y,z); // 1 4 4

// function foo1(x){
//   console.log(arguments);
//   return x;
// }
// foo1(1,2,3,4,5);

// function foo2(x){
//   console.log(arguments);
//   return x;
// }(1,2,3,4,5);

// (function foo3(x){
//   console.log(arguments);
//   return x;
// })(1,2,3,4,5);

// function b(x,y,a){
//   a = 10;
//   console.log(arguments[2]);
// }
// b(1,2,3);



