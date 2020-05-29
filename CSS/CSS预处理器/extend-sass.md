### sass extend
创建 `extend-sass.scss` 文件，复制如下代码：
```css
$fontSize: 12px;
$bgColor: red;

.block{
    font-size: $fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}
body{
    padding: 0;
    margin: 0;
}
.wrapper{
    background: lighten($bgColor,40%);
    .nav{
        @extend .block;
    }
    .content{
        @extend .block;
        &:hover{
            background: $bgColor;
        }
    }
}
```

创建  `extend-sass.css` 文件，执行如下代码：

```css
node-sass --output-style expanded extend-sass.scss > extend-sass.css
```
查看 `extend-sass.css` 文件，发现代码体积相对减少了。

```css
.block, .wrapper .nav, .wrapper .content {
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: #ffcccc;
}

.wrapper .content:hover {
  background: red;
}
```
