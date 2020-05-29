## CSS 面试真题
### 如何用div画一个 xxx
- box-shadow 无限投影
- ::before
- ::after

### 如何产生不占空间的边框
- box-shadow
- outline

### 如何实现圆形元素（头像）
- border-radius:50%

### 如何实现iOS图标的圆角
![](https://img-blog.csdnimg.cn/20200529084619993.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
- clip-path：(svg)

### 如何实现半圆、扇形等图形
- border-radius 组合：有无边框、边框粗细、圆角半径

### 如何实现背景图居中显示 / 不重复 / 改变大小
- background-position
- background-repeat
- background-size（cover / contain）

### 如何平移 / 放大一个元素
- transform:translateX(100px)
- transform:scale(2)
- transform本身与动画没有关系

### 如何实现3D效果
- perspective:500px（指定透视角度）
- transform-style:preserve-3d;（3d效果）
- transform:translate rotate ...
