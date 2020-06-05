```javascript
// new 生成对象的过程
// 1、生成新对象
// 2、链接到原型
// 3、绑定 this
// 4、返回新对象

function create(fn,...args){
    //创建空对象
    let obj = {};
    obj.__proto__ == fn.prototype;
    let res = fn.apply(obj,args);
    return res instanceof Object ? res:obj;

}
function fn(name,age){
    this.name = name;
    this.age = age;
}

var obj = create(fn,'A',12);
console.log(obj);
```

![](https://img-blog.csdnimg.cn/2020060518040013.png)
