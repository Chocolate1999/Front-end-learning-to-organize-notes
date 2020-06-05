```javascript
var obj = {
    name: 'A',
    age: 12
}
function fn(){
    console.log(this);
    console.log(arguments);
}
fn.call(obj,'B',2);
fn.apply(obj,['C',3]);
let f1 = fn.bind(obj,['D',4]);
f1();
```
![](https://img-blog.csdnimg.cn/20200605204329353.png)
