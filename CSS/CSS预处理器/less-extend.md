### less extend
上文提到过的，使用过 less mixin 抽离之后，我们可以得到如下代码，但是呢，又会有一个小问题，就是我们会有重复样式代码。在生产环境下，就会有大量这样的形式出现，这就会影响到我们的CSS体积了。

![](https://img-blog.csdnimg.cn/2020052917481580.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

一种比较好的方式，如下，我们再讲公共样式代码进行抽离，这显然会降低我们的CSS体积。

![](https://img-blog.csdnimg.cn/20200529174929659.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

因此，extend就发挥了它的作用

创建 `extend-less.less` 文件，复制如下代码：
```css
@fontSize: 12px;
@bgColor: red;

.block{
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}
body{
    padding: 0;
    margin: 0;
}
.wrapper{
    background: lighten(@bgColor,40%);
    .nav{
        &:extend(.block);
    }
    .content:extend(.block){
        &:hover{
            background: @bgColor;
        }
    }
}
```
创建 `extend-less.css` 文件，执行如下代码：

```css
lessc extend-less.less > extend-less.css
```
查看  `extend-less.css` 文件，发现代码体积相对减少了。
```css
.block,
.wrapper .nav,
.wrapper .content {
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
body {
  padding: 0;
  margin: 0;
}
.wrapper {
  background: #ffcccc;
}
.wrapper .content:hover {
  background: red;
}
```

总结：mixin 和 extend 区别， mixin 能处理一些复杂逻辑，比如添加变量，但会导致体积增大问题。而 extend的话，是将选择器提取出来，更加简单，不适合处理复杂逻辑，能将体积进行一定减少。
