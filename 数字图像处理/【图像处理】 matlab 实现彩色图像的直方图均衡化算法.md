## 实验内容
实现彩色图像的直方图均衡化算法
## 实验过程
算法流程可以参考灰度图像的直方图均衡化算法 （<a href="https://chocolate.blog.csdn.net/article/details/106476763">传送门</a>）

## 测试代码

```c
F=imread('.\im\f11.jpg');
[G] = imhisteq_C(F);
figure,imshow(F);figure,imshow(G);
```

## 实验所需图片
链接：https://pan.baidu.com/s/1LaxnZdLeY3LnKKv276E0pA 
提取码：vk8y


## 实验源码

```c
function [J] = imhisteq_C(Im) 
[height,width,d]=size(Im);  %获得输入图像尺寸M、N、C（size函数）
for index_d=1:d
I = Im(:,:,index_d);
nbins = 256;
%计算图像F的灰度直方图h（imhist函数；
%或者通过两重循环遍历每个像素点从而得到每个灰度值的累计像素点个数）。
hist_0 = imhist(I,nbins)';
%计算原图的灰度分布概率hs。hs=h/(M*N)        (i=0,1,…,255)。
hist_1 = hist_0/(height*width);
%计算原图灰度的累计分布hp0（使用cumsum函数）
hp_0 = cumsum(hist_1);
%hp1=hp0*255 将hp1四舍五入，令hp1(1)=0
%hp_1 = round(hp_0*255);
hp_1 = hp_0*255;
hp_1(1)=0;

I0 = double(I);
%置两重循环遍历图像F中所有像素点，求出每一个像素点的灰度值F(i,j)
for i=1:height
    for j=1:width
        Value=I0(i,j);
        NewValue = hp_1(Value+1);
        NewValue = round(NewValue);
        J(i,j,index_d)=NewValue;
    end
end
%计算得到的新图像矩阵中所有点的灰度值由double转换为uint8
J = uint8(J);  %转换uint8编码
end
```

## 测试结果
![](https://img-blog.csdnimg.cn/20200601171917585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)


```c
学如逆水行舟，不进则退
```















