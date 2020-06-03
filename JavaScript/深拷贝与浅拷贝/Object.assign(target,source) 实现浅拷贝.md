```javascript
let obj = {
    a:1,
    b:2
}
let obj2 = Object.assign({},obj);
obj.a=2;
console.log(obj2);
console.log(obj2.a);
```
![](https://img-blog.csdnimg.cn/20200603164206213.png)
