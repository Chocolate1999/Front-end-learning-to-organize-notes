## 实验内容
实现灰度图像的直方图均衡化算法

## 实验过程

 1. 读入一幅灰度图像，存放在图像矩阵F中。（imread函数）。
 2. 获得输入图像尺寸M、N、C（size函数）。并将图像矩阵F中的数据由uint8类型转换为double类型以便后续处理。如果颜色通道数C>1，则将彩色图像转化为灰度图rgb2gray
 3. 计算图像F的灰度直方图h（imhist函数；或者通过两重循环遍历每个像素点从而得到每个灰度值的累计像素点个数）。
 4. 计算计算原图的灰度分布概率hs。hs=h/(M*N)        (i=0,1,…,255)。
 5. 计算原图灰度的累计分布hp0（使用cumsum函数）。
 6. hp1=hp0*255。
 7. 将hp1四舍五入，令hp1(1)=0。
 8. 根据步骤（6）得到的新旧图像灰度值的映射结果，设置两重循环遍历图像F中所有像素点，求出每一个像素点的灰度值F(i,j)，计算F(i,j)对应数组hp1中的位置x，得到hp1(x)并赋给新图像的对应像素值G(i,j)
 9. 将计算得到的新图像矩阵中所有点的灰度值由double转换为uint8。输出最终得到的结果图像。

## 测试代码

```c
F  = imread('.\im\pict1.png');
[G]=imhisteq(F);
figure,imshow(G);
```
## 实验所需图片
链接：https://pan.baidu.com/s/1LaxnZdLeY3LnKKv276E0pA 
提取码：vk8y

## 实验源码

```c
function [J] = imhisteq(I) 
[height,width,d]=size(I);  %获得输入图像尺寸M、N、C（size函数）
if(d>1)
    I=rgb2gray(I); %如果颜色通道数C>1，则将彩色图像转化为灰度图rgb2gray
end
nbins = 256;
%计算图像F的灰度直方图h（imhist函数；
%或者通过两重循环遍历每个像素点从而得到每个灰度值的累计像素点个数）。
hist_0 = imhist(I,nbins)';
%计算原图的灰度分布概率hs。hs=h/(M*N)        (i=0,1,…,255)。
hist_1 = hist_0/(height*width);
%计算原图灰度的累计分布hp0（使用cumsum函数）
hp_0 = cumsum(hist_1);
%hp1=hp0*255 将hp1四舍五入，令hp1(1)=0
hp_1 = round(hp_0*255);
hp_1(1)=0;

I0 = double(I);
%置两重循环遍历图像F中所有像素点，求出每一个像素点的灰度值F(i,j)
for i=1:height
    for j=1:width
        GrayScale=I0(i,j);
        NewGrayScale = hp_1(GrayScale+1);
        J(i,j)=NewGrayScale;
    end
end
%计算得到的新图像矩阵中所有点的灰度值由double转换为uint8
J = uint8(J);  %转换uint8编码
```

## 测试结果
![](https://img-blog.csdnimg.cn/20200601170315326.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)


```c
学如逆水行舟，不进则退
```
