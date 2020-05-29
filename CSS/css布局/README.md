## CSS 面试真题
### 实现两栏（三栏）布局的方法
- 表格布局
- float + margin 布局（兼容性好）
- inline-block 布局（需要处理间隙问题）
- flexbox布局（简单，但兼容性不是很好）

### position:absolute / fixed 有什么区别？
**经典问题**：

- 绝对定位 `absolute`，会优先查找父级定位为 `absolute` 或 `relative`的进行定位，如果父级没有，找上级，那么最终就会根据 `body`进行定位，它和 `fixed`一样，也是脱离了文档流。

- `fixed`相对于屏幕（viewport）进行定位

**层叠问题** ，因为默认会根据先后顺序显示，因此会有覆盖情况，此时，可以通过设计 `z-index` 解决，权重越大，优先显示。

### display:inline-block 的间隙
- 原因：字符间距
- 解决：消灭字符（把标签写在一起或者添加注释）或者消灭间距（将`font-size`设为0）

### 如何清除浮动？为什么要清除浮动？
原因：浮动的元素不会占据父元素的布局空间，也就是父级元素不会管浮动元素，有可能浮动元素会超出父元素，从而对其它元素产生影响。

**经典问题**：

清除浮动的方式

① 当我们设置为 float 后，会将元素设为 BFC，接管自己的宽高，因此我们也可以让父级元素设置为 BFC，来接管自己的宽高。

初始状态：
![](https://img-blog.csdnimg.cn/20200528174749689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
在父级元素设置 `overflow: auto/hidden;`
```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>清楚浮动</title>
    <style>
        .container{
            background: red;
            width: 400px;
            overflow: auto;
            margin: 10px;
        }
        .p1{
            background: pink;
            float: left;
            width: 200px;
            height: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <span>xxxxxx</span>
        <span class="p1">float</span>
        <span class="p1">float</span>
    </div>
    <div class="container" style="height: 200px; background: blue;">
        <p>第一行</p>
        <p>第二行</p>
        <p>第三行</p>
    </div>
</body>
</html>
```
最终状态效果图如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200528174958468.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

② 由于 float 不脱离文档流（不会影响其它元素布局），那么就可以使得元素刚好到达下面位置。就可以通过其它元素将父级撑起来，当父级刚好撑到下方位置时，就可以将浮动清除掉。

![](https://img-blog.csdnimg.cn/20200528175222135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 如何适配移动端页面？
主要方法：隐藏 + 折行 + 自适应空间（rem：通过html的字体大小（即 `font-size`）来确定元素大小，但不太精确  / viewport：通过 js或手工 确定整个界面放到多大 / media query：媒体查询，根据不同的设备来匹配不同的样式）
