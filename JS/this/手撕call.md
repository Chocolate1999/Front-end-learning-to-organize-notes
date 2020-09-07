```javascript
Function.prototype.myCall = function(ctx){
    //判断调用者是否为函数
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    //不传参默认为window
    ctx = ctx || window;
    //新增fn属性，将值设置为需要调用的函数
    ctx.fn = this;
    //将arguments转换为数组将call的传参提取出来 [...arguments]
    const args = Array.from(arguments).slice(1);
    //传参调用函数
    const res = ctx.fn(...args);
    //删除函数
    delete ctx.fn;
    //返回执行结果
    return res;
}
function func(age){
    console.log(this.name+" "+age);
}
var obj = {
    name: 'A'
}
func.myCall(obj,12);
```
![](https://img-blog.csdnimg.cn/20200605220324660.png)
