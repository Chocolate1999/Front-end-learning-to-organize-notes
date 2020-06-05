```javascript
function people(name){
    this.name=name;
}
people.prototype.sayName=function(){
    console.log(this.name)
}
function person(name,age){
    people.call(this,name);
    this.age=age;
}

person.prototype = Object.create(people.prototype);
person.prototype.constructor = person;

person.prototype.sayAge=function(){
    console.log(this.age);
}

var p1 = new person('A',12);
p1.sayName();
p1.sayAge();
console.log(p1);
```
![](https://img-blog.csdnimg.cn/20200605182458697.png)
