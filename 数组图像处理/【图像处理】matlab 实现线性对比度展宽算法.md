## 实验内容
实现线性对比度展宽算法


## 实验过程

```c
读入图像到矩阵F
得到F的行列数与颜色通道数：m,n,c
如果颜色通道数c>1，则将彩色图像转化为灰度图rgb2gray
初始化输出矩阵G
对于G的每一行i
     对于G的每一列j
     根据公式(教材P36)，由F(i,j)计算G(i,j)
```

![](https://img-blog.csdnimg.cn/20200601165421146.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
## 测试代码
```c
fa = 5;fb = 30;
 	ga = 80;gb = 100;
    ImPath='.\im\pict1.png';
    J=ContrastWidening(ImPath,fa,fb,ga,gb);
    figure,imshow(ImPath);
figure,imshow(J);
```
## 实验所需图片
链接：https://pan.baidu.com/s/1LaxnZdLeY3LnKKv276E0pA 
提取码：vk8y

## 实验源码
```c
function J=ContrastWidening(ImPath,fa,fb,ga,gb)
x = imread(ImPath); %读取图像到矩阵I
[m,n,c] = size(x);  %读取图像的行数和列数
if(c>1)
    I=rgb2gray(x);
end
J=zeros(m,n);
I = double(I);  %将I数据转换成double类型
k1 = ga/fa;     %计算比例系数k1,k2,k3
k2 = (gb-ga)/(fb-fa);
k3 = (255-gb)/(255-fb);
for i=1:m
    for j=1:n
        if I(i,j)<fa
            J(i,j) = k1*I(i,j);
        elseif I(i,j)<fb
            J(i,j) = k2*(I(i,j)-fa)+ga;
        else
            J(i,j) = k3*(I(i,j)-fb)+gb;
        end
    end
end
J = uint8(J);  %转换uint8编码
end
```
## 实验结果
![](https://img-blog.csdnimg.cn/20200601165801848.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
```c
学如逆水行舟，不进则退
```
