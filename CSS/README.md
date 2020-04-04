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

##### 一个题就知道你会不会CSS了
面试官：你知道什么是语义化标签嘛？

答：合理的标签干合理的事情（第一个就懵了的请评论区扣1）

<hr/>

于是，你就进入了一大波套路中了，那都有哪些标签，每个标签啥意思？

- 块级标签、行内标签的区别？

- 如何转换

- display除了这几个值还有哪些？

- display:none

让元素隐藏，你可以怎么做？

display:none 和 visibility:hidden 的区别？

opacity的兼容处理

filter还能做哪些事情

持续懵逼中...


- display:flex

项目中你什么时候用到了flex

除了这些方式能居中，你还知道哪些方法？

响应式布局还可以怎么做？

都有哪些盒子模型

- ...（崩溃了）



以上，就是由一个题引发的各种套路，你能答到 " 第几关 " 呢？

当你答不来时，好，我们接着下一题...


![](https://img-blog.csdnimg.cn/20200315213601767.jpg)

总之，把你问到心服口服为止。答不来，那咋办呢？接下来我将把这些重点串联起来，整理一整套分享给你们。等到下次面试时，面试官问你：什么是语义化标签时   你就会心想：就这？就这？就这？ 此时将主动权掌握在自己手里，从头讲到尾，直叫面试官给你拍手喊停为止！


### 经典面试题引入
<hr>

##### 1.掌握盒子水平垂直居中的五大方案
 

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            height: 100%;
            overflow: hidden;
        }
        .box{
            box-sizing: border-box;
            width: 100px;
            height: 50px;
            line-height: 48px;
            text-align: center;
            font-size: 16px;
            border: 1px solid lightblue;
            background: lightblue;   
        }
        /*定位1  需要考虑父级宽高且需计算*/
        body{
            position: relative;
        }
        .box{
            position: absolute;
            top:50%;
            left:50%;
            margin-left: -50px;
            margin-top: -25px;
        }
        /*定位2 不需要考虑父级宽高 但得有宽高
        body{
            position: relative;
        }
        .box{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }
        */
        /*定位3 CSS3中使用transform不需要计算 也不需要父级宽高
            但兼容性不是很好
        body{
            position: relative;
        }
        .box{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }*/


        /*display:flex   主轴和交叉轴都居中（即x和y轴） 但也需要考虑兼容性*/
        /*移动端常用做法*/
        /*body{
            display: flex;
            justify-content: center; 
            align-items: center;
        }*/

        /*通过javaScript来实现（使用需将下面body中js代码取消注释）*/
        /*body{
            position: relative;
        }*/

        /*使用display:table-cell 这种方法本身是用来控制文本的
        而且要求父级必须有固定宽高 百分比不算固定值 使用比较少（了解即可）
        */
        /*
        body{
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 500px;
            height: 500px;
        }
        .box{
            display: inline-block;
            
        }*/
        


    </style>
</head>
<body>
    <div class="box" id="box">
        居中显示
    </div>
    <!--通过javaScript来实现-->
    <script>
        /*let HTML=document.documentElement,
            winW=HTML.clientWidth,
            winH=HTML.clientHeight,
            boxW=box.offsetWidth,
            boxH=box.offsetHeight;
        box.style.position="absolute";
        box.style.left=(winW-boxW)/2+'px';
        box.style.top=(winH-boxH)/2+'px';*/
    </script>
</body>
</html>
```

##### 2.关于CSS3中盒模型的几道面试题
<a href="https://blog.csdn.net/weixin_42429718/article/details/104448450">推荐阅读：这一次，彻底看懂 CSS 盒模型（图文并茂）</a>


**标准答案：**

标准盒模型、怪异盒模型（IE盒模型）和flex弹性伸缩盒模型以及多列布局


- 标准盒模型（box-sizing content-box）

<img src="https://img-blog.csdnimg.cn/20200222185449952.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>

- IE盒模型（box-sizing border-box）

content = width+padding+border

<img src="https://img-blog.csdnimg.cn/20200222185613912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>


**<font color=red>附完美回答方式：</font>**

标准盒子模型，即box-sizing content-box，我们所写的width和height并不是最终盒子的宽高，而是content的，盒子的宽高由我们的content+padding+border来组成的，但是这样在做项目时可能会遇到小问题，假如我想构建一个100x100的盒子大小，但是我发现我写的是width和height是100，于是我需要加上padding及border，但是加上去之后，盒子也会相应变大，这就造成改动麻烦。

后面css3中提供了IE盒子模型，能够直接控制盒子的大小。于是项目中大多数用上了IE盒子模型，以及我看过bootstrap以及bootelement-ui源码中大部分也是用的IE盒子模型

><div>以上回答方式，请读者可以好好体会一下，挖掘其中的亮点！</div>

- FLEX盒模型

关于这里可以参考阮一峰老师的文章

<a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">参考：Flex 布局教程：语法篇</a>


- 多列布局（基本上不用）

读者可以适当了解一下，这里就不加以说明了


##### 3.掌握几大经典布局方案

><div>圣杯布局</div>
><div>双飞翼布局</div>
><div>==》左定，右定，中间自适应</div>


- 圣杯布局：浮动和负margin

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            height: 100%;
            overflow: hidden;
        }
        .container{
            height: 100%;
            padding: 0 200px;
        }
        .left,.right{
            width: 200px;
            min-height: 200px;
            background: lightblue;
        }
        .center{
            width: 100%;
            min-height: 400px;
            background: lightsalmon;
        }
        .left,.center,.right{
            float: left;
        }
        .left{
            margin-left: -100%;
            position: relative;
            left: -200px;
        }
        .right{
            margin-right: -200px;
        }
    </style>
</head>
<body>
    <div class="container clearfix">
        <div class="center"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```

- 双飞翼布局：浮动和负margin

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            height: 100%;
            overflow: hidden;
        }
        .container,.left,.right{
            float: left;
        }
        .container{
            width: 100%;
        }
        .center{
            margin: 0 200px;
            min-height: 400px;
            background: lightsalmon;
        }        
        .left,.right{
            width: 200px;
            min-height: 200px;
            background: lightblue;
        }
        .left{
            margin-left: -100%;
        }
        .right{
            margin-left: -200px;
        }
    </style>
</head>
<body>
    <div class="clearfix">
        <div class="container">
            <div class="center"></div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```

- 使用CALC

但是用表达式，在渲染时会导致性能问题，也有一定兼容性问题

```javascript
.center{
   /*兼容到IE9*/
   width: calc(100%-400px);
   min-height: 400px;
   background: lightsalmon;
}
```

- 使用flex

flex: 0 0 200px;  第一个值表示放大，第二个值表示缩小，第三个值表示所占width

flex: 1; 既不放大也不缩小 自适应

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            overflow: hidden;
        }
        .container{
            display: flex;
            justify-content: space-between;
            height: 100%;
        }
        .left,.right{
            flex: 0 0 200px;
            height: 200px;
            background: lightblue;
        }
        .center{
            flex: 1;
            min-height: 400px;
            background: lightsalmon;
        }
    </style>
</head>
<body>
    <div class="container clearfix">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```

- 定位方式

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            height: 100%;
            overflow: hidden;
        }
        .container{
            position: relative;
            height: 100%;
        }
        .left,.right{
            position: absolute;
            top:0;
            width: 200px;
            min-height: 200px;
            background: lightblue;
        }
        .left{
            left: 0;
        }
        .right{
            right: 0;
        }
        .center{
            margin: 0 200px;
            min-height: 400px;
            background: lightsalmon;
        }
    </style>
</head>
<body>
    <div class="clearfix">
        <div class="container">
            <div class="center"></div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```


### 知识拓展
<hr/>

关于知识拓展，就留着读者去深入思考了，这里就提出几个比较常见的一些问题：

##### 1.使用CSS，让div消失在视野中
##### 2.说明z-index工作原理，适用范围？
##### 3.谈谈对HTML5的理解
##### 4.如何使div里面的文字垂直居中，且该文字的大小根据屏幕大小自适应
##### 5.不考虑其它因素，下面哪种的渲染性能比较高（最后一种）

```javascript
.box a{
    ...
}

.a{
    ...
}
```



```javascript
学如逆水行舟，不进则退
```
