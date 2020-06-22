## 实验目的
（1）理解聚类算法的基本原理。
（2）掌握kmeans聚类算法的原理与实现。

## 实验内容

1、数据见 `data.mat`，编程实现 `K means` 算法代码 `K_MeansMt`，并写出详细注释。

测试代码如下：

```javascript
load 'data.mat';
[u re]=K_MeansMt(data,3);  %最后产生簇标号 re 
[m n]=size(re);
%最后显示聚类后的数据
figure;
hold on;
for i=1:m 
    if re(i)==1   
         plot(data(i,1),data(i,2),'ro'); 
    elseif re(i)==2
         plot(data(i,1),data(i,2),'go'); 
    else 
         plot(data(i,1),data(i,2),'bo'); 
    end
end
grid on;
```
## 测试数据
数据见 `data.mat`

链接: https://pan.baidu.com/s/1vRSaZVzEI69ING6IQWJ-zA 

提取码: 338y
![](https://img-blog.csdnimg.cn/20200622091615834.png)

## 实验原理
### 基本K均值算法
#### K均值的算法步骤

- 首先选择K个初始质心，其中K是用户指定的参数，即所期望的簇的个数。每个点指派到最近的质心，而指派到一个质心的点集为一个簇。
- 然后，根据指派到簇的点，更新每个簇的质心。
- 重复指派和更新步骤，直到簇不发生变化，或等价的，直到质心不发生变化。


##### 算法流程如下：
- 选择 `k`个点作为初始质心
- repeat：
-   将每个点指派到最近的质心，形成 `k` 个簇
-   重新计算每个簇的质心
- until 质心不发生变化

对于邻近性函数和质心类型的某些组合，k均值总是收敛到一个解，即k均值到达一种状态，其中所有点都不会从一个簇转移到另一个，因此质心不再改变。然而，由于大部分收敛都发生在早期阶段，因此通常用较弱的条件替换算法（上述第5行）。例如，用“直到仅有1%的点改变簇”。


## 实验代码

```javascript
%%k表示数据一共分多少类
%%data是输入的不带分类标号的数据
%%u是每一类的中心
%%clusterID是返回的带分类标号的数据

function [u clusterID] = K_MeansMt(data,k)
    [m n] = size(data); %m是数据个数，n是数据维数
    maxn = zeros(1,n); %每一维最大的数
    minn = zeros(1,n); %每一维最小的数
    u = zeros(k,n); %随机初始化，最终迭代到每一类的中心位置
    for i=1:n
        maxn(i) = max(data(:,i)); %每一维最大的数
        minn(i) = min(data(:,i)); %每一维最小的数
        for j=1:k
            u(j,i) = minn(i)+(maxn(i)-minn(i))*rand(); %随机初始化，保证处于[minn,maxnn]之间
        end
    end
    
    while 1
        pre_u = u; %上一次求得的质心位置
        coordinate_difference{m,k} = [];
        for i=1:m
            % data(i,:)-u(j,:) 为计算质心做准备
            for j=1:k
                coordinate_difference{i,j} = data(i,:) - u(j,:);
            end
        end
        Dist = ones(m,k)*-1;
        for i=1:m  %计算质心
            c=zeros(1,k);
            for j=1:k
                c(j) = norm(coordinate_difference{i,j});
            end
            [cmin index] = min(c);  %%哪个类的距离最小（index为类号）
            Dist(i,index) = norm(coordinate_difference{i,index});
        end
        
        for i=1:k
            ind = find(Dist(:,i)>=0);
            u(i,:) = mean(data(ind,:));
        end
        
        if(norm(pre_u - u)<0.1)  %不断迭代直到位置不再变化
            break;
        end
    end
    
    clusterID = [];
    for i=1:m
        dist = [];
        for j=1:k
            dist = [dist norm(data(i,:)-u(j,:))];  %每个点到稳定后的类中心的距离
        end
        [x index] = min(dist);  %%选择距离最小的类别号
        clusterID = [clusterID;index];
    end
end     
```

## 实验结果
![](https://img-blog.csdnimg.cn/20200622090557845.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
```javascript
学如逆水行舟，不进则退
```
