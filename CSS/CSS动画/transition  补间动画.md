### CSS中动画的类型
- transition 补间动画（从一个状态到另一个状态，状态切换之间是有动画的）
- keyframe 关键帧动画（指定的每一个状态就是一个关键帧）
- 逐帧动画（跳动）

### transition  补间动画

```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transition补间动画</title>
    <style>
        .container{
            width: 100px;
            height: 100px;
            background: red;
            transition: width 1s, background 2s;
        }
        .container:hover{
            width: 300px;
            background: blue;
        }
    </style>
</head>
<body>
    <div class="container"></div>
</body>
</html>
```
展示效果：
![](https://img-blog.csdnimg.cn/20200529105730631.gif#pic_center)

### 动画进度与时间的关系

![](https://img-blog.csdnimg.cn/20200529105848275.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

例子：

![](https://img-blog.csdnimg.cn/20200529110102399.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)


<a href="https://matthewlein.com/tools/ceaser">推荐：动画进度与时间关系模拟网站</a>
