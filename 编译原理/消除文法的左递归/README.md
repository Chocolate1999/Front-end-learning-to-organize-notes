
## 背景
期末考试免考，冲！

## 实验名称
消除一切左递归

## 实验时间
2020年5月27日 到 2020年5月31日

## 院系
信息科学与工程学院

## 组员姓名
Chocolate、kry2025、钟先生、leo、小光

## 实验环境介绍
- windows 10 操作系统
- Eclipse 进行 java 编程
- CodeBlocks 进行 C++ 编程

## 实验目的与要求
### 目的
- 深刻理解左递归的算法
- 掌握消除左递归的过程
- 加强团队合作能力
- 提高自身的编程能力和解决问题的能力

### 要求
- 编程实现消除一切左递归
- 算法简洁，不冗余

## 解决问题
### 产生式直接消除左递归
形如 P → Pα | β 可以通过直接消除转化为：
<center>P → βP′</center>

<center>P′ → αP′ | ϵ</center>

### 产生式间接消除左递归
有时候虽然形式上产生式没有递归，但是因为形成了环，所以导致进行闭包运算后出现左递归，如下：

<center>S → Qc | c</center>
<center>Q → Rb | b</center>
<center>R → Sa | a</center>


虽不具有左递归，但S、Q、R都是左递归的，因为经过若干次推导有

- SQcRbcSabc
- QRbSabQcab
- RSaQcaRbca

就显现出其左递归性了，这就是间接左递归文法。


消除间接左递归的方法是:
>把间接左递归文法改写为直接左递归文法，然后用消除直接左递归的方法改写文法。
如果一个文法不含有回路，即形如PP的推导，也不含有以ε为右部的产生式，那么就可以采用下述算法消除文法的所有左递归。

![](https://img-blog.csdnimg.cn/20200531211310521.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
```c
for （i＝1；i<=n；i++）
   for （j＝1；j<=i－1；j++）
   { 把形如Ai→Ajγ的产生式改写成Ai→δ1γ /δ2γ /…/δkγ 
       其中Aj→δ1 /δ2 /…/δk是关于的Aj全部规则；
       消除Ai规则中的直接左递归；
   }
```

![](https://img-blog.csdnimg.cn/20200531211344958.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
