### less变量
创建 `variable-less.less` 文件

```css
@fontSize: 12px;
@bgColor: red;

body{
    padding: 0;
    margin: 0;
}
.wrapper{
    background: lighten(@bgColor,40%);
    .nav{
        font-size: @fontSize;
    }
    .content{
        font-size: @fontSize+2px;
        &:hover{
            background: @bgColor;
        }
    }
}
```

创建 `variable-less.css` 文件，执行如下命令：
```css
lessc variable-less.less > variable-less.css
```
可以得到如下代码：
```css
body {
  padding: 0;
  margin: 0;
}
.wrapper {
  background: #ffcccc;
}
.wrapper .nav {
  font-size: 12px;
}
.wrapper .content {
  font-size: 14px;
}
.wrapper .content:hover {
  background: red;
}
```
