## 实验内容

训练数据见trainingData.mat，测试数据见testingData.mat。编程实现K最近邻算法。函数为：[class]=KNN_Classify_E(trainingSamples, trainingLabels, testingSample,k)。

## 数据

测试代码如下：

```c
load('testingData.mat');
load('trainingData.mat');
%[trAttr]=normalize(trAttr);
%[tstAttr]=normalize(tstAttr);
k=3;
predictlabel =zeros(length(tstLabels),1);
for i=1:length(tstLabels)
   predictlabel(i) =KNN_Classify_E(trAttr, trLabels ,tstAttr(i,:) ,k);   
end
accurate =sum(predictlabel==tstLabels)/length(tstLabels);
disp(accurate);
```

**训练数据见trainingData.mat，测试数据见testingData.mat**

链接：https://pan.baidu.com/s/1Or3DpNVoCdzXoI2z3iu_mw 
提取码：wa6z 

## 算法处理

KNN_Classify_E函数的处理流程与说明如下：

```c
输入参数：k值、trainingSamples（训练数据集，M*N矩阵，M为样本数，N为属性数）、trainingLabels（训练数据集的分类标签0、1、2...，M*1矩阵）, testingSample（测试数据，1*N矩阵）
输出参数：class（测试数据对应类别标签）
算法流程：
1、得到训练数据集trainingSamples的大小M，N
2、初始化Distance数组（M*1），用来存储每个训练样本与测试样本的距离。
3、对每一个训练样本trainingSamples(i,:)【for i=1:M】，计算其与测试样本testingSample之间的距离，存储在Distance（i）中。【计算两个样本之间的欧氏距离，调用函数dist_E(vect1,vect2)，其中dist_E()为自定义函数，参见上机练习2】
4、对Distance数组排升序【sort函数】
5、取得排序前K个距离对应的序号，将序号对应的训练数据的分类标签得到赋给labs 
6、得到labs数组的不重复元素，存储在数组All_labs 【unique函数】
7、得到不重复元素（数组All_labs ）的个数LabNum
8、 （for i=1: LabNum ）对每一个不重复的分类标签All_labs(i) ，查找【find函数】最近的k个类别标签labs中，等于All_labs(i)的有几个，将该数目作为第i类的投票数Vote(i)
9、求投票数Vote(i)的最大值所在的索引ind
10、All_labs(ind)是最大投票数对应的类别标签，即为算法输出结果class
```

 


函数 [class]=KNN_Classify_E(trainingSamples, trainingLabels, testingSample,k)：

## 实验代码

```c
function [c]=KNN_Classify_E(trainingSamples, trainingLabels, testingSample,k)
[M,N]=size(trainingSamples);  %得到训练数据集trainingSamples的大小M，N

Distance=zeros(M,1);  %初始化Distance数组（M*1），用来存储每个训练样本与测试样本的距离

%对每一个训练样本trainingSamples(i,:)【for i=1:M】，
%计算其与测试样本testingSample之间的距离，存储在Distance（i）中
for i=1:M
    trainingS=trainingSamples(i,:);
    Distance(i)=dist_E(trainingS,testingSample);
end

[val idx]=sort(Distance);  %对Distance数组排升序

%取得排序前K个距离对应的序号，将序号对应的训练数据的分类标签得到赋给labs 
labs=trainingLabels(idx(1:k));

%得到labs数组的不重复元素，存储在数组All_labs 【unique函数】
All_labs=unique(labs);

%得到不重复元素（数组All_labs ）的个数LabNum
LabNum=length(All_labs);

%（for i=1: LabNum ）对每一个不重复的分类标签All_labs(i) ，
%查找【find函数】最近的k个类别标签labs中，等于All_labs(i)的有几个，
%将该数目作为第i类的投票数Vote(i)
Vote=zeros(LabNum,1);
for i=1:LabNum
    Vote(i)=length(find(labs==All_labs(i)));
end

%求投票数Vote(i)的最大值所在的索引ind
[val idx]=max(Vote);
%All_labs(ind)是最大投票数对应的类别标签，即为算法输出结果class
c=All_labs(idx);

end
```

## 测试结果

![](https://img-blog.csdnimg.cn/20200601104725372.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
## matlab 工具函数 —— normalize（归一化数据）

```css
function [Samples2]=normalize(Samples)
[M,N] = size(Samples);

Samples2 = zeros(M,N); %初始化Samples2数组（M*N）
for i=1:N
    allAtr = Samples(:,i);
    STD = std(allAtr);    % 求标准差
    MEAN = mean(allAtr);  % 求均值
    x = (allAtr-MEAN)/STD;
    Samples2(:,i)=x;
end
end
```
## 测试数据

```c
load('testingData.mat');
load('trainingData.mat');
[trAttr]=normalize(trAttr);
[tstAttr]=normalize(tstAttr);
k=3;
predictlabel =zeros(length(tstLabels),1);
for i=1:length(tstLabels)
   predictlabel(i) =KNN_Classify_E(trAttr, trLabels ,tstAttr(i,:) ,k);   
end
accurate =sum(predictlabel==tstLabels)/length(tstLabels);
disp(accurate);
```


## 测试结果
![](https://img-blog.csdnimg.cn/2020060110483426.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)




```c
学如逆水行舟，不进则退
```
