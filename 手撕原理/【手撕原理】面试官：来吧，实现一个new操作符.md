>实现一个new操作符的具体实现步骤：


- 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
- 然后内部创建一个空对象 obj
- 因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeOf 将两者联系起来。这段代码等同于 obj.proto = Con.prototype
- 将 obj 绑定到构造函数上，并且传入剩余的参数
- 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值

```javascript
/**
 * 创建一个new操作符
 * @param {*} Con 构造函数
 * @param  {...any} args 往构造函数中传的参数
 */
function createNew(con,...args){
    let obj = {};   //创建一个对象，因为new操作符会返回一个对象
    obj.__proto__ = con.prototype;  //将对象与构造函数原型链接起来
    let res = con.apply(obj,args);  //将构造函数中的this指向这个对象，并传递参数
    if(res instanceof Object){  // 判断构造函数返回值是否为对象
        return res;
    }else{
        return obj;
    }
}

function foo(name, age) {
    this.name = name;
    this.age = age;
    //console.log(this); //此时this已经发生变化了
}
var f = createNew(foo,'Chocolate',18);
console.log(f);
```

**注意：**

一、new操作符的几个作用：

- new操作符返回一个对象，所以我们需要在内部创建一个对象
- 这个对象，也就是构造函数中的this，可以访问到挂载在this上的任意属性
- 这个对象可以访问到构造函数原型链上的属性，所以需要将对象与构造函数链接起来
- 返回原始值需要忽略，返回对象需要正常处理

二、new操作符的特点：

- new通过构造函数Test创建处理的实例可以访问构造函数中的属性也可以访问构造函数原型链上的属性，所以：通过new操作符，实例与构造函数通过原型链连接了起来
- 构造函数如果返回原始值，那么这个返回值毫无意义
- 构造函数如果返回对象，那么这个返回值会被正常的使用，导致new操作符没有作用



```javascript
学如逆水行舟，不进则退
```
