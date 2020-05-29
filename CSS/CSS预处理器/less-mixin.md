### less mixin
创建 `mixin.less` 文件，复制如下代码：
```css
@fontSize: 12px;
@bgColor: red;

.block(@fontSize){
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}
body{
    padding: 0;
    margin: 0;
}
.wrapper{
    background: lighten(@bgColor,40%);
    .nav{
        .block(@fontSize);
    }
    .content{
        .block(@fontSize+2px);
        &:hover{
            background: @bgColor;
        }
    }
}
```
创建 `mixin-less.css` 文件，执行如下代码：

```css
lessc mixin.less > mixin-less.css
```

查看`mixin-less.css` 文件，发现 `.block` 没有了，

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
  border: 1px solid #ccc;
  border-radius: 4px;
}
.wrapper .content {
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.wrapper .content:hover {
  background: red;
}
```
