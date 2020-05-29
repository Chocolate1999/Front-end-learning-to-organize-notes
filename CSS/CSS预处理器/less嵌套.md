### less嵌套
全局安装 `less`

```cpp
npm install less -g
```

![](https://img-blog.csdnimg.cn/20200529155848221.png)

创建一个 `test.less` 文件
```cpp
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
在该文件处调用终端，执行以下命令：

```cpp
lessc test.less
```

输出结果：

![](https://img-blog.csdnimg.cn/20200529160202644.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

执行如下命令，输出到 `test.css` 文件中

```css
lessc test.less > test.css
```

查看 `test.css` 文件，得到如下结果：

```css
body {
  padding: 0;
  margin: 0;
}
.wrapper {
  background: white;
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
