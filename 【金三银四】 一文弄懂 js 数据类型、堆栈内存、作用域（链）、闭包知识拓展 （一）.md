
## 引言
对答如流系列篇，关于**基本数据类型、堆栈内存、作用域作用域链、闭包**


><div>大家好，这里是<font color=chocolate>lionLoveVue</font>，基础知识决定了编程思维，学如逆水行舟，不进则退。金三银四，为了面试也还在慢慢积累知识，Github上面可以直接查看所有面试题整理，<a href="https://github.com/Chocolate1999/lionLoveVue">github传送门</a>，觉得不错，点个Star★，持续更新中。另外，也可以关注微信公众号：<font color=chocolate>小狮子前端Vue</font>，源码以及资料今后都会放在里面。</div>

><div>一直想着成为一个up主，正值时间挺多的，4月份左右面试的面经我会制作视频去分享，赶快捧个场吧。<a href="https://space.bilibili.com/351534170">哔哩哔哩：一百个Chocolate </a></div>



## 关于数据类型的基础知识

##### 基本数据类型（值类型）

```javascript
number string boolean null undefined
```

##### 引用数据类型

```javascript
object:{} [] /^$/  日期对象 Math 实例对象...
function
```


ES6中新增

```javascript
 Symbol  唯一值
```

## NaN介绍
##### 检测方式

typeof 检测数据类型

##### 介绍 
NaN 不是一个有效数字，但是属于number数字类型

##### 注意点

- NaN和谁都不相等，所以检测是否为有效数字需要使用isNaN

- 当把其他数据类型转化为Number类型时候，不能转换的就NaN

- parseInt/Float Number()  数学运算 一些其它比较的时候会出现转换情况

- isNaN调用的是Number()方法来进行隐式转化的

 数组是特殊的对象

## 堆 (heap) 栈 (stack) 内存

##### 百度面试题（浏览器底层处理机制讲解）

下面用一套百度面试题讲解堆栈内存

```javascript
        /*百度面试题*/
        let a=12;
        let b=a;
        b=13;
        console.log(a);  //12

        let a={n:12};
        let b=a;
        b['n']=13;
        console.log(a.n); //13

        let a={n:12};
        let b=a;
        b={n:13};
        console.log(a.n); //12
```

这几个题对于有一定基础的读者来说，应该问题不是很大，直接就能看出答案来。但在讲解之前，我们谈谈这个问题：**浏览器接受我们的代码后，要去执行的话，一定得有底层的处理机制。**

在这里，有些属于我们前端的底层，因此本文只提及一些专业名词，对于有一定基础的同学应该一目了然：

**编译器**（把代码解析成浏览器看得懂的结构）
- 词法解析
- AST抽象语法树
- 构造出浏览器能够执行的代码

**引擎**（v8  / webkit内核）

- 变量提升
- 作用域  / 闭包
- 变量对象
- 堆栈内存
- GO / VO / AO / EC / ECStack
...

##### 第一题（变量赋值的三步操作）
![](https://img-blog.csdnimg.cn/20200321135913270.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

- 变量赋值的三步操作

	创建变量 声明 `declare`
	创建值：基本值直接在栈中创建和存储即可
	让变量和值关联起来（赋值）定义`defined`


##### 第二题（执行上下文环境栈引入）

![](https://img-blog.csdnimg.cn/20200321140243221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

##### 第三题（垃圾回收问题引入）

有了前两个题的基础，对这题应该是轻松解决了。
![](https://img-blog.csdnimg.cn/20200321140323439.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**拓展引入：**
![](https://img-blog.csdnimg.cn/20200321164046850.png)
按照上述情景，请问上述两个堆内存能被收回吗？既然被创建那相对的能被回收吗？

答：不能收回，因为a和b一直引用着这两个堆内存。这个是关于浏览器内存回收机制问题，以及后续会提及到的闭包等，后续文章会有详细介绍，这里就简单提及一下，做知识拓展。

这里我们可以用如下操作，来避免上述问题

```javascript
let a=null,b=null;  //赋值空对象指针
```


学完了前面的三个例题，为了巩固知识点，继续来几个真题磨练磨练，要先独立思考完成后再看后续解析。

##### 阿里面试题和百度面试题（函数和变量的关系知识拓展）

```javascript
        /*阿里面试题*/
        let a = {
            n:10
        };
        let b = a;
        b.m = b = {
            n:20
        };
        console.log(a);
        console.log(b);


        /*360面试题*/
        let x = [12,13];
        function fn(y){
            y[0] = 100;
            y = [100];
            y[1] = 200;
            console.log(y);
        }
        fn(x);
        console.log(x);
```

阿里面试题解析

![](https://img-blog.csdnimg.cn/20200321171552200.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)


360面试题解析


![](https://img-blog.csdnimg.cn/20200321204849810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

知识点拓展
![](https://img-blog.csdnimg.cn/20200321201503247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
在我们执行函数fn(x)时，只要是函数，就会形成一个新的执行上下文（EC），而执行的函数里面会有一个AO（活动变量对象，不是VO，但它们都是变量对象），形成AO时，会进行三步操作：

- 初始化实参集合
- 创建形参变量
- 代码执行

在这一块会有一个注意点：在实参和形参之间，**如果是在非严格模式下形参和实参之间会建立映射机制，而在严格模式下不会建立**，另外，ES6中已经不存在arguments实参集合了。关于严格模式和非严格模式下的区别，请参考如下两段代码：

```javascript
		/*arguments（非严格模式）*/
        function fn(x,y){
            /**
             *arguments = {0:10,1:20} 
             * x=10
             * y=20
             */ 
            console.log(x,y,arguments);
            arguments[0]=100;
            y=200;
            console.log(x,y,arguments);
        }
        fn(10,20);
```

输出结果：
![](https://img-blog.csdnimg.cn/20200321203622332.png)

```javascript
        /*arguments（严格模式）*/
        "use strict";
        function fn(x,y){
            /**
             *arguments = {0:10,1:20} 
             * x=10
             * y=20
             */ 
            console.log(x,y,arguments);
            arguments[0]=100;
            y=200;
            console.log(x,y,arguments);
        }
        fn(10,20);
```
输出结果：

![](https://img-blog.csdnimg.cn/20200321203834271.png)

##### || 和&& 的题型

那下面再来一题 关于|| 和&& 的题型

```javascript
		/*|| 和 && 题型*/
        var x=10;
        ~function(x){
            console.log(x);
            x = x|20 && 30||40;
            console.log(x);
        }();
        console.log(x);
```

![](https://img-blog.csdnimg.cn/20200321211237370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

拓展知识：

A || B ： 当A为真，返回A，否则返回B
A && B : 当A为真，返回B，否则返回A

（这里，可能和我们算法或者Java里面是不一样的，要注意！）


##### 最后一题（垃圾回收机制知识拓展）

```javascript
        /*带参的自执行函数*/
        let x=[1,2];
            y=[3,4];
        ~function(x){
            x.push('A');
            x=x.slice(0);
            x.push('B');
            x=y;
            x.push('C');
            console.log(x,y); //  [3,4,,'C']  [3,4,,'C']  
        }(x);
        console.log(x,y);  // [1,2,'A'] [3,4,'C']
```
![](https://img-blog.csdnimg.cn/20200321222534318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

拓展知识

- 谷歌浏览器的“垃圾回收机制”（内存释放机制）

	浏览器会在空闲的时候，把所有不被占用的堆内存，进行释放和销毁
- IE浏览器的机制
	当前堆被占用一次，记数字1，再被占用一次，数字累加，当取消占用，数字减去1，一直减到0就销毁


## 作用域和作用域链（闭包形成）

##### 作用域（链）题目1（函数与函数执行拓展知识）

请看如下代码：
```javascript
        function A(y){
            let x=2;
            function B(z){
                console.log(x+y+z);
            }
            return B;
        }
        let C=A(2);
        C(3);
```

![](https://img-blog.csdnimg.cn/20200322091558375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

**关于函数与函数执行的拓展知识：**

- 创建函数的时候

	创建了一个堆（存储代码字符串和对应的键值对）
初始化当前函数的作用域
[ [scope] ] = 所在上下文EC中的变量对象VO / AO

- 函数执行的时候

	创建了一个新的执行上下文EC（压缩到栈ECStack里执行）
	初始化this的指向
	初始化作用域链 [ [ scopeChain ] ] = xxx
	创建AO变量对象用来存储变量
	=> arguments => 形参 => 代码执行


**关于上述题目闭包的形成：**

我们知道，当执行代码` let C = A(2);` 时，会执行A函数，执行一个函数，如上文所述，会先创建一个新的执行上下文EC （压缩到ECStack里执行） ，再初始化this的指向，在全局里边，显然this指向window。其次，初始化作用域链，向上找，找到`VO(G)`，然后创建AO变量对象，并且形成了一些`私有变量`，x=2,y=2，对私有变量进行保护。

最后，将函数B返回给到C，此时就形成了闭包，因为原本内部是私有的，当执行完后应该出栈释放，可是C引用了内部B函数，导致一直占用，因此无法被释放，一直压在栈里，这就形成了`闭包` 。
 
<hr/>

##### 作用域（链）题目2（经典）

接着来看一题巩固知识点：

```javascript
        let x=5;
        function fn(x){
            return function (y){
                console.log(y+(++x));
            }
        }
        let f=fn(6); 
        f(7);           //14
        fn(8)(9);       //18
        f(10);          //18 
        console.log(x); //5
```

![](https://img-blog.csdnimg.cn/20200322095031366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20200322095203791.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

这道题难点：要考虑执行后释放问题，并且这道题很好的运用了作用域和作用域链的知识，是一道特别经典的题目。

接着，上一题的改编版本，注意不是一样的，fn() 那里少了一个 x

##### 上一题的改编

```javascript
        let x=5;
        function fn(){
            return function (y){
                console.log(y+(++x));
            }
        }
        let f=fn(6); 
        f(7);           
        fn(8)(9);       
        f(10);          
        console.log(x);
```


这道题，相对来说，比上一题简单一点，可以直接看出答案，就不做分析了。可以做一个自我测试题。


觉得还不够？那最后，再来两道题吧

##### 函数覆盖问题（阿里面试题改编）

```javascript
        /*阿里面试题改编*/
        let a=0,
            b=0;
        function A(a){
            A=function (b) {
                alert(a+b++);
            };
            alert(a++);
        }
        A(1);
        A(2);
```

这道题，其实不是很难，如果有看我之前的文章系列的话，应该就能轻松搞定，然后这里有一个严谨性问题，`alert`，因此是字符串xxx，因为不是`console.log()`的形式。考察的就是`函数覆盖`问题


![](https://img-blog.csdnimg.cn/20200322102306393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

##### this指向问题

```javascript
        var x=3,
            obj={x:5};
        obj.fn = (function (){
            this.x *= ++x;
            return function(y){
                this.x *= (++x)+y;
                console.log(x);
            }
        })();
        var fn=obj.fn;
        obj.fn(6);           //13    
        fn(4);               //234    
        console.log(obj.x,x);//95 234  
```
![](https://img-blog.csdnimg.cn/20200322112715130.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

自执行函数this指向`window`，而在严格模式下，指向`undefined`。  

注意以下计算（默认优先级）：

```javascript
this.x*=(++x)+y => this.x = this.x * ( (++x)+y )
```

**拓展知识**

this执行主体：就是`看谁把它执行的`

- 第一种：函数执行，看前面是否有"点"
 	有点，前面是谁，this就指向谁
 	没有，this指向`window`（严格模式下是`undefined`），自执行函数中的this一般都是指向window

举例：



fn()  this: window

obj.fn()  this: obj

obj.\_proto\_ .fn()  this: obj.\_proto\_

- 第二种：给元素的事件行为绑定方法（DOM0 / DOM2），事件触发，方法会执行，此时方法中的this一般都是当前元素本身

举例：

```javascript
box.onclick = function(){
		//=> this: box
}
```

```javascript
box.addEventListener("click",function(){
		//=> this: box
})
```

特殊情况：IE8以下，基于attachEvent完成DOM2事件绑定，this是不准确的（但现在很少会考察这方面了）

```javascript
box.attachEvent("onclick",function(){
		//=> this: window
})
```

好了，现在你已经具备了基本this指向问题的知识了，本文也快结束了，最后，我们做个“简单”题压压惊，愉快的结束吧~

```javascript
var x=10; //=>window.x=10
var obj = {
	x:20,
	fn:funtion(){
		console.log(this.x);
	}
};
var fn = obj.fn;
var box = document.getElementById("box");
box.x=30;

//输出如下代码的结果
fn();
obj.fn()
box.onclick=function(){
	obj.fn();
}
box.onclick=obj.fn;
```

<hr/>


**温馨提示：**


关于本文源码资料以及最后这个“简单”题答案我会放在微信公众号里，回复`0322`即可获得


Github上面可以直接查看所有面试题整理，<a href="https://github.com/Chocolate1999/lionLoveVue">github传送门</a>，觉得不错，点个Star★，持续更新中。


## 结尾

<font color=chocolate>欢迎关注微信公众号：小狮子前端Vue</font>

谢谢您的支持！✿✿ヽ(°▽°)ノ✿

<div align="center"><img src="https://img-blog.csdnimg.cn/20200320150035731.png"></img></div>

```javascript
学如逆水行舟，不进则退
```

