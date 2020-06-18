`apply` 的核心原理：

- 将函数设为对象的属性
- 执行和删除这个函数
- 指定 `this` 到函数并传入给定参数执行函数
- 如果不传参数，默认指向 `window`
```javascript
Function.prototype.myApply= function(content = window){
    content.fn = this; //此时this指向的是调用myApply的函数bar
    let res;
    if(arguments[1]){
        res = content.fn(...arguments[1]);  //函数bar的this已经发生变化，指向content
    }else{
        res = content.fn();  
    }
    delete content.fn;
    return res;
}

var obj = {
    value: 1
};
function foo(name, age) {
    console.log(name)
    console.log(age)
    console.log(this); //此时this已经发生变化了
    console.log(this.value);
}
foo.myApply(obj, ['Chocolate', 18]);
```
**注意**：当apply传入的第一个参数为null时，函数体内的this会指向window。
