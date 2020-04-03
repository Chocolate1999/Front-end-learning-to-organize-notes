
## 面试准备——自我介绍


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

基本概念：标准模型+IE模型

标准模型和IE模型的区别

CSS如何设置这两种盒模型

JS如何设置获取盒模型对应的宽和高

实例题（根据盒模型解释边距重叠）

BFC（边距重叠解决方案）

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

基本概念：DOM事件的级别

DOM事件模型

DOM事件流

描述DOM事件捕获的具体流程

Event对象的常见应用

自定义事件

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
HTTP协议的主要特点

HTTP报文的组成部分

HTTP方法

POST和GET的区别

HTTP状态码

什么是持久连接

什么是管线化


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



### 什么是持久连接

### 什么是管线化




## 原型链




## 面向对象





## 通信类



## 安全类



## 算法类




## 渲染机制



##  js运行机制



## 页面性能




## 错误监控






## 业务能力





## 团队协作能力与带人能力





## 职业竞争力



## 职业规划




## 补充




## 面试总结


























## 结尾

<font color="Tomato">**如若本文有瑕疵需修改的地方，请提出来，谢谢您的贡献！**</font>


<font color=chocolate>欢迎关注微信公众号：小狮子前端Vue</font>

谢谢您的支持！✿✿ヽ(°▽°)ノ✿


```javascript
学如逆水行舟，不进则退
```
