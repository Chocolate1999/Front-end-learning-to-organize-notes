![](https://img-blog.csdnimg.cn/20200315204645980.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### 引言
<hr/>

金三银四，特地整理一份面试题，现介绍本文特色：
1、适合前端，需要面试找工作
2、即将毕业面临实习，积累经验
3、从务实基础到彻底弄懂
4、探索框架源码，研究前端必备算法
5、直击阿里、腾讯、美团、今日头条等大厂原题，逐步引入
6、学完即准备投简历


### BAT/TMD这样的大公司是如何面试的
<hr/>


注意嗷，在这里TMD可不是骂人的话哦，可能你知道BAT，但TMD你知道么？（不知道赶紧去百度！）

T（今日头条）M（美团）D（滴滴）成为了BAT之后互联网江山的新巨头


### 面试题引入
<hr/>

##### 1.BAT笔试题中几道关于堆栈内存和闭包作用域的题

读者可以好好体会一下下面三个例子，可以试着去跑一下

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试</title>
</head>
<body>
    <script>
        //ex1
        let a={},b='0',c=0;
        a[b]='超逸';
        a[c]='博客';
        console.log(a[b]);

        //ex2
        /*let a={},b=Symbol('1'),c=Symbol('1');
        a[b]='超逸';
        a[c]='博客';
        console.log(a[b]);*/

        //ex3
        /*let a={},b={n:'1'},c={m:'2'};
        a[b]='超逸';
        a[c]='博客';
        console.log(a[b]);*/
    </script>
</body>
</html>
```

ex1：数字属性名==字符串属性名 在堆中进行了覆盖

ex2：Symbol是用来创建唯一值
![](https://img-blog.csdnimg.cn/20200316205516807.png)
对象属性名不一定就是字符串，例如下面，还有可能是Symbol
![](https://img-blog.csdnimg.cn/20200316205727421.png)

ex3：所有对象，toString()结果都是如下所述
![](https://img-blog.csdnimg.cn/2020031621050610.png)

那么，和ex1一样，进行了覆盖

<hr/>

从以上三个例子，还能进行拓展：

ex1：数组和对象的区别

ex2：手写Symbol

ex3：Object.prototype.toString()应用  / valueof


接着，来下一题（注意有坑）：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        var test=(function(i){
            return function(){
                alert(i*=2);
            }
        })(2);
        test(5);
    </script>
</body>
</html>
```

上述函数是立即执行自定义函数

![](https://img-blog.csdnimg.cn/20200316212957701.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
答案： 字符串4 （答4不严谨！！！）


下一题

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        var a=0,b=0;
        function A(a){
            A = function (b){
                alert(a + b++);
            };
            alert(a++);
        }
        A(1);
        A(2);
    </script>
</body>
</html>
```
![](https://img-blog.csdnimg.cn/20200317094610523.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

答案： 字符串1和4 （答1和4不严谨！！！）


**上面三个题其实是"开胃菜"，是为了引出下面这个题**

##### 2.对象（数组）的深拷贝和浅拷贝（头条）
- 浅拷贝
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        let obj = {
            a: 100,
            b: [10,20,30],
            c: {
                x: 10
            },
            d: /^\d+$/
        };
        //浅拷贝 ES6以前做法
        let obj2 = {};
        for(key in obj){
            //确定私有，不克隆原型上的
            if(!obj.hasOwnProperty(key)) continue;
            obj2[key]=obj[key];
        }
        console.log(obj,obj2);
        /*ES6中的浅拷贝*/
        let obj3={
            ...obj
        };
        console.log(obj3);
    </script>
</body>
</html>
```
浅拷贝只会克隆一维对象，即key，但是如果对象里面还有对象，就会产生问题：

浅拷贝带来的问题，拷贝出来的一份会修改原地址的值

![](https://img-blog.csdnimg.cn/20200317100811385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
- 深拷贝

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        let obj = {
            a: 100,
            b: [10,20,30],
            c: {
                x: 10
            },
            d: /^\d+$/
        };
        //缺点：函数，正则等会出现问题
        let obj2 = JSON.parse(JSON.stringify(obj));
        console.log(obj2);
    </script>
</body>
</html>
```
带来的问题，举个栗子：
![](https://img-blog.csdnimg.cn/2020031710211692.png)
上述转换过程，只针对Number,String,Boolean,null这四种基本类型

另一种做法：类似于浅拷贝，但是如果有多维的就进行递归操作（这里只做示例，还有function类似）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        let obj = {
            a: 100,
            b: [10,20,30],
            c: {
                x: 10
            },
            d: /^\d+$/
        };
        
        function deepClone(obj){
            //过滤特殊情况
            if(obj === null) return null;
            if(typeof obj !== 'object') return obj;
            if(obj instanceof RegExp){
                return new RegExp(obj);
            }
            if(obj instanceof Date){
                return Date(obj);
            }
            //不直接创建空对象目的：因为克隆的结果和之前保持相同的所属类
            let newObj = new obj.constructor;
            for(key in obj){
                if(obj.hasOwnProperty(key)){
                    newObj[key] = deepClone(obj[key]);
                }
            }
            return newObj;
        }
        let obj2=deepClone(obj);
        console.log(obj,obj2);
        console.log(obj === obj2);
        console.log(obj.c === obj2.c)
    </script>
</body>
</html>
```

![](https://img-blog.csdnimg.cn/2020031710391390.png)

##### 3.一道关于面向对象面试题引发的血案（阿里）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        function Foo(){
            getName=function(){
                console.log(1);
            };
            return this;
        }
        Foo.getName = function (){
            console.log(2);
        };
        Foo.prototype.getName = function (){
            console.log(3);
        };
        var getName = function(){
            console.log(4);
        };

        function getName(){
            console.log(5);
        }

        Foo.getName();
        getName();
        Foo().getName();
        getName();;
        new Foo.getName();
        new Foo().getName();
        new new Foo().getName();
    </script>
</body>
</html>
```
这个题特别有价值，有关变量提升，js运算符优先级等


所谓变量提升，就是var和function这个时代，在当前执行上下文下，所有代码执行之前，把我们带var，function关键字的提前的声明（创建）和定义（赋值），带var的能够提前声明，带function能够直接声明+定义。

![](https://img-blog.csdnimg.cn/20200317112021362.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
Foo().getName()  其中分两步执行，Foo()表示普通函数执行


new Foo.getName();     //表示无参new
new Foo().getName();    //表示有参new


![](https://img-blog.csdnimg.cn/20200317134540510.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
结合上表，new Foo.getName();   先执行成员访问 Foo.getName() 然后再new

new Foo().getName(); 先执行 new 得到 xxx（此时得到一个实例，实例的话就看prototype上的）， 然后再 xxx.getName()


new new Foo().getName();

先执行new Foo() 得到一个实例 xxx ，此时new xxx.getName() 此时是无参列表，那先算成员访问 xxx.getName() （即找prototype上的）得到3  然后再new 结果不变

输出结果：
![](https://img-blog.csdnimg.cn/20200317132550219.png)


##### 4.一道面试题让你彻底掌握JS中的Event Loop（头条）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>挑战js面试题</title>
</head>
<body>
    <script>
        async function async1(){
            console.log('async1 start');
            await async2();
            console.log('async1 end');
        }
        async function async2(){
            console.log('async2');
        }
        console.log('script start');
        setTimeout(function(){
            console.log('setTimeout');
        },0)
        async1();
        new Promise(function (resolve){
            console.log('promise1');
            resolve();
        }).then(function(){
            console.log('promise2');
        });
        console.log('script end');
    </script>
</body>
</html>
```
<font color=red>浏览器是多线程的，而js是单线程的</font>

为了解决同步和异步问题，浏览器提供了一个事件队列 Event Queue，根据特征不同，分为微任务和宏任务队列 

执行顺序是：主线程代码 > 微任务 > 宏任务 
![](https://img-blog.csdnimg.cn/20200317113553433.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
输出结果：
![](https://img-blog.csdnimg.cn/2020031711404345.png)

宏任务：
><div>定时器例如setTimeout（异步）、事件绑定</div>

微任务：

><div>await（异步，执行x函数并等待返回结果，有结果再执行下面代码）
><div> resolve() / reject() 执行的时候把 then / catch 中的代码执行</div>
><div>promise、async</div>

new Promise（同步）会立即执行



```javascript
学如逆水行舟，不进则退
```
