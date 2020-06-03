```javascript
function Father(name){
    this.name = name;
    this.type = ["x","y","z"]
}

class Son extends Father{
    constructor(age){
        super("AAA");
        this.age=age;
    }
}

let son1 = new Son(20);
console.log(son1);
```

ES6 的 extend 继承其实就是寄生组合式继承的语法糖。

核心思想：
- extends： 内部相当于设置了 Son.prototype = Object.create(Father.prototype);
- super(): 内部相当于调用了 Father.call(this)

小结：
- 子类只要继承父类，可以不写 constructor ，一旦写了，则在 constructor 中的第一句话
必须是 super 。
- 把父类当做普通方法执行，给方法传递参数，让方法中的 this 是子类的实例。

![](https://img-blog.csdnimg.cn/20200604072243722.png)
