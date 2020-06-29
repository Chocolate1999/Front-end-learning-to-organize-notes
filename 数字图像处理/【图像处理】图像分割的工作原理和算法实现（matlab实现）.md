## 实验目的
1、掌握p参数分割的工作原理和算法实现

2、掌握均匀性度量法分割的工作原理和算法实现

## 实验图片
链接：https://pan.baidu.com/s/1gSpYLw9Xz5OK_hSqSGeUwQ 
提取码：o4au

![](https://img-blog.csdnimg.cn/20200629220352423.png)

## 实验内容

### 实现P-参数法的图像分割的代码
测试代码如下：
```javascript
Im=imread('yw2_g.jpg'); 
[Im2]=pParam0(Im,0.7974);
imshow(Im2);
```
实验代码：

```javascript
function Im2 = pParam0(im,perct)
bestDelta = inf;
BestThrd = 0;
[m,n] = size(im);
for Thrd = 0:255
    ind1 = find(im<=Thrd);
    ind2 = find(im>Thrd);
    if(~isempty(ind1) && ~isempty(ind2))
        p1 = length(ind1)/(m*n);
        p2 = length(ind2)/(m*n);
        Delta = abs(p2-perct);
        if(Delta < bestDelta)
            BestThrd = Thrd;
            bestDelta = Delta;
        end
    end
end
Im2 = zeros(m,n);
Im2( find(im > BestThrd) ) =1;
Im2 = logical(Im2);
```

实验结果：

![](https://img-blog.csdnimg.cn/20200629214530475.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 实现均匀性度量法的图像分割的代码
测试代码：

```javascript
Im=imread('cameraman.tif'); 
[Im2,BestClThrd]=jyxdl(Im);
imshow(Im2);
```
实验代码：
```javascript
function [Im2,BestClThrd] = jyxdl(Im)
BestCost = inf;
BestClThrd = 0;
[m,n] = size(Im);
for ClThrd = 0:255
    ind1 = find(Im<=ClThrd);
    ind2 = find(Im>ClThrd);
    if(~isempty(ind1) && ~isempty(ind2))
        mu1 = mean(Im(ind1));
        mu2 = mean(Im(ind2));
        sigma1_sq = sum((Im(ind1)-mu1).^2);
        sigma2_sq = sum((Im(ind2)-mu2).^2);
        p1 = length(ind1)/(m*n);
        p2 = length(ind2)/(m*n);
        Cost = p1*sigma1_sq + p2*sigma2_sq;
        if( Cost < BestCost )
            BestClThrd = ClThrd;
            BestCost = Cost;
        end
    end
end
Im2 = zeros(m,n);
Im2 ( find(Im > BestClThrd )) =1;
Im2 = logical(Im2);
end
```


实验结果：

![](https://img-blog.csdnimg.cn/20200629214536666.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

```javascript
学如逆水行舟，不进则退
```
