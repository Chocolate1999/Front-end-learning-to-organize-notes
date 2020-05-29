## CSS 面试真题
### css样式（选择器）的优先级
- 计算权重确定
- !important
- 内联样式
- 后写的优先级高

### 雪碧图的作用
- **雪碧图** 就是将很多个图片进行拼接成一个图片，然后通过 `background-position `等属性进行偏移，在网页中得到对应图片，来达到减少http请求，提高页面加载性能。
- 有一些情况下可以减少图片大小（例如png格式图片，每张图片颜色基本上一样的，有可能总的图片大小是小于每个图片加起来的大小的）


### 自定义字体的使用场景
- 宣传 / 品牌 / banner 等固定文案
- 字体图标（将文字变为图标）

### base64的作用
将图片进行base64编码后，就是一个字符文本，缺点之一就是图片的体积会增大 `1/3` 左右，并且放入css文件中，也会导致css文件变大。另外，虽然能减少http请求，但增大了解码的开销。适用于小图标`icon`，例如`loading`文件等。最后，在开发环境一般不采用直接将图片进行 `base64` 编码，因为对于协同开发来说，无法知晓图片原样，只有一个文本。

- 用于减少http请求
- 适用于小图片
- base64的体积约为原图的 4/3

### 伪类和伪元素的区别？
- 伪类 表 状态（某元素是个链接 link状态）
- 伪元素是真的有元素（`::before{}`，在页面中会显示内容）
- 前者使用单冒号，后者使用双冒号


### 如何美化checkbox
- label [for] 和 id
- 隐藏原生 input（所有的样式由 `label` 来搞定）
- :checked + label

![](https://img-blog.csdnimg.cn/20200527225852233.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
