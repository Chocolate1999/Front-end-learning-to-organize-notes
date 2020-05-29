### less import
创建 `import-less.less` 文件，复制如下代码：

```css
@import "./mixin";
@import "./variable-less";
```
创建 `import-less.css` 文件，执行如下代码：
```css
lessc import-less.less > import-less.css
```
查看 `import-less.less` 文件
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
