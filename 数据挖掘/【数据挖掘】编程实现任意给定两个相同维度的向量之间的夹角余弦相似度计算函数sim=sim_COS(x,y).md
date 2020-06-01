## 实验内容

编程实现任意给定两个相同维度的向量之间的夹角余弦相似度计算函数sim=sim_COS(x,y)。输入：两个任意k维向量x和y，其中k的值随由数据决定。

## 数据
测试代码如下：

```c
x=[3,20,3.5]; y=[-3,34,7];
sim=sim_COS(x,y);
```

## 实验代码

```css
function sim=sim_COS(vec1,vec2)
sim=[];
if(length(vec1)~=length(vec2))
    disp('长度不一样，不符合要求！');
else
    sim=sum(vec1.*vec2)/(sqrt(sum(vec1.*vec1))*sqrt(sum(vec2.*vec2)));
end
end
```

## 测试结果
![](https://img-blog.csdnimg.cn/20200601104330687.png)


```c
学如逆水行舟，不进则退
```
