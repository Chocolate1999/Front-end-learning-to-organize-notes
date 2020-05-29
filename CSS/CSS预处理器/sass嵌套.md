### sass嵌套

全局安装 `sass`

```cpp
cnpm install node-sass -g
```
创建一个 `test.scss` 文件

```css
body{
    padding: 0;
    margin: 0;
}
.wrapper{
    background: white;
    .nav{
        font-size: 12px;
    }
    .content{
        font-size: 14px;
        &:hover{
            background: red;
        }
    }
}
```
执行如下命令，查看输出结果：
```css
node-sass test.scss
```
![](https://img-blog.csdnimg.cn/20200529162015247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
执行如下命令，输出到 `test-scss.css` 文件中
```css
node-sass test.scss > test-scss.css
```


查看  `test-scss.css` 文件，得到如下结果：

```css
body {
  padding: 0;
  margin: 0; }

.wrapper {
  background: white; }
  .wrapper .nav {
    font-size: 12px; }
  .wrapper .content {
    font-size: 14px; }
    .wrapper .content:hover {
      background: red; }
```

从以上代码来看，sass嵌套会保留原来嵌套样式，对于css观赏性来说，并不是我们特别想要的，于是我们可以执行如下命令，更改输出样式：

```css
node-sass --output-style expanded test.scss > test-scss.css
```
输出结果就和less嵌套一样了，读者可以自己跑一遍！
