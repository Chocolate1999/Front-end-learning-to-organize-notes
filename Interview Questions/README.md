<!-- TOC -->

- [面试准备——自我介绍](#面试准备自我介绍)
- [一面 / 二面](#一面--二面)
    - [面试技巧](#面试技巧)
- [页面布局](#页面布局)
    - [题目](#题目)
    - [五种解决方式代码](#五种解决方式代码)
    - [展示效果](#展示效果)
    - [知识拓展](#知识拓展)
    - [1、各自的优缺点](#1各自的优缺点)
    - [2、去掉高度，有哪几种布局可以使用？](#2去掉高度有哪几种布局可以使用)
    - [页面布局模块——总结](#页面布局模块总结)
    - [页面布局的变通](#页面布局的变通)
- [CSS盒模型](#css盒模型)
    - [题目](#题目-1)
    - [基本概念](#基本概念)
    - [JS如何获取盒模型对应的宽和高](#js如何获取盒模型对应的宽和高)
    - [实例题（根据盒模型解释边距重叠）](#实例题根据盒模型解释边距重叠)
    - [BFC（边距重叠解决方案）](#bfc边距重叠解决方案)
    - [垂直方向边距重叠问题](#垂直方向边距重叠问题)
- [DOM 事件类](#dom-事件类)
    - [题目](#题目-2)
    - [基本概念：DOM事件的级别](#基本概念dom事件的级别)
    - [DOM事件模型](#dom事件模型)
    - [DOM事件流](#dom事件流)
    - [描述DOM事件捕获的具体流程](#描述dom事件捕获的具体流程)
    - [Event对象的常见应用](#event对象的常见应用)
    - [自定义事件](#自定义事件)
    - [实例分析](#实例分析)
- [HTTP 协议类](#http-协议类)
    - [题目](#题目-3)
    - [HTTP协议的主要特点](#http协议的主要特点)
    - [HTTP报文的组成部分](#http报文的组成部分)
    - [HTTP方法](#http方法)
    - [POST和GET的区别（重点前5条）](#post和get的区别重点前5条)
    - [HTTP状态码](#http状态码)
    - [什么是持久连接](#什么是持久连接)
    - [什么是管线化（加分点）](#什么是管线化加分点)
- [原型链](#原型链)
    - [题目](#题目-4)
    - [创建对象有几种方法](#创建对象有几种方法)
    - [原型、构造函数、实例、原型链](#原型构造函数实例原型链)
    - [instanceof的原理](#instanceof的原理)
    - [new运算符](#new运算符)
- [面向对象](#面向对象)
    - [题目](#题目-5)
    - [类与实例](#类与实例)
    - [类与继承](#类与继承)
- [通信类](#通信类)
    - [题目](#题目-6)
    - [什么是同源策略及限制](#什么是同源策略及限制)
    - [前后端如何通信](#前后端如何通信)
    - [如何创建Ajax](#如何创建ajax)
    - [跨域通信的几种方式（重点）](#跨域通信的几种方式重点)
- [安全类](#安全类)
    - [题目](#题目-7)
    - [CSRF](#csrf)
    - [XSS](#xss)
    - [CSRF与XSS区别](#csrf与xss区别)
- [算法类](#算法类)
    - [题目](#题目-8)
    - [排序](#排序)
    - [堆栈、队列、链表](#堆栈队列链表)
    - [递归](#递归)
    - [波兰式和逆波兰式](#波兰式和逆波兰式)
    - [关于算法的心得](#关于算法的心得)
- [二面 / 三面](#二面--三面)
    - [面试技巧](#面试技巧-1)
- [渲染机制](#渲染机制)
    - [题目](#题目-9)
    - [什么是DOCTYPE及作用](#什么是doctype及作用)
    - [浏览器渲染过程](#浏览器渲染过程)
    - [重排Reflow](#重排reflow)
    - [重绘Repaint](#重绘repaint)
- [js运行机制](#js运行机制)
    - [题目](#题目-10)
    - [如何理解JS的单线程](#如何理解js的单线程)
    - [什么是任务队列](#什么是任务队列)
    - [什么是Event Loop](#什么是event-loop)
    - [总结](#总结)
- [页面性能](#页面性能)
    - [题目](#题目-11)
    - [异步加载](#异步加载)
    - [浏览器缓存](#浏览器缓存)
- [错误监控](#错误监控)
    - [题目](#题目-12)
    - [前端错误的分类](#前端错误的分类)
    - [错误的捕获方式](#错误的捕获方式)
    - [上报错误的基本原理](#上报错误的基本原理)
- [三面 / 四面](#三面--四面)
    - [面试技巧](#面试技巧-2)
- [结尾](#结尾)

<!-- /TOC -->
## 面试准备——自我介绍

## 一面 / 二面
### 面试技巧
- 准备要充分
- 知识要系统
- 沟通要简洁
- 内心要诚实
- 态度要谦虚
- 回答要灵活

## 页面布局

### 题目

**假设高度已知，请写出三栏布局，其中左、右栏宽度各为300px，中间自适应**

![](https://img-blog.csdnimg.cn/20200402113527886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 五种解决方式代码
- 浮动解决方式
- 绝对定位解决方式
- flexbox解决方式
- 表格布局
- 网格布局


```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Layout</title>
    <style>
        html *{
            padding: 0;
            margin: 0;
        }
        .layout{
            margin-top: 20px;
        }
        .layout article div{
            min-height: 100px;
        }
    </style>
</head>
<body>
    <!-- 浮动解决方式 -->
    <section class="layout float">
        <style>
            .layout.float .left{
                float: left;
                width: 300px;
                background: red;
            }
            .layout.float .right{
                float: right;
                width: 300px;
                background: blue;
            }
            .layout.float .center{
                background: yellow;
            }
        </style>
        <article class="left-right-center">
            <div class="left"></div>
            <div class="right"></div>
            <div class="center">
                <h1>浮动解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
            </div>
        </article>
    </section>
    <!-- 绝对定位解决方式 -->
    <section class="layout absolute">
        <style>
            .layout.absolute .left-center-right>div{
                position: absolute;
            }
            .layout.absolute .left{
                left: 0;
                width: 300px;
                background: red;
            }
            .layout.absolute .center{
                left: 300px;
                right: 300px;
                background: yellow;
            }
            .layout.absolute .right{
                right: 0;
                width: 300px;
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>绝对定位解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- flexbox解决方式 -->
    <section class="layout flexbox">
        <style>
            .layout.flexbox{
                margin-top: 140px;
            }
            .layout.flexbox .left-center-right{
                display: flex;
            }
            .layout.flexbox .left{
                width: 300px;
                background: red;
            }
            .layout.flexbox .center{
                flex: 1;
                background: yellow;
            }
            .layout.flexbox .right{
                width: 300px;
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>flexbox解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- 表格布局 -->
    <section class="layout table">
        <style>
            .layout.table .left-center-right{
                width: 100%;
                display: table;
                height: 100px;
            }
            .layout.table .left-center-right>div{
                display: table-cell;
            }
            .layout.table .left{
                width: 300px;
                background: red;
            }
            .layout.table .center{
                background: yellow;
            }
            .layout.table .right{
                width: 300px;
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>表格解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- 网格布局 -->
    <section class="layout grid">
        <style>
            .layout.grid .left-center-right{
                display: grid;
                width: 100%;
                grid-template-rows: 100px;
                grid-template-columns: 300px auto 300px;
            }
            .layout.grid .left{
                background: red;
            }
            .layout.grid .center{
                background: yellow;
            }
            .layout.grid .right{
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>网格解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
            </div>
            <div class="right"></div>
        </article>
    </section>
</body>
</html>
```


### 展示效果
![](https://img-blog.csdnimg.cn/20200402134031526.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 知识拓展
上述5中解决方式是比较常见的，但是我们`不能只局限于为了问答而问答，我们应该从此基础上升华一下问题。`


答完了这5种常见方式，并不代表我们页面布局这一话题就结束了，面试官可能还会延伸我们的问题，比如：

- 这5种布局方式各自有什么优点和缺点？
- 如果`高度已知`条件去掉，考虑纵向，那么对于中间内容过多，导致中间格子撑开，此时需要左右跟着撑开，以上5种方式哪几种还能使用？
- 这5中方式的兼容性如何？如果让你选择一种最优的去应用于业务，你会选择哪种方式？


那么，接下来就来围绕这三个问题来讲解：
### 1、各自的优缺点


**① 对于浮动：**

**优点**

兼容性比较好，把清除浮动和其它浮动周边元素的关系处理好的话，那么它的兼容性是挺不错的。

**缺点**

设置浮动之后，脱离了文档流，处理不好的话，会带来很多问题，这是它本身的局限性。

**② 对于绝对定位：**

**优点**

快捷，不容易出问题

**缺点**

本身脱离了文档流，就会导致子元素跟着脱离文档流。因此，导致绝对定位的`有效性`、`可使用性`比较差。


**③ 对于flexbox**

css3中推出的flex布局，就是为了解决上述两种方式不足而出现的，算是比较完美的一种方式，尤其是对于移动端

**④ 对于表格布局**

**优点**

尽管多数人吐槽表格布局，但其实，表格布局在很多场景都适用的。比如上文写的三栏布局设计当中，表格布局是不是很轻松就实现了呢？

同时，表格布局的兼容性是非常好的，当用`flex`解决不了问题的时候，对于PC端  `IE8`是不支持`flex`的，此时就可以尝试表格布局

**缺点**

除开历史上一些诟病外，还有一个：

比如我们把三栏理解成为三个小单元格，那么当其中某一个单元格高度超出的时候，其余两侧也会跟着调整，于是对于有些场景是不合适的。因此，对于不同场景，我们可以在`flex`和`表格`布局进行选优操作

**⑤ 对于网格布局**

这一块的话，算是新热点，也是经历了一段时间的演变，从上文代码来看的话，通过网格布局我们能让代码更加简单、方便实现逻辑。在面试的时候提到也可以说明你比较关注新的事物，主动学习能力不错。

<hr/>

当然，以上表述有部分个人思考，也有现常说的优缺点，读者可以根据研究布局方式进行深入思考，学习更多的使用场景以及优缺点，其次，欢迎提出新的解决方案及相关知识点，后续进行补充。



### 2、去掉高度，有哪几种布局可以使用？
这里，我们就采用增加高度方式来看看，还有哪些布局能使用。（中间区域增加几个p标签）

**源代码**

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Layout</title>
    <style>
        html *{
            padding: 0;
            margin: 0;
        }
        .layout{
            margin-top: 20px;
        }
        .layout article div{
            min-height: 100px;
        }
    </style>
</head>
<body>
    <!-- 浮动解决方式 -->
    <section class="layout float">
        <style>
            .layout.float .left{
                float: left;
                width: 300px;
                background: red;
            }
            .layout.float .right{
                float: right;
                width: 300px;
                background: blue;
            }
            .layout.float .center{
                background: yellow;
            }
        </style>
        <article class="left-right-center">
            <div class="left"></div>
            <div class="right"></div>
            <div class="center">
                <h1>浮动解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
            </div>
        </article>
    </section>
    <!-- 绝对定位解决方式 -->
    <section class="layout absolute">
        <style>
            .layout.absolute .left-center-right>div{
                position: absolute;
            }
            .layout.absolute .left{
                left: 0;
                width: 300px;
                background: red;
            }
            .layout.absolute .center{
                left: 300px;
                right: 300px;
                background: yellow;
            }
            .layout.absolute .right{
                right: 0;
                width: 300px;
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>绝对定位解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- flexbox解决方式 -->
    <section class="layout flexbox">
        <style>
            .layout.flexbox{
                margin-top: 140px;
            }
            .layout.flexbox .left-center-right{
                display: flex;
            }
            .layout.flexbox .left{
                width: 300px;
                background: red;
            }
            .layout.flexbox .center{
                flex: 1;
                background: yellow;
            }
            .layout.flexbox .right{
                width: 300px;
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>flexbox解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- 表格布局 -->
    <section class="layout table">
        <style>
            .layout.table .left-center-right{
                width: 100%;
                display: table;
                height: 100px;
            }
            .layout.table .left-center-right>div{
                display: table-cell;
            }
            .layout.table .left{
                width: 300px;
                background: red;
            }
            .layout.table .center{
                background: yellow;
            }
            .layout.table .right{
                width: 300px;
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>表格解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- 网格布局 -->
    <section class="layout grid">
        <style>
            .layout.grid .left-center-right{
                display: grid;
                width: 100%;
                grid-template-rows: 100px;
                grid-template-columns: 300px auto 300px;
            }
            .layout.grid .left{
                background: red;
            }
            .layout.grid .center{
                background: yellow;
            }
            .layout.grid .right{
                background: blue;
            }
        </style>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>网格解决方式</h1>
                1.这是三栏布局的正中间部分
                2.这是三栏布局的正中间部分
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
                <p>增加高度</p>
            </div>
            <div class="right"></div>
        </article>
    </section>
</body>
</html>
```

**展示效果**

这里，图片可能不是特别清楚，读者可以跑一遍上述代码，在浏览器打开使用会更好一点嗷~

![](https://img-blog.csdnimg.cn/20200402153629282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

**总结**

从上述显示效果来看的话，改变了高度，用`flex`和`表格`布局还能继续使用。

对于第一块，也就是浮动布局那一块，我们还可以进行知识拓展：


- 为什么会有两段文字跑到最左边去了呢？

	答：因为向左浮动的原因，上面文字被左边红色部分挡住了，当内容超过高度后，就会往左边移动了。

- 那你怎么将多余的两段文字接着上述文字显示，而不是向左移动？

	答：这就扯到了BFC的问题，清楚浮动等等，这里就不再进行拓展了，不然这篇文章没法完结啦。。。


### 页面布局模块——总结

- 语义化掌握到位
- 页面布局深刻理解
- CSS基础扎实
- 思维灵活且积极上进
- 代码书写规范


### 页面布局的变通

**三栏布局**

- 左右宽度固定，中间自适应
- 上下高度固定，中间自适应

**两栏布局**

- 左宽度固定，右自适应
- 右宽度固定，左自适应
- 上宽度固定，下自适应
- 下宽度固定，上自适应


## CSS盒模型

### 题目

**谈谈你对CSS盒模型的认识**

- 基本概念：标准模型+IE模型

- 标准模型和IE模型的区别

- CSS如何设置这两种盒模型

- JS如何设置获取盒模型对应的宽和高

- 实例题（根据盒模型解释边距重叠）

- BFC（边距重叠解决方案）

<hr/>

以上内容知识点由浅入深，知识点理论从CSS->JS->CSS




<a href="https://blog.csdn.net/weixin_42429718/article/details/104448450">推荐阅读：这一次，彻底看懂 CSS 盒模型（图文并茂）</a>


### 基本概念

标准盒模型、怪异盒模型（IE盒模型）和flex弹性伸缩盒模型以及多列布局


- 标准盒模型（box-sizing content-box）

<img src="https://img-blog.csdnimg.cn/20200222185449952.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>

- IE盒模型（box-sizing border-box）

content = width+padding+border

<img src="https://img-blog.csdnimg.cn/20200222185613912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>


**<font color=red>附完美回答方式：</font>**

标准盒子模型，即box-sizing content-box，浏览器默认模型，我们所写的width和height并不是最终盒子的宽高，而是content的，盒子的宽高由我们的content+padding+border来组成的，但是这样在做项目时可能会遇到小问题，假如我想构建一个100x100的盒子大小，但是我发现我写的是width和height是100，于是我需要加上padding及border，但是加上去之后，盒子也会相应变大，这就造成改动麻烦。

后面css3中提供了IE盒子模型，能够直接控制盒子的大小。于是项目中大多数用上了IE盒子模型，以及我看过bootstrap以及element-ui源码中大部分也是用的IE盒子模型

><div>以上回答方式，请读者可以好好体会一下，挖掘其中的亮点！</div>

- FLEX盒模型

关于这里可以参考阮一峰老师的文章

<a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">参考：Flex 布局教程：语法篇</a>


- 多列布局（基本上不用）

读者可以适当了解一下，这里就不加以说明了


### JS如何获取盒模型对应的宽和高

①` dom.style.width / height`

这种方法，有一定局限性，只能取内联样式的宽高。

②` dom.currentStyle.width / height`

这种方法，也是有一定局限性，不过我们三种常用css样式都能获取。但是只支持`IE`，其它浏览器不支持

③ `window.getComputedStyle(dom).width / height`

支持所有浏览器，兼容性好

④ `dom.getBoundingClientRect().width / height`

这种方法，一般用于计算元素的绝对位置，根据视窗左上角的点来算的。可以拿到四个元素值：`left`、`top`、`width`、`height`


### 实例题（根据盒模型解释边距重叠）
如下图，有两个盒子，深色的定为父元素，浅色的定位子元素，子元素的高度为`100px`，与父元素的上边距为`10px`，请问父元素实际高度是多少？
![](https://img-blog.csdnimg.cn/20200402165051784.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

结合这个标题的情况，你可能会说是100px，但你也可能就是直接相加，觉得是110px，但都不是面试官觉得满意的回答，因为要看父元素的盒模型是如何设置的，下面来探讨这个问题：

我们在界面里来写一个父子元素的盒子
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS盒模型</title>
    <style>
        html *{
            padding: 0%;
            margin: 0;
        }
    </style>
</head>
<body>
    <section id="sec">
        <style>
            #sec{
                background: #f00;
            }
            .children{
                height: 100px;
                margin-top: 10px;
                background: yellow;
            }
        </style>
        <article class="children">

        </article>
    </section>
</body>
</html>
```

打开浏览器，出现如下界面：
![](https://img-blog.csdnimg.cn/20200402190607634.png)

 我们父级元素貌似没看到，打开开发者工具（按下`F12`）

此时，我们看一下计算属性 `Computed`

![](https://img-blog.csdnimg.cn/20200402192214142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
发现，此时高度是`100px`。


同时，我们也看一下子元素的高度，如下，也是`100px`。
![](https://img-blog.csdnimg.cn/20200402192306678.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

那是不是就是`100px`呢？在回答之前，接着来如下操作，我们修改一个地方：

在父元素样式里设置 `overflow: hidden;`
![](https://img-blog.csdnimg.cn/2020040219294052.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
此时，我们再次查看content，变成了`110px`。
![](https://img-blog.csdnimg.cn/20200402201211584.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
此时，就有疑问了，为什么之前是`100px`，而当我们加了`overflow: hidden;`之后变成了`110px`了呢？


**补充知识点：**

我们常见的边距重叠，有两种情况：

- 父子元素重叠（如上文所述）
- 兄弟之间重叠：比如两个格子，第一个格子下边距30px，第二个上边距5px，会取一个最大值30px作为边距。另外，特殊一点的就是空元素了，会取`margin-top`和`margin-bottom`
的最大值


补充完后，接着回答上一个问题，为什么加了`overflow: hidden;`之后变成了`110px`了呢？

其实，是给父级元素创建了一个`BFC`，这里我们在下文继续讨论。


### BFC（边距重叠解决方案）
**BFC基本概念**：块级格式化上下文

与之并列的一个是IFC（内联格式化上下文）这个不常考，就提一下。

**BFC的原理（渲染规则）**

① 在BFC这个元素的`垂直方向`边距会发生重叠

② BFC的区域不会与浮动元素的box重叠，可用来`清除`浮动布局

③ BFC是一个`独立`的容器，外面的元素不会影响里面的元素，同时，里面的元素不会影响外面的元素。

④ 计算BFC元素高度的时候，`浮动元素也会参与计算`


**怎么创建BFC？**

① `float`值不为none，因为CSS默认为none，只要设置了浮动，当前元素就设置了BFC

② static：静态定位。它是`position`的默认值，一般不设置position属性时，元素会按照正常的文档流进行排列。那么，只要position不为默认值static也是设置了BFC

③ `display`属性，table、table-cell等table相关的，都是设置了BFC

④ `overflow`: auto / hidden

**BFC使用场景**

### 垂直方向边距重叠问题

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS盒模型</title>
    <style>
        html *{
            padding: 0%;
            margin: 0;
        }
    </style>
</head>
<body>
    <section id="sec">
        <style>
            #sec{
                background: #f00;
            }
            .children{
                height: 100px;
                margin-top: 10px;
                background: yellow;
            }
        </style>
        <article class="children">
            
        </article>
    </section>
    <!-- BFC垂直方向边距重叠 -->
    <section id="margin">
        <style>
            #margin{
                background: pink;
                overflow: hidden;
            }
            #margin>p{
                margin: 5px auto 25px;
                background: red;
            }

        </style>
        <p>a</p>
        <p>b</p>
        <p>c</p>
    </section>
</body>
</html>
```

如下图所示，a的顶部只有5px，而b的顶部用到了a的底部25px，因此就造成了边距重叠问题
![](https://img-blog.csdnimg.cn/20200402204846508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
如何消除上述情况？

给子元素创建父元素，让父元素设置BFC

如下图所示，仅需加一个div，然后设置`overflow: hidden`即可

![](https://img-blog.csdnimg.cn/20200402211309341.png)

**效果**

![](https://img-blog.csdnimg.cn/20200402211300463.png)

接下来，来一个左边固定，右边自适应的例子。

```javascript
    <!-- BFC不予float重叠 -->
    <section id="layout">
        <style>
            #layout{
                margin-top: 10px;
                background: red;
            }
            #layout .left{
                float: left;
                width: 100px;
                height: 100px;
                background: pink;
            }
            #layout .right{
                height: 110px;
                background: #ccc;
            }
        </style>
        <div class="left"></div>
        <div class="right"></div>
    </section>
```
**效果**
![](https://img-blog.csdnimg.cn/20200402212208404.png)
从上图可以看到，右边因为宽度设置的高一点，经过浮动重叠到了左边一部分，此时，我们仅需一行代码即可`overflow: auto;`

```javascript
#layout .right{
	height: 110px;
	background: #ccc;
	overflow: auto;
}
```
**效果**
![](https://img-blog.csdnimg.cn/20200402212438518.png)

**计算BFC元素高度的时候，浮动元素也会参与计算**

怎么理解这个概念呢？比如下面代码：

```javascript
    <!-- BFC子元素即使是float也会参与高度计算 -->
    <section id="float">
        <style>
            #float{
                background: green;
            }
            #float .float{
                float: left;
                font-size: 30px;
            }
        </style>
        <div class="float">I am 浮动元素</div>
    </section>
```

**效果**
![](https://img-blog.csdnimg.cn/20200402223151584.png)
我们从上面图片发现，没有父级元素，于是检查一下，发现父级高度为0，因为子元素设置了浮动，高度没有算进去
![](https://img-blog.csdnimg.cn/20200402223510992.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

解决办法，父级元素设置清除浮动，于是形成了一个BFC，然后就会加上子级元素的高度

```javascript
#float{
	background: green;
	overflow: hidden;
}
```

从门再次打开开发者工具（F12），可以看到，父级元素已经有了高度

![](https://img-blog.csdnimg.cn/20200402223829514.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)


## DOM 事件类

### 题目

- 基本概念：DOM事件的级别

- DOM事件模型

- DOM事件流

- 描述DOM事件捕获的具体流程

- Event对象的常见应用

- 自定义事件

### 基本概念：DOM事件的级别

|DMO事件类 | 事件级别     |
|:--------:| :-------------:|
| DOM0 | element.onclick=function(){} |
| DOM2 | element.addEventListener('click', function(){} , false)|
| DOM3| element.addEventListener('keyup', function(){} , false)|

为啥没有DOM1呢？

答：因为DOM1制定的时候，没有设计与事件相关的东西，但不代表DOM1标准不存在

DOM3也是一种事件定义方式，相对来说事件类型增加了，比如鼠标键盘事件等


最后一个`boolean`值表示事件模型是捕获还是冒泡，默认为`false`冒泡，为`true`表示捕获。

### DOM事件模型

分为捕获（从上到下）和冒泡（从目标元素往上）

### DOM事件流

![](https://img-blog.csdnimg.cn/20200403093615164.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
如上图所示，这就是一个事件流，一个`完整的事件流`分为三个阶段：

- 第一阶段是捕获
- 第二阶段是目标阶段，比如说点按钮就是目标阶段，或者说是事件通过捕获到达目标元素
- 第三阶段是从目标元素上传到window对象，也就是冒泡的过程


### 描述DOM事件捕获的具体流程

（冒泡方向与之相反）
![](https://img-blog.csdnimg.cn/2020040309413230.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### Event对象的常见应用
- `event.preventDefault()	`		（阻止默认，例如链接等）
- `event.stopPropagation() `    （阻止冒泡）
- `event.stopImmediateProgation()` 		（事件响应优先级，例如给一个按钮添加两个事件A和B，你想要只执行A，不执行B，就在A的响应函数里添加这个方法，就会阻止B事件的执行）
- `event.currentTarget`		（表示当前所绑定的事件，如下面所述，指向的就是父级元素）
- `event.target	`	（与事件委托相关，把子元素的事件全都转到父级元素上，进行优化，只需绑定一次事件，然而作响应的时候，需要区别是哪个子元素被点击，该方法就可以绑定当前被点击的元素）

### 自定义事件

```javascript
var eve = new Event('custome');
ev.addEventListener('custome',function(){
	console.log('custome');
});
ev.dispatchEvent(eve);
```

`CustomEvent`是为了解决Event事件不能传数据的问题

### 实例分析

上文讲述了相关知识点，下面我们通过代码来简单实现，让抽象的知识更加具体化

**DOM事件捕获的具体流程实例**

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="ev">
        <style>
            #ev{
                width: 300px;
                height: 100px;
                color: #fff;
                text-align: center;
                line-height: 100px;
                background: red;
            }
        </style>
        目标元素
        <script type="text/javascript">
            var ev=document.getElementById('ev');
            //DOM2中定义事件 window
            window.addEventListener('click',function(){
                console.log('window capture')
            },true)
            //document
            document.addEventListener('click',function(){
                console.log('document capture')
            },true)
            //html
            document.documentElement.addEventListener('click',function(){
                console.log('html capture')
            },true)
            //body
            document.body.addEventListener('click',function(){
                console.log('body capture')
            },true)
            //目标元素
            ev.addEventListener('click',function(){
                console.log('ev capture')
            },true)

            /* 自定义事件 */
            var eve = new Event('test');
            ev.addEventListener('test',function(){
                console.log('test dispatch')
            },true)
            setTimeout(function(){
                ev.dispatchEvent(eve);
            },2000)

        </script>
    </div>
</body>
</html>
```

**效果**
![](https://img-blog.csdnimg.cn/2020040311370377.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

## HTTP 协议类

### 题目
- HTTP协议的主要特点

- HTTP报文的组成部分

- HTTP方法

- POST和GET的区别

- HTTP状态码

- 什么是持久连接

- 什么是管线化


### HTTP协议的主要特点
- 简单快速	（每个资源URL是固定的，一个图片或页面地址，统一资源符，只需输入URL即可访问）
- 灵活	（在HTTP协议头部head部分有一个数据类型，通过http协议可以完成不同数据类型的传输）
- 无连接	（连接一次会断掉，不会保持连接）
- 无状态	（客户端和服务端连接两次，不能区分两次连接者身份）


### HTTP报文的组成部分
![](https://img-blog.csdnimg.cn/20200403132018916.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
- 请求行：包含方法、页面地址、HTTP协议版本
- 请求头：key-value值，告诉服务端需要什么内容，要注意什么类型
- 空行：告诉服务端请求头结束，接下来是请求体部分了
- 请求体：数据部分

同理，响应报文

**请求示例**
![](https://img-blog.csdnimg.cn/20200403135448592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
以上第一行就是请求行，包含`GET`方法 / 表示首页  `HTTP/1.1` 表示HTTP协议版本

后面内容都是请求头，都是`key-value`键值对

空行在这里没有显示出来，然后对于请求体就是一些数据部分了。

**响应示例**
![](https://img-blog.csdnimg.cn/20200403135749252.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

第一行是状态行，包含HTTP协议版本，协议状态码200

下面就是响应头了，也是键值对的形式

下面会有一个空行，类似下面这种效果（下面这条分割横线）

<hr/>


### HTTP方法

| 方法 | 作用     |
|:--------:| :-------------:|
| GET | 获取资源 |
| POST| 传输资源|
| PUT| 更新资源|
|     DELETE |  删除资源        |
|    HEAD        |         获取报文首部      |

### POST和GET的区别（重点前5条）
- get在浏览器回退时是无害的，而post会再次提交请求

- get请求会被浏览器主动缓存，而post不会，除非手动设置

- get请求参数会被完整保留在浏览器历史记录里，而post中的参数不会被保留

- get请求在URL中传送的参数是有长度限制的，而POST没有限制

- get参数通过URL传递，post放在Request body中

- get请求只能进行url编码，而post支持多种编码方式

- 对参数的数据类型，get只接受ASCALL字符，而post没有限制

- get比post更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息

- get产生的URL地址可以被收藏，而post不可以

### HTTP状态码
- 1xx：指示信息——表示请求已接收，继续处理
- 2xx：成功——表示请求已经被成功接收
- 3xx：重定向——要完成请求必须进行更进一步的操作
- 4xx：客户端错误——请求有语法错误或请求无法实现
- 5xx：服务器错误——服务器未能实现合法的请求

一般答完上述基本ok了，如果问的详细一点的话，就多加一点知识上去：

- `200 OK`：客户端请求成功
- `206 Partial Content`：客户发送了一个带有Range（范围）头的GET请求，服务器完成了它（比如客户端请求0-1w字节，服务器就会返回206,常见播放视频和音频地址，文件过大时一般返回206）

<hr/>

- `301 Moved Permanently`：所请求的页面已经转移至新的URL
- `302 Found`：所请求的页面已经`临时`转移至新的URL
- `304 Not  Modified`：客户端有`缓冲`的文档并发出一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用

<hr/>

- `400 Bad Request`：客户端请求有语法错误，不能被服务器所理解
- `401 Unauthorized`：请求未经授权，这个状态码必须和`WWW-Authenticate`报头域一起使用
- `403 Forbidden`：请求访问的页面被禁止（比如页面只能通过服务端去访问）
- `404 Not Found`：请求资源不存在

<hr/>

- `500 Internal Server Error`：服务器发生不可预料的错误但原来缓冲的文档还可以继续使用
- `503 Server Unavailable`：请求未完成，服务器临时过载或当机，一段时候后可能恢复正常

### 什么是持久连接
HTTP协议采用“请求-应答”模式，当使用普通模式，即`非 Keep-Alive` 模式时，每个请求 / 应答客户和服务器都要新建一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）

当使用 `Keep-Alive `模式（又称持久连接、连接重用）时，`Keep-Alive` 功能使客户端到服务端的连接持续有效，当出现对服务器的后续请求时，`Keep-Alive` 功能避免了建立或者重新建立连接

PS：只有HTTP 1.1 版本才支持持久连接，1.0不支持。

### 什么是管线化（加分点）
在使用持久连接的情况下，某个连接上消息的传递类似于

请求1->响应1->请求2->响应2->请求3->响应3

某个连接上的消息类似变成了这样：

请求1->请求2->请求3->响应1->响应2->响应3

（将请求打包一起发送，然后服务器一起打包回来响应）

**拓展知识：**

- 管线化机制通过持久连接完成，仅 `HTTP / 1.1` 支持此技术（重点）
- 只有`get`和`head`请求可以进行管线化，而 `post` 有所限制（重点）
- 初次创建连接时不应启动管线机制，因为对方（服务器）不一定支持 `HTTP /1.1 `版本的协议（重点）
- 管线化不会影响响应到来的顺序，如上面的例子所示，响应返回的顺序并未改变
- `HTTP / 1.1`要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可
- 由于上面提到的服务器端的问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，因此现代浏览器如 `Chrome` 和 `Firefox` 默认并未开启管线化支持


## 原型链
### 题目

- 创建对象有几种方法
- 原型、构造函数、实例、原型链
- instanceof的原理
- new运算符

### 创建对象有几种方法

```javascript
var o1 = {name:'o1'};
var o11 = new Object({name:'o11'});
```

```javascript
var M = function(){this.name='o2'};
var o2 = new M();
```

```javascript
var P = {name:'o3'};
var o3 = Object.create(P);
```
### 原型、构造函数、实例、原型链
![](https://img-blog.csdnimg.cn/20200404091811124.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

```javascript
var M = function(name){this.name=name};    //构造函数
var o2 = new M('o2');					   //实例
```
构造函数和原型对象的关系
![](https://img-blog.csdnimg.cn/20200404092424139.png)

实例和构造函数的关系

![](https://img-blog.csdnimg.cn/20200404092715485.png)


原型链：通过原型链的方式，找到原型对象，原型对象的方法是被不同实例所共有的。例如Object上有toString()方法，因此其它所有的实例都共有这个方法。

### instanceof的原理
![](https://img-blog.csdnimg.cn/20200404093505976.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
`instanceof`原理就是判断当前实例是不是当前构造函数的实例对象，判断依据就是实例对象的`__proto__`和构造函数的`prototype`是否指向相同的引用，只要在一条原型链上，`instanceof`就会返回`true`。

很抽象是吧，下面我们还是举上文的例子：

```javascript
var M = function(name){this.name=name};
var o2 = new M('o2');
```

![](https://img-blog.csdnimg.cn/20200404094108600.png)

因此，`instanceof`判断不严谨，比如m继承了a、b、c，我怎么判断是继承了哪一个呢？用`instanceof`判断都返回`true`。

下面就来，介绍`constructor`判断方式

![](https://img-blog.csdnimg.cn/20200404094632985.png)
### new运算符
- 一个新对象被创建。它继承自`foo.prototype`

- 构造函数foo被执行。执行的时候，相应的参数会被传入，同时上下文（this）会被指定为这个新实例。`new foo` 等同于 `new foo()`，只能用在不传递任何参数的情况

- 如果构造函数返回一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象

## 面向对象
### 题目
**类与实例**

- 类的声明
- 生成实例

**类与继承**

- 如何实现继承
- 继承的几种方式

### 类与实例

```javascript
<body>
    <script>
        /* 类的声明 */
        function Animal(){
            this.name='aaa';
        }
        /* ES6中的class的声明 */
        class Animal2{
            constructor(){
                this.name = 'bbb';
            }
        }
        /* 实例化一个类 */
        console.log(new Animal(),new Animal2());
    </script>
</body>
```
**效果**
![](https://img-blog.csdnimg.cn/20200404101354316.png)
### 类与继承
**方法一：借助构造函数来实现继承**

```javascript
		/* 借助构造函数来实现继承 */
        function fruit(){
            this.name = 'fruit';
        }
        function apple(){
            fruit.call(this);
            this.type='apple';
        }
        console.log(new apple);
```

上述这种方式，是通过改变`fruit`构造函数运行时this指向，指向了`apple`上，但是`fruit`原型链上的东西并没有被继承。

```javascript
		/* 借助构造函数来实现继承 */
        function fruit(){
            this.name = 'fruit';
        }
        fruit.prototype.eat = function(){
            console.log('吃水果啦！');
        }
        function apple(){
            fruit.call(this);
            this.type='apple';
        }
        console.log(new apple().eat());
```
![](https://img-blog.csdnimg.cn/20200404105822522.png)
因此，通过构造函数来实现的继承，只能继承父类构造函数的属性，如果原型`prototype`上面还有方法甚至原型链上的方法，不会继承。

**方法二：借助原型链实现继承**

```javascript
/* 借助原型链实现继承 */
function fruit(){
  this.name = 'fruit';
}
function apple(){
  this.type='apple';
}
apple.prototype = new fruit();
console.log(new apple());
```
掌握之前原型链相关的知识，下面的等式应该就比较容易理解了
![](https://img-blog.csdnimg.cn/2020040411063490.png)
但这种继承方式也是有缺点的，下文来探讨这个问题：


```javascript
        /* 借助原型链实现继承 */
        function fruit(){
            this.name = 'fruit';
            this.arr = [1,2,3];
        }
        function apple(){
            this.type='apple';
        }
        apple.prototype = new fruit();
        var app1 = new apple();
        var app2 = new apple();
        app1.arr.push(4);
        console.log(app1,app2);
```

![](https://img-blog.csdnimg.cn/20200404110957499.png)

从上述结果来看，当我们修改某一个对象时，该函数的所有新出的实例对象都会跟着改变，这就造成了`污染`问题，肯定不是我们面向对象思想所想要的。（因为它们引用的是同一个父类实例对象）


**方式三：组合方式实现继承**

这种方式就是结合前两种的优点，弥补它们的缺点。


```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>面向对象</title>
</head>
<body>
    <script>
        /* 关于继承的几种方式
        **使用方法：
        **读者按需将对应模块注释取消掉即可 
        */

        /* 借助原型链实现继承 */
        /*function fruit(){
            this.name = 'fruit';
            this.arr = [1,2,3];
        }
        function apple(){
            this.type='apple';
        }
        apple.prototype = new fruit();
        var app1 = new apple();
        var app2 = new apple();
        app1.arr.push(4);
        console.log(app1,app2);*/

        /* 组合方式实现继承 */
        /**
        *此方法的缺点：new fruit() 父类构造函数执行了两次，可以但没必要
        */
        function fruit(){
            this.name = 'fruit';
            this.arr = [1,2,3];
        }
        function apple(){
            fruit.call(this);
            this.type='apple';
        }
        apple.prototype = new fruit();  //这里拿的是父类的实例，没有自己的constructor
        var app1 = new apple();
        var app2 = new apple();
        app1.arr.push(4);
        //console.log(app1,app2);
        //console.log(app1.constructor,app2.constructor)   
        
        /* 组合方式实现继承优化1 */
        function fruit1(){
            this.name = 'fruit';
            this.arr = [1,2,3];
        }
        function apple1(){
            fruit.call(this);
            this.type='apple';
        }
        apple1.prototype = fruit1.prototype;  //这里拿的是父类的原型对象，但依旧没有自己的constructor
        var app3 = new apple1();
        var app4 = new apple1();
        app3.arr.push(4);
        //console.log(app3,app4);
        //判断实例
        //console.log(app3 instanceof apple1);
        //console.log(app3 instanceof fruit1); //这里无法判断当前对象是由父类产生的实例对象还是由子类产生的实例对象
        //判断构造函数
        //console.log(app3.constructor);      
        //console.log(app4.constructor);       //因为和父类的原型对象是一个对象，导致constructor也是指向的父类的constructor，无法判断自己

        /* 组合方式实现继承优化2 */
        function fruit2(){
            this.name = 'fruit';
            this.arr = [1,2,3];
        }
        function apple2(){
            fruit.call(this);
            this.type='apple';
        }
        apple2.prototype = Object.create(fruit2.prototype);  //这里使用Object.create()方法，和之前直接用fruit2.prototype来说，它创建了一个中间对象，和父类不是指向同一个区域了
        //这样就能区分父类和子类的原型对象了，达到父类和子类原型对象的隔离效果
        apple2.prototype.constructor = apple2;  //由于隔离了父类子类的原型对象，我们就可以指定子类自己的constructor
        var app5 = new apple2();
        var app6 = new apple2();
        app5.arr.push(4);
        console.log(app5,app6);
         //判断实例
        console.log(app5 instanceof apple2);
        console.log(app5 instanceof fruit2); //因此，这里可以判断当前对象是由父类产生的实例对象还是由子类产生的实例对象
        //判断构造函数
        console.log(app5.constructor);       //指向的是自己的constructor


    </script>

    
</body>
</html>
```

<hr>



## 通信类

### 题目
- 什么是同源策略及限制
- 前后端如何通信
- 如何创建Ajax
- 跨域通信的几种方式（重点）

### 什么是同源策略及限制
同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。
这是一个用于隔离潜在恶意文件的关键的安全机制。

 源包括协议、域名、端口

- Cookie、LocalStorage和IndexDB无法读取
- DOM无法获得
- AJAX请求不能发送
 
### 前后端如何通信
- Ajax（同源下的通信）
- WebSocket（不限制，不受同源策略的限制）
- CORS（支持同源通信，也支持跨域通信，新型）

### 如何创建Ajax
- XMLHttpRequest（高级浏览器才支持）对象的工作流程
- 兼容性处理
- 事件的触发条件
- 事件的触发顺序

### 跨域通信的几种方式（重点）
- JSONP
- Hash（改变页面不刷新，search改变会刷新，因此search不可以）
- postMessage（H5中出现的标准，实现跨域通信）
- WebSocket
- CORS（可以理解为支持跨域通信的Ajax，在请求头上加了Origin）

**JSONP实现原理：**

根据script标签异步加载而来

![](https://img-blog.csdnimg.cn/20200404135628568.png)

![](https://img-blog.csdnimg.cn/2020040413390361.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
将`html`加入`script`标签，即把请求发送出去
![](https://img-blog.csdnimg.cn/20200404135715278.png)

很关键一点是会向服务端发送一个`callbackName`，然后服务器就会响应如下内容（下面那个script里的内容）利用`callbackName`作为函数名来返回，而且本地必须有这个函数名的函数。
![](https://img-blog.csdnimg.cn/20200404133842188.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**Hash与postMessage实现原理**
![](https://img-blog.csdnimg.cn/20200404135948962.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**WebSocket实现原理**
![](https://img-blog.csdnimg.cn/2020040414064464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

**CORS实现原理**
![](https://img-blog.csdnimg.cn/20200404141010376.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
PS：CORS为什么支持跨域通信？

浏览器回拦截`Ajax`请求，如果觉得是跨域的，就会在请求头上加上`origin`。

## 安全类
### 题目
- CSRF

	基本概念和缩写
	攻击原理
	防御措施

- XSS

### CSRF

**基本概念和缩写**

CSRF，通常称为跨站请求伪造，英文名（Cross-site request forgery）缩写CSRF

**CSRF攻击原理**

- 用户必须在网站登录过
- 网站中某个接口存在漏洞
![](https://img-blog.csdnimg.cn/20200404141759423.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

**CSRF防御措施**

- Token验证
- Referer验证（页面来源验证）
- 隐藏令牌（类似Token，隐藏在http的head头中，不放在链接上）

### XSS
**基本概念和缩写**

跨域脚本攻击（cross-site scripting）

**攻击原理**

比如可以在你的提交区里面写上script标签，即用一些渠道向你的页面注入js脚本

**防御措施**

让插入的js不可执行

### CSRF与XSS区别

CSRF是利用本身的漏洞自动执行接口，依赖于用户登录网站

XSS是向页面注入js，js函数体里面做想做的事

## 算法类
### 题目
- 排序
- 堆栈、队列、链表
- 递归
- 波兰式和逆波兰式
- ...

PS：由于文章篇幅所限，并且算法这一块需要的是自己平时的积累，这里就不作长文加载了，关于算法这一块我会在github里有相应专栏，记录题库。因此，在这里就给大家分享一些比较好的文章提供学习。

<hr/>

### 排序
- 快速排序：<a href="https://segmentfault.com/a/1190000009426421">传送门</a>
- 选择排序：<a href="https://segmentfault.com/a/1190000009366805">传送门</a>
- 希尔排序：<a href="https://segmentfault.com/a/1190000009461832">传送门</a>

<a href="https://chocolate.blog.csdn.net/article/details/105218288">推荐：【再也不怕面试官要你手写排序算法】一文详细解读前后端之各种排序算法及知识拓展（附图示） JS / C / C++</a>
### 堆栈、队列、链表
<a href="https://juejin.im/entry/58759e79128fe1006b48cdfd">参考：JS中的数据结构与算法</a>

### 递归
<a href="https://segmentfault.com/a/1190000009857470">参考：JS中的递归</a>
### 波兰式和逆波兰式
<a href="https://www.cnblogs.com/chenying99/p/3675876.html">参考：波兰式、逆波兰式与表达式求值</a>

<a href="https://github.com/Tairraos/rpn.js">参考：源码</a>


### 关于算法的心得
首先，对于前端来说，算法要求没有后端那么严格，考察的一般不会很刁专，一般就是看下你的思考能力。如果一开始就考察算法题，如果你回答不了的话，也很正常，或许这不是一个关于前端的部门...可能招的是算法工程师，算法这一块问的话，多半是中间时间段。算法这一块的话，在于平时积累，如果时间充裕的话，可以深入了解一点，这也是面试加分点，如果时间紧迫的话，把上文提到的部分专题弄懂已经不错了。

<hr/>

## 二面 / 三面

### 面试技巧

- 知识面要广
- 理解要深刻
- 内心要诚实
- 态度要谦虚
- 回答要灵活
- 要学会赞美

## 渲染机制
### 题目

- 什么是DOCTYPE及作用
- 浏览器渲染过程
- 重排Reflow
- 重绘Repaint
- 布局Layout

### 什么是DOCTYPE及作用
- DTD（document type ，文档类型定义）是一系列的语法规则，用来定义XML或（X）HTML的文件类型。浏览器会使用它来判断文件类型，决定使用何种协议来解析，以及切换浏览器模式
- DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途便是文件的合法性验证。如果文件代码不合法，那么浏览器就会出现一些解析错误。（简单来说，就是告诉浏览器我用了哪一个DTD）

![](https://img-blog.csdnimg.cn/20200404161808788.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
PS：这里要记住html5该如何声明，以及4.0版本有严格模式和传统模式，具体区别如上图下划线所示

### 浏览器渲染过程
![](https://img-blog.csdnimg.cn/20200404162046639.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

**简单快速回答：**

第一步，HTML经过HTML解析器解析成为DOM Tree

第二步，CSS通过CSS解析器形成样式规则

第三步，将两个DOM结合形成Render Tree，这里就类似于告诉浏览器渲染树结构基本出来了，此时有一个平行操作，Layout，经过这个，就能知道元素具体应该显示在屏幕在哪个位置（宽、高、颜色等）

最后一步，浏览器通过GUI画图，呈现页面内容，最后Display显示页面

<hr/>

下面通过几个比较好理解的图形来将抽象具体化：

**DOM Tree**
![](https://img-blog.csdnimg.cn/20200404163122362.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**CSSOM Tree**
![](https://img-blog.csdnimg.cn/20200404163149664.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**Render Tree**
![](https://img-blog.csdnimg.cn/20200404163230751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**Layout**
![](https://img-blog.csdnimg.cn/20200404163324722.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### 重排Reflow
**定义**

DOM结构中的各个元素都有自己的盒子（模型），这些都需要浏览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称之为reflow

**触发Reflow**

- 当你增加、删除、修改`DOM`结点时，会导致 `Reflow` 或 `Repaint`
- 当你移动`DOM`的位置，或是搞个动画的时候
- 当你修改`CSS`样式的时候
- 当你 `Resize` 窗口的时候（移动端没有这个问题），或是滚动的时候
- 当你修改网页的默认字体时候（影响比较大，性能问题）

### 重绘Repaint
**定义**

当各种盒子的位置、大小以及其他属性，例如颜色、字体大小等确定下来后，浏览器于是便把这些元素都按照各自的特性绘制了一遍，于是页面的内容出现了，这个过程称之为`repaint`。即页面需要呈现的内容，一起画到屏幕上。

**触发Repaint**

- DOM改动
- CSS改动

**（重点）如何尽量减小Repaint？**

比如页面有一个计算器，用户在输入框输入一些计算表达式，最后显示计算结果，然后把输入给隐藏掉。这里就有两个交互，先是用户输入，将输入隐藏掉，然后将结果显示出来。这两个交互呈现内容不一样，当然就需要Repaint，那怎么做少画点东西？

好像是有一个documentFrame这个东西，把n个节点创建成一个片段，向浏览器一次添加这个片段。

（这里我的朋友考察过，遗留一下这个问题，可以帮助我完善这个问题，谢谢！）

##  js运行机制
关于这一专题，我之前的文章也是写的挺多的了。

<a href="https://blog.csdn.net/weixin_42429718/article/details/104907304">推荐阅读：【金三银四】一个问题就知道你会不会JS了 阿里、头条真题解析</a>

<a href="https://blog.csdn.net/weixin_42429718/article/details/104990407">推荐阅读：【金三银四】 一文弄懂 js 数据类型、堆栈内存、作用域（链）、闭包知识拓展 （一）</a>

下面就例举几个经典题，读者可以好好体会一下：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>js运行机制</title>
</head>
<body>
    <script>
        console.log(1);
        setTimeout(function(){
            console.log(3);
        },0);
        console.log(2);
    </script>
</body>
</html>
```

```javascript
for(var i=0;i<4;i++){
   setTimeout(function(){
      console.log(i);
   },1000)
}
```

### 题目
- 如何理解JS的单线程
- 什么是任务队列
- 什么是Event Loop

以上三个问题的详细表述：

<a href="https://blog.csdn.net/weixin_42429718/article/details/104990407">推荐阅读：【金三银四】 一文弄懂 js 数据类型、堆栈内存、作用域（链）、闭包知识拓展 （一）</a>

### 如何理解JS的单线程

学过JS，不对，听过JS的同学应该都知道，JS是单线程的，而浏览器是多线程的，分配的时间内js只能干一件事情

### 什么是任务队列

分同步任务和异步任务

### 什么是Event Loop

为了解决同步和异步问题，浏览器提供了一个事件队列 Event Queue，根据特征不同，分为微任务和宏任务队列

执行顺序是：主线程代码 > 微任务 > 宏任务

**宏任务：**

定时器例如setTimeout（异步）、事件绑定

**微任务：**

await（异步，执行x函数并等待返回结果，有结果再执行下面代码）

resolve() / reject() 执行的时候把 then / catch 中的代码执行

promise、async

**特殊情况：**

new Promise（同步）会立即执行


### 总结

- 理解Js的单线程的概念
- 理解任务队列
- 理解 Event Loop
- 理解哪些语句会放入异步任务队列
- 理解语句放入异步任务队列的时机

## 页面性能
### 题目
提升页面性能的方法有哪些？

- 1、资源压缩合并，减少HTTP请求
- 2、非核心代码异步加载——异步加载的方式——异步加载的区别
- 3、利用浏览器缓存——缓存的分类——缓存的原理
- 4、使用CDN
- 5、预解析DNS

```javascript
<meta http-equiv="x-dns-prefetch-control" content="on"> //打开a标签dns预解析
//有些https默认关了dns预解析，使用上述可以打开（加分点）
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">
```
### 异步加载

1、异步加载的方式

- 动态脚本加载（用过js添加到document中，比如加入到body或head中）
- defer
- async

2、异步加载的区别

（1）`defer`是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行
（2）`async`是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关


### 浏览器缓存
**1、缓存的分类**

- ① **强缓存**（不用任何请求，拿过来就用，如果两个都下发，以第二个`Cache`为准）

	**Expires（过期时间-服务器绝对时间）** Expires:Thu,21 Jan 2017 23:39:02 GMT
	（会导致客户端时间和服务器时间之间时间差问题）
	**Cache-Control（客户端相对时间，单位秒）** Cache-Control:max-age=3600



- ② **协商缓存**（浏览器发现本地有这个副本，但是不确定用不用它，于是得向服务器问一下，这个副本要不要用）

	**Last-Modified**（拿到某个资源文件时，通过这个字段服务器下发一个时间）  **If-Modified-Since** （当下次请求这个资源是否发生变化时，是用这个`key`值，对比两个时间）

	Last-Modified: Web,26 Jan 2017 00:35:11 GMT

	（上述方式会存在问题，例如我可能时间上修改了，但是内容并没有修改）
	
	**Etage**（解决上述问题，服务器给Etage值，当过了强缓存时间，浏览器请求是否可用副本时，会在http请求头中用 **If-None-Match** 当做key值，加上`value`，此value就是Etage的值）

**PS：（面试真题-鹅厂）你知道浏览器与缓存相关的http头有哪些？**

答案就是上述**加粗字体**

## 错误监控
**问法：如何检测JS错误，如何保证你的产品质量？**

### 题目
- 前端错误的分类
- 错误的捕获方式
- 上报错误的基本原理

### 前端错误的分类

即时运行错误：代码错误
资源加载错误

### 错误的捕获方式
**即时运行错误**的捕获方式

（1） try...catch
（2）window.onerror（无法捕获资源加载错误，理由如下）

**资源加载错误**（上述原因：因为资源加载错误不会冒泡）

（1）`object.onerror`（节点上绑定`onerror`事件）

（2）`performance.getEntries()` （获得目前已加载的资源，例如图片，然后用document.getElementsByTagName('img')来获取需要加载的图片，然后用总的去减已加载的，就能知道未加载的有多少了）

（3）`Error`事件捕获（之前说不能冒泡，但可以捕获）

![](https://img-blog.csdnimg.cn/20200404205139389.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20200404205209691.png)

**延伸：跨域的js运行错误可以捕获吗，错误提示什么，应该怎么处理？**

![](https://img-blog.csdnimg.cn/2020040420481855.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
**处理**
- 在script标签增加 `crossorigin` 属性
- 设置js资源响应头 `Access-Control-Allow-Origin:*（可以指定域名）


### 上报错误的基本原理
1、采用Ajax通信的方式上报
2、利用Image对象上报（重点，加分点）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>利用Image对象上报</title>
</head>
<body>
    <script>
        (new Image()).src='http://baidu.com/test?name=123';
    </script>
</body>
</html>
```
此时，我们查看`Nerwork`，可以发现，我们的请求已经发出去了（比Ajax简单，不用借用任何第三方库）
![](https://img-blog.csdnimg.cn/20200404205701538.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

## 三面 / 四面

### 面试技巧

- 准备要充分
- 描述要熟练
- 引导找时机
- 优势要发挥
- 回答要灵活



## 结尾

<font color="Tomato">**如若本文有瑕疵需修改的地方，请提出来，谢谢您的贡献！**</font>


<font color=chocolate>欢迎关注微信公众号：小狮子前端Vue</font>

谢谢您的支持！✿✿ヽ(°▽°)ノ✿


```javascript
学如逆水行舟，不进则退
```
