### 3D-transform

```cpp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D-transform</title>
    <style>
        .container{
            margin: 50px;
            padding: 10px;
            border: 1px solid red;
            width: 200px;
            height: 200px;
            position: relative;
            perspective: 500px;
        }
        #cube{
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            transform: translateZ(-100px);
            transition: transform 1s;
        }
        #cube:hover{
            transform: translateZ(-100px) rotateX(90deg) rotateY(90deg);
        }
        #cube div{
            width: 200px;
            height: 200px;
            position: absolute;
            line-height: 200px;
            font-size: 50px;
            text-align: center;
        }
        .front{
            background: rgba(255, 0, 0, .3);
            transform: translateZ(100px);
        }
        .back{
            background: rgba(0, 255, 0, .3);
            transform: translateZ(-100px) rotateY(180deg);
        }
        .left{
            background: rgba(0, 0, 255, .3);
            transform: translateX(-100px) rotateY(-90deg);
        }
        .right{
            background: rgba(255, 255, 0, .3);
            transform: translateX(100px) rotateY(90deg);
        }
        .top{
            background: rgba(255, 0, 255, .3);
            transform: translateY(-100px) rotateX(-90deg);
        }
        .bottom{
            background: rgba(0, 255, 255, .3);
            transform: translateY(100px) rotateX(90deg);
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="cube">
            <div class="front">1</div>
            <div class="back">2</div>
            <div class="right">3</div>
            <div class="left">4</div>
            <div class="top">5</div>
            <div class="bottom">6</div>
        </div>
    </div>
</body>
</html>
```
展示效果图如下：
![](https://img-blog.csdnimg.cn/20200529083411818.gif#pic_center)
