/* 
Object.create(..)和new(..)的内部实现
https://juejin.im/post/6844903717091672077

https://blog.csdn.net/Liu_yunzhao/article/details/90444235
*/

let myCreate = (obj) => {
  let f = function (){}
  f.prototype = obj
  return new f()
}


var person = {
	friends : ["Van","Louis","Nick"]
};

let p1 = myCreate(person)
p1.friends.push('Chocolate')

let p2 = myCreate(person)
p2.friends.push('Jeff')
console.log(person.friends)

let p3 = Object.create(person)
p3.friends.push('Bob')

let p4 = Object.create(person)
p4.friends.push('Kimi')

console.log(person.friends)

var obj = {a:1}
let p = myCreate(obj)
p.a = 2
console.log(obj.a)


/* Object,create(null) 与 {}区别 */
console.log(Object.create(null))
console.log({})

/* 
create(null)的意思是创建一个指向null的节点对象，这个节点对象和Object.prototype是同级别，
而{}是指向Object.prototype的，如果把null视为根，那么这俩是同一节点，而{}只是个子节点会继承他的爹，而他的爹和create(null)是同一个父亲。

JS原型链直接按照链表结构讲就完事了，和JS不JS没啥关系，然后以树节点描述一下。
{}<---Object.prototype<--- null--->Object.create(null)。链表最后都指向null
*/




