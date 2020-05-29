### less loop
创建 `loop-less.less` 文件，复制如下代码


```css
.gen-col(@n) when (@n > 0){
    .gen-col(@n - 1);
    .col-@{n}{
        width: 1000px/12*@n;
    }
}

.gen-col(12);
```
创建 `loop-less.css` 文件，执行如下代码：
```css
lessc loop-less.less > loop-less.css
```
查看 `loop-less.css` 文件，发现有12个样式
```css
.col-1 {
  width: 83.33333333px;
}
.col-2 {
  width: 166.66666667px;
}
.col-3 {
  width: 250px;
}
.col-4 {
  width: 333.33333333px;
}
.col-5 {
  width: 416.66666667px;
}
.col-6 {
  width: 500px;
}
.col-7 {
  width: 583.33333333px;
}
.col-8 {
  width: 666.66666667px;
}
.col-9 {
  width: 750px;
}
.col-10 {
  width: 833.33333333px;
}
.col-11 {
  width: 916.66666667px;
}
.col-12 {
  width: 1000px;
}
```
