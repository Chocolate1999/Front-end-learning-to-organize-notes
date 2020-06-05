```javascript
Function.prototype.myApply = function(ctx){
    //判断调用者是否为函数
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    //不传参默认为window
    ctx = ctx || window;
    //新增fn属性，将值设置为需要调用的函数
    ctx.fn = this;
    let res;
    //判断是是否有参数传入
    if(arguments[1]){
        res = ctx.fn(...arguments[1]);
    }else{
        res = ctx.fn();
    }
    //删除函数
    delete ctx.fn;
    //返回执行结果
    return res;
}
function func(age){
    console.log(this.name+" "+age);
}
var obj = {
    name: 'B'
}
func.myApply(obj,[12]);
```
![](https://img-blog.csdnimg.cn/20200605222646962.png)
