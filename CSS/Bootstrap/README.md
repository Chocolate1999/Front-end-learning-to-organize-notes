## Bootstrap
- 一个CSS框架
- twitter 出品
- 提供通用基础样式

### Bootstrap 4
- 兼容IE10+
- 使用flexbox布局
- 抛弃Nomalize.css
- 提供布局 和 reboot版本
- （<a href="https://getbootstrap.com/">官网</a>，用sass写）
- 可用于后台管理系统


### Bootstrap JS组件
用于组件交互
- dropdown（下拉）
- modal（弹窗）
- ...

基于jquery写的，同时，依赖第三方库 Popper.js和 bootstrap.js

![](https://img-blog.csdnimg.cn/20200530081512499.png)

如上图，第二个js文件包含了 Popper.js


使用方式：

- 基于 data-*属性
- 基于 JS API

### Bootstrap 响应式布局

非常精华的部分

![](https://img-blog.csdnimg.cn/20200530082022915.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### Bootstrap 定制方法

- 使用CSS同名类覆盖（操作简单但）
- 修改sass源码重新构建
- 引用scss源文件 修改变量（推荐使用，干净）

## CSS 面试真题

### Bootstrap的优缺点
- 优点：CSS代码结构合理，现成的样式可以直接使用
- 缺点：定制较为繁琐 体积大

###  Bootstrap如何实现响应式布局
- 原理：通过 media query 设置不同分辨率的class
- 使用：为不同分辨率选择不同的网格class


### 如何基于Bootstrap 定制自己的样式

- 使用CSS同名类覆盖（操作简单但）
- 修改sass源码重新构建（需要了解Bootstrap 结构）
- 引用scss源文件 修改变量（按需使用，控制体积，推荐使用，干净，但需要了解结构）
