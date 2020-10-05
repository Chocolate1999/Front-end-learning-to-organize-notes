/* 
Object.freeze冻结一个对象，让其不能再添加/删除属性，
也不能修改该对象已有属性的可枚举性、可配置可写性，
也不能修改已有属性的值和它的原型属性，最后返回一个和传入参数相同的对象。
不可修改、不可删除、不可写，仅可读。
*/

/* 
Object.seal 能让你修改属性的值，但 Object.freeze 不能.
Object.seal：不可修改、不可删除、可写。外加可读。
*/
function myFreeze(obj) {
  // 判断参数是否为Object类型
  if (obj instanceof Object) {
    // 循环遍历对象
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          writable: false // 去掉原型属性,将其writable特性设置为false
        })
        // 封闭对象
        Object.seal(obj);
        // 如果属性值依然为对象，要通过递归来进行进一步的冻结
        myFreeze(obj[key]);
      }
    }
  }
}

let obj = {
  a: 1,
  b: 2
}
myFreeze(obj);
obj.a = 100;
delete obj.a;
console.log(obj);

let list = { a: 1, hobby: ['game', 'coding'] };
Object.freeze(list);
list.a = 100;
delete list.hobby;
console.log(list);


/* 
需要注意的是，使用 Object.freeze 冻结的对象只能保证这个对象的属性不变，
如果对象属性的值还是一个复杂数据类型，那么是可以修改成功的
*/
const person = { name: 'Chocolate', hobby: ['game', 'coding'] };
Object.freeze(person);
person.hobby[1] = 'eat';
console.log(person); // { name: '游荡de蝌蚪', hobby: [ 'game', 'eat' ] }