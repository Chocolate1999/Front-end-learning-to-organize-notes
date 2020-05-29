### sass loop

创建 `loop-sass.scss` 文件，复制如下代码：

```css
@mixin gen-col($n){
    @if $n > 0 {
        @include gen-col($n - 1);
        .col-#{$n}{
            width: 1000px/12*$n;
        }
    }
}

@include gen-col(12);
```
创建 `loop-sass.css`，执行如下代码：
```css
node-sass --output-style expanded loop-sass.scss > loop-sass.css
```
查看 `loop-sass.css` 文件，发现有12个样式
```css
.col-1 {
  width: 83.33333px;
}

.col-2 {
  width: 166.66667px;
}

.col-3 {
  width: 250px;
}

.col-4 {
  width: 333.33333px;
}

.col-5 {
  width: 416.66667px;
}

.col-6 {
  width: 500px;
}

.col-7 {
  width: 583.33333px;
}

.col-8 {
  width: 666.66667px;
}

.col-9 {
  width: 750px;
}

.col-10 {
  width: 833.33333px;
}

.col-11 {
  width: 916.66667px;
}

.col-12 {
  width: 1000px;
}
```

上述版本代码或许是挺复杂的，好在 `sass`提供了for循环，见如下代码：

```css
@for $i from 1 through 12 {
    .col-#{$i} {
        width: 1000px/12*$i;
    }
}
```
