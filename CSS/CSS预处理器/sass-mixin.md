### sass mixin
创建 `mixin.scss` 文件，复制如下代码：
```css
$fontSize: 12px;
$bgColor: red;

@mixin block($fontSize){
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
        @include block($fontSize);
    }
    .content{
        @include block($fontSize+2px);
        &:hover{
            background: $bgColor;
        }
    }
}
```

创建 `mixin-sass.css` 文件，执行如下代码：

```css
node-sass --output-style expanded mixin.scss > mixin-sass.css
```
查看`mixin-sass.css` 文件，发现 `.block` 没有了，在CSS内部就完成了样式复用。

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

总结：从上文对比来看，sass mixin 除了调用变量符号要换为 `$` 外，抽离公共样式需要使用 `@mixin` ，此外，调用时还需要使用 `@include` 。

那么，mixin还能做什么呢？

例如，对于布局方面，我们在上文提到了清楚浮动的方式，那么，我们就可以将这段样式进行复用，只需要在需要的元素处引用即可。
