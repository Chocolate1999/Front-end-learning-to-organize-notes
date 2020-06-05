```javascript
var obj = {
    name: 'A',
    age: 12
}
console.log(obj.hasOwnProperty('toString'));  //false
console.log(obj.hasOwnProperty('name'));  //true
console.log(obj.hasOwnProperty('age'));  //true
console.log(obj.hasOwnProperty('kk'));  //false
```
![](https://img-blog.csdnimg.cn/20200605183208609.png)
