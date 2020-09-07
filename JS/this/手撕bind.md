

```javascript
Function.prototype.myBind = function(ctx){
    //判断调用者是否为函数
    if(typeof this !== 'function'){
        return new TypeError('Error');
    }
    //不传默认为window
    ctx = ctx || window;
    //保存this调用方法的本身
    const that = this;
    //获取参数
    const args = Array.from(arguments).slice(1);
    //一个空函数，用来维护原型
    var tmp = function(){}
    let fn = function(){
        //由于返回一个函数，因此对于new fn();
        //不能改变this指向
        if(this instanceof fn){
            return new that(...args,...arguments);
        }else{
            return that.apply(ctx,args.concat(...arguments));
        }
    }
    //维护原型
    tmp.prototype = that.prototype;
    fn.prototype = new tmp();
    //返回函数
    return fn;
}
var obj = {};
function func(name,age){
    this.name = name;
    this.age = age;
}
let fn = func.myBind(obj,'AAA',18);
let obj1 = new fn();
console.log(obj1);
```
![](https://img-blog.csdnimg.cn/20200606091336282.png)
