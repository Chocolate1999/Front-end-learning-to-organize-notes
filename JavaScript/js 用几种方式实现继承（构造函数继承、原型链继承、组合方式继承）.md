## 借助构造函数实现继承

```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类与继承</title>
</head>
<body>
    <script>
        function a(){
            this.a=1;
        }
        function b(){
            a.call(this);
            this.b=2;
        }
        console.log(new b);
    </script>
</body>
</html>
```
### 结果
![](https://img-blog.csdnimg.cn/20200516083003723.png)
### 存在问题
上述方式，是通过改变 `a` 构造函数运行时 `this` 指向，指向 `b`，但是 `a` 原型链上的东西没有继承。

例如：
```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类与继承</title>
</head>
<body>
    <script>
        function a(){
            this.a=1;
        }
        a.prototype.ma = function(){
            console.log('aaa');
        }
        function b(){
            a.call(this);
            this.b=2;
        }
        console.log(new b);
    </script>
</body>
</html>
```
![](https://img-blog.csdnimg.cn/20200516083003723.png)
因此，通过构造函数来实现的继承，只能继承父类构造函数的属性，如果原型 `prototype`上面还有方法甚至原型链上的方法，不会继承。

## 借助原型链实现继承

```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类与继承</title>
</head>
<body>
    <script>
        function a(){
            this.a=1;
        }
        function b(){
            this.b=2;
        }
        b.prototype = new a();
        console.log(new b);
    </script>
</body>
</html>
```
### 结果
![](https://img-blog.csdnimg.cn/20200516083646297.png)
### 存在的问题
首先读者请看如下代码：
```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类与继承</title>
</head>
<body>
    <script>
        function a(){
            this.a=1;
            this.arr=[1,2,3,4,5,];
        }
        function b(){
            a.call(this);
            this.b=2;
        }
        b.prototype = new a();
        let b1 = new b();
        let b2 = new b();
        b1.arr.push(100);
        console.log(b1,b2);
    </script>
</body>
</html>
```
![](https://img-blog.csdnimg.cn/20200516090208118.png)
从以上结果来看，当我们修改某一个对象时，该函数所产出的所有新实例都会发生改变，这就造成了 `数据污染` 问题，肯定不是我们想要的。（因为它们引用的是同一个父类实例对象）

## 组合方式实现继承1
```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类与继承</title>
</head>
<body>
    <script>
        function a(){
            this.name='aaa';
            this.arr=[1,2,3,4,5];
        }
        function b(){
            a.call(this);
            this.type='bbb';
        }
        b.prototype = a.prototype;
        let b1 = new b();
        let b2 = new b();
        b1.arr.push(100);
        console.log(b1,b2);
        console.log(b1.constructor);
        console.log(b2.constructor);
    </script>
</body>
</html>
```
### 结果
![](https://img-blog.csdnimg.cn/20200516092019344.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 存在的问题
如上图结果图所示，拿得是父类的原型对象，依旧没有自己的 `constructor`。（和父类的原型对象是同一个对象，导致 `constructor`也指向父类）


## 组合方式实现继承2
```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类与继承</title>
</head>
<body>
    <script>
        function par(){
            this.name='aaa';
            this.arr=[1,2,3,4,5];
        }
        function child(){
            par.call(this);
            this.type='bbb';
        }
        //这里使用Object.create()方法，和之前直接用a.prototype来说，它创建了
        //一个中间对象，和父类不是指向同一个区域了
        //这样就能区分父类和子类的原型对象了，达到父类和子类原型对象的隔离效果
        child.prototype = Object.create(par.prototype);
        //由于隔离了父类子类的原型对象，我们就可以指定子类自己的constructor
        child.prototype.constructor = child;
        let child1 = new child();
        let child2 = new child();
        child1.arr.push(100);
        console.log(child1,child2);
        //判断构造函数
        console.log(child1.constructor);
        console.log(child2.constructor);
    </script>
</body>
</html>
```
### 结果
![](https://img-blog.csdnimg.cn/20200516100609571.png)
