/* Object.freeze()如何冻结对象 */

/* 
  冻结对象Object.freeze()和Object.seal()的区别 
  https://my.oschina.net/mdu/blog/3084233
  
  JavaScript内置一些方法的实现原理--Object.freeze()、instanceof
  https://www.cnblogs.com/caimuguodexiaohongmao/p/11173436.html
*/

let obj = {
  prop: function () {},
  foo: 'bar',
  list: {
    a: 1,
    b: 2,
  },
}
// Object.isFrozen(obj); // === true
let deepFreeze = (obj) => {
  let propsName = Object.getOwnPropertyNames(obj)
  propsName.forEach((item) => {
    let prop = obj[item]
    if (typeof prop === 'object' && typeof prop !== null) deepFreeze(prop)
  })
  return Object.freeze(obj)
}
console.log(deepFreeze(obj))

obj.foo = 'foo'
obj.list.a = 'aaa'
console.log(deepFreeze(obj))

/* freeze方法实现原理的简单模拟 */
function myFreeze(obj) {
  if (obj instanceof Object) {
    Object.seal(obj)
    let p
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        Object.defineProperty(obj, p, {
          writable: false,
        })
        myFreeze(obj[p]) // 递归，实现更深层次的冻结
      }
    }
  }
}
