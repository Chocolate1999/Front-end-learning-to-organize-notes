## 实验内容

编程实现任意给定两个相同维度的向量之间的欧氏距离计算函数dist_E(x,y)。

## 数据
输入：两个任意k维向量x和y，其中k的值随由数据决定。如x=[3,20,3.5], y=[-3,34,7]。
测试代码如下：

```c
x=[3,20,3.5]; y=[-3,34,7];
dist=dist_E(x,y);
```

## 实验代码
```c
%x=[3,20,3.5]; y=[-3,34,7];
%dist=dist_E(x,y);
function dist=dist_E(vec1,vec2)
dist=[];
if(length(vec1)~=length(vec2))
    disp('长度不一样，不符合要求！');
else
    ans=(vec1-vec2).*(vec1-vec2);
    dist=sqrt(sum(ans));
end
end
```


## 测试结果
![](https://img-blog.csdnimg.cn/20200601104009792.png)

```c
学如逆水行舟，不进则退
```
