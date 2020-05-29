### 关键帧动画
- 相当于多个补间动画
- 与元素状态的变化无关
- 定义更加灵活

```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keyframe关键帧动画</title>
    <style>
        .container{
            width: 100px;
            height: 100px;
            background: red;
            animation: run 1s;
            animation-direction: reverse;
            animation-iteration-count: infinite;
            /*animation-fill-mode: forwards;*/
            /*animation-play-state: paused;*/
        }
        @keyframes run {
            0%{
                width: 100px;
            }
            100%{
                width: 800px;
            }
        }
    </style>
</head>
<body>
    <div class="container"></div>
</body>
</html>
```

展示效果：


![](https://img-blog.csdnimg.cn/20200529142723152.gif#pic_center)
