首先，我们来了解一下css盒模型的基本概念：

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。 分别两种盒型**标准盒模型**和**IE盒模**


<h2>盒子大小</h2>

<div>盒子的宽度 = 内容宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距</div>

<div>盒子的高度 = 内容高度 + 上填充 + 下填充 + 上边框 + 下边框 + 上边距 + 下边距</div>

<h2>标准盒模型和IE盒模型区别</h2>

- 标准盒模型:content=content

<img src="https://img-blog.csdnimg.cn/20200222185449952.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>

- IE盒模型:content = width+padding+border

<img src="https://img-blog.csdnimg.cn/20200222185613912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>

<h2>css如何设置这两种模型</h2>

- 通过css中的box-sizing属性
 - [x] 标准盒模型 ：content-box
- [x] IE盒模型 ： border-box


<h2>JS如何获取盒模型对应的宽和高</h2>

- node.style.height/width

><div>这种方式只能取到dom元素内嵌样式的宽和高，通过外联样式link引入和在style标签中设置的样式这两者都是获取不到node的宽和高的</div>

```javascript
   <div style="width:100px;height:50px" id="agoni">agoni</div>
   
   document.getElementById("agoni").style.width ="200px";
```
><div>1、只能操作行内样式；</div>
><div>2、只包括内容区，不包括border和padding部分(只有content)；</div>
><div>3、返回值带单位，返回值的数据类型是string。</div>

- node.currentStyle.width/height(只有ie支持)

><div>这种方式是获取渲染后的结果，但只在旧版本的IE浏览器中支持，该特性是非标准的，尽量不要在生产环境中使用它。style、内联、外联样式均支付；返回值带单位，返回值的数据类型是string；可惜只有IE支持。</div>

- window.getComputedStyle(node).width/height

><div>window.getComputedStyle()方法返回一个对象</div>
><div>返回值带单位，返回值的数据类型是string。</div>

<img src="https://img-blog.csdnimg.cn/20200222190150407.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>

- node.getBoundingClientRect().width/height

><div>1、返回元素的大小及其 只相对于可视去窗口。包含<font color="red">边框(border)</font>、<font color="red">内边距(padding)</font>以及CSS设置的<font color="red">宽度(width)</font>值</div>

><div>2、返回值不带单位，返回值的数据类型是number。</div>

<img src="https://img-blog.csdnimg.cn/20200222190948324.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70"></img>

<div align="center"><img src="https://img-blog.csdnimg.cn/20200222191043175.png"></img></div>


- node.offsetWidth/offsetHeight

><div>1、包含元素的边框(border)、内边距(padding)、滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)和高度（height）的值。</div>

><div>2、返回值不带单位，返回值的数据类型是number；</div>

><div>3、还有offsetHeight/Width、offsetLeft/Top</div>

><div>4、offset 的方向值需要考虑到父级，如果父级是定位元素，那么子元素的offset值相对于父元素，如果父元素不是定位元素，那么子元素的offset值相对于可视区窗口。</div>

<div align="center"><img src="https://img-blog.csdnimg.cn/20200222191206328.png"></img></div>



```javascript
学如逆水行舟，不进则退
```
