## Contest1092 - 2020年春季ACM集训队热身赛-第3场

**<font color=chocolate>比赛原地址：</font>** <a href="http://acm.hnucm.edu.cn/JudgeOnline/contest.php?cid=1092">传送门</a>

<hr/>

**<font color=red>推荐阅读：</font>** <a href="https://chocolate.blog.csdn.net/article/details/105264747">【白嫖党】如何把前端学好？看完这篇，直呼：太强了！（历经半个月之作）</a>


<!-- TOC -->

- [Contest1092 - 2020年春季ACM集训队热身赛-第3场](#contest1092---2020年春季acm集训队热身赛-第3场)
- [问题 A: 数字分类](#问题-a-数字分类)
    - [解题思路](#解题思路)
    - [AC代码](#ac代码)
- [问题 B: 福尔摩斯的约会](#问题-b-福尔摩斯的约会)
    - [解题思路](#解题思路-1)
    - [AC代码](#ac代码-1)
- [问题 C: 德才论](#问题-c-德才论)
    - [解题思路](#解题思路-2)
    - [AC代码](#ac代码-2)
- [问题 D: 锤子剪刀布](#问题-d-锤子剪刀布)
    - [解题思路](#解题思路-3)
    - [AC代码](#ac代码-3)
- [问题 E: 月饼](#问题-e-月饼)
    - [解题思路](#解题思路-4)
    - [AC代码](#ac代码-4)
- [问题 F: 打印沙漏](#问题-f-打印沙漏)
    - [解题思路](#解题思路-5)
    - [AC代码](#ac代码-5)
- [问题 G: 组个最小数](#问题-g-组个最小数)
    - [解题思路](#解题思路-6)
    - [AC代码](#ac代码-6)
- [问题 H: 跟奥巴马一起编程](#问题-h-跟奥巴马一起编程)
    - [解题思路](#解题思路-7)
    - [AC代码](#ac代码-7)
- [结尾](#结尾)

<!-- /TOC -->


## 问题 A: 数字分类

**题目描述**


给定一系列正整数，请按要求对数字进行分类，并输出以下5个数字：
A1 = 能被5整除的数字中所有偶数的和；
A2 = 将被5除后余1的数字按给出顺序进行交错求和，即计算n1-n2+n3-n4...；
A3 = 被5除后余2的数字的个数；
A4 = 被5除后余3的数字的平均数，精确到小数点后1位；
A5 = 被5除后余4的数字中最大数字。

**输入**

每个输入包含1个测试用例。每个测试用例先给出一个不超过1000的正整数N，随后给出N个不超过10000的待分类的正整数。数字间以空格分隔。

**输出**

对给定的N个正整数，按题目要求计算A1~A5并在一行中顺序输出。数字间以空格分隔，但行末不得有多余空格。
若其中某一类数字不存在，则在相应位置输出“N”。

**样例输入** 

```javascript
13 1 2 3 4 5 6 7 8 9 10 20 16 18
```

**样例输出** 

```javascript
30 11 2 9.7 9
```


### 解题思路
没用到什么特殊的方法，注意一些细节就好了，具体看如下代码好了

### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,v,sizeof(a))
using namespace std;
typedef long long ll;
const int maxn=1e3+5;
int n,x;
int a[10];
int main(){
    cin>>n;
    int k=1,cc=0,ans=0;
    for(int i=0;i<n;i++){
        cin>>x;
        if(x%5==0&&x%2==0) a[1]+=x;
        else if(x%5==1)  a[2]+=k*x,k=-k;
        else if(x%5==2) a[3]++;
        else if(x%5==3) a[4]+=x,++cc;
        else if(x%5==4) a[5]=max(a[5],x);
    }
    for(int i=1;i<=3;i++){
        if(!a[i]) cout<<"N ";
        else cout<<a[i]<<" ";
    }
    if(!a[4]) cout<<"N ";
        else printf("%.1f ",a[4]*1.0/cc);
    if(!a[5]) cout<<"N";
        else cout<<a[5]<<endl;
    return 0;
}
```

## 问题 B: 福尔摩斯的约会

**题目描述**

大侦探福尔摩斯接到一张奇怪的字条：“我们约会吧！ 3485djDkxh4hhGE 2984akDfkkkkggEdsb s&hgsfdk d&Hyscvnm”。大侦探很快就明白了，字条上奇怪的乱码实际上就是约会的时间“星期四 14:04”，因为前面两字符串中第1对位置相同的大写英文字母是第4个字母'D'，代表星期四（大写字符A到G表示星期一到星期日）；第2对位置相同的大写字母(A-N)或数字(0-9)表示HH，这里相同的字母是'E'，是第5个英文字母，代表一天里的第14个钟头（于是一天的0点到23点由数字0到9、以及大写字母A到N表示）；后面两字符串第1对相同的英文字母's'(区分大小写)同时出现在第4个位置（从0开始计数）上，代表第4分钟。现给定两对字符串，请帮助福尔摩斯解码得到约会的时间。
输入
输入在4行中分别给出4个非空、不包含空格、且长度不超过60的字符串。
输出
在一行中输出约会的时间，格式为“DAY HH:MM”，其中“DAY”是某星期的3字符缩写，即MON表示星期一，TUE表示星期二，WED表示星期三，THU表示星期
四，FRI表示星期五，SAT表示星期六，SUN表示星期日。题目输入保证每个测试存在唯一解。

**样例输入** 

```javascript
3485djDkxh4hhGE
2984akDfkkkkggEdsb
s&hgsfdk
d&Hyscvnm
```

**样例输出** 

```javascript
THU 14:04
```


### 解题思路
总共有4个字符串，前两个用来判断是星期几和小时，后两个是用来判断分钟

每次都只取第一个相等，即如果达到了符合条件的相等，就不用判断后面是否相等了

然后需要注意题目条件，我一开始条件搞错了，就...

![](https://img-blog.csdnimg.cn/20200405172409432.png)

### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,v,sizeof(a))
using namespace std;
const int maxn=1e2+5;
char s1[maxn],s2[maxn];
char day[7][maxn]={"MON","TUE","WED","THU","FRI","SAT","SUN"};
int main(){
    cin>>s1>>s2;
    int dd=0,idx=0,hh=0,mm=0;
    for(int i=0;s1[i]&&s2[i];i++){
        if(s1[i]==s2[i]&&s1[i]>='A'&&s1[i]<='G'){
            dd=s1[i]-'A';
            idx=i;
            break;
        }
    }
    for(int i=idx+1;s1[i]&&s2[i];i++){
        if(s1[i]==s2[i]&&s1[i]>='0'&&s1[i]<='9'){
            hh=s1[i]-'0';
            break;
        }
        else if(s1[i]==s2[i]&&s1[i]>='A'&&s1[i]<='N'){
            hh=s1[i]-'A'+10;
            break;
        }
    }
    cin>>s1>>s2;
    for(int i=0;s1[i]&&s2[i];i++){
        if(s1[i]==s2[i]&&((s1[i]>='a'&&s1[i]<='z')||(s1[i]>='A'&&s1[i]<='Z'))){
           mm=i;
           break;
        }
    }
    cout<<day[dd]<<" ";
    printf("%02d:",hh);
    printf("%02d\n",mm);
    return 0;
}
```
## 问题 C: 德才论

**题目描述**

宋代史学家司马光在《资治通鉴》中有一段著名的“德才论”：“是故才德全尽谓之圣人，才德兼亡谓之愚人，德胜才谓之君子，才胜德谓之
小人。凡取人之术，苟不得圣人，君子而与之，与其得小人，不若得愚人。”

现给出一批考生的德才分数，请根据司马光的理论给出录取排名。

**输入**

输入第1行给出3个正整数，分别为：N（<=10^5），即考生总数；L（>=60），为录取最低分数线，即德分和才分均不低于L的考生才有资格
被考虑录取；H（<100），为优先录取线——德分和才分均不低于此线的被定义为“才德全尽”，此类考生按德才总分从高到低排序；才分不到
但德分到线的一类考生属于“德胜才”，也按总分排序，但排在第一类考生之后；德才分均低于H，但是德分不低于才分的考生属于“才德兼
亡”但尚有“德胜才”者，按总分排序，但排在第二类考生之后；其他达到最低线L的考生也按总分排序，但排在第三类考生之后。

随后N行，每行给出一位考生的信息，包括：准考证号、德分、才分，其中准考证号为8位整数，德才分为区间[0, 100]内的整数。数字间以空格分隔。

**输出**

输出第1行首先给出达到最低分数线的考生人数M，随后M行，每行按照输入格式输出一位考生的信息，考生按输入中说明的规则从高到低排序。当某类考生中有多人总分相同时，按其德分降序排列；若德分也并列，则按准考证号的升序输出。

**样例输入** 

```javascript
14 60 80
10000001 64 90
10000002 90 60
10000011 85 80
10000003 85 80
10000004 80 85
10000005 82 77
10000006 83 76
10000007 90 78
10000008 75 79
10000009 59 90
10000010 88 45
10000012 80 100
10000013 90 99
10000014 66 60
```

**样例输出** 

```javascript
12
10000013 90 99
10000012 80 100
10000003 85 80
10000011 85 80
10000004 80 85
10000007 90 78
10000006 83 76
10000005 82 77
10000002 90 60
10000014 66 60
10000008 75 79
10000001 64 90
```


### 解题思路

这道题，比赛时没时间做了...

交了几发，wa了，但样例没问题，于是就找问题，结果出乎意料吧
改了两个地方就过了...


**原来版本：**

```javascript
stu[cnt].str=s,stu[cnt].dd=d,stu[cnt].cc=c,stu[cnt].sum=d+c;
```

**现在版本：**
```javascript
strcpy(stu[cnt].str,s),stu[cnt].dd=d,stu[cnt].cc=c,stu[cnt].sum=d+c;
```
**原来版本：**
```javascript
bool cmp(node x,node y){
    if(x.w!=y.w) return x.w>y.w;
    if(x.sum!=y.sum) return x.sum>y.sum;
    if(x.dd!=y.dd) return x.dd>y.dd;
    return x.str<y.str<0;
}
```

**现在版本：**

```javascript
bool cmp(node x,node y){
    if(x.w!=y.w) return x.w>y.w;
    if(x.sum!=y.sum) return x.sum>y.sum;
    if(x.dd!=y.dd) return x.dd>y.dd;
    return strcmp(x.str,y.str)<0;
}
```

看完之后，我：？？？下次记得调用函数吧。。。

![](https://img-blog.csdnimg.cn/20200405172923131.jpg#pic_center)
好了，说一下解题思路：

下面这段代码，肯定不是一下子就写出这么整齐的，结构体里面原本就三个变量的，后续根据所需才慢慢加的。

此题很关键的就在于如何把结构体按照已知条件进行排序，而且题目还分了批次。

这里不妨将几类人根据权值排序，即下面代码中的`w` 。

- 第一类考生——圣人（德才兼备） 定义权值 100
- 第二类考生——德达到优先录取，而才没达到，君子（德胜才） 定义权值  90
- 第三类考生——德才分均低于H，但是德分不低于才分  定义权值 80
- 第四类考生——达到最低线L 定义权值 70

**如何排序？**

- 首先，根据权值排序
- 然后，根据总分排序
- 总分相同，根据德分降序排序
- 德分相同，按准考证号的升序


### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,v,sizeof(a))
using namespace std;
const int maxn=1e5+5;
struct node{
    char str[20];
    int dd,cc;
    int w;
    int sum;
}stu[maxn];
int n,ls,hs,d,c;
char s[20];
bool cmp(node x,node y){
    if(x.w!=y.w) return x.w>y.w;
    if(x.sum!=y.sum) return x.sum>y.sum;
    if(x.dd!=y.dd) return x.dd>y.dd;
    return strcmp(x.str,y.str)<0;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n>>ls>>hs;
    int cnt=0;
    for(int i=0;i<n;i++){
        cin>>s>>d>>c;
        if(d>=ls&&c>=ls){
            strcpy(stu[cnt].str,s),stu[cnt].dd=d,stu[cnt].cc=c,stu[cnt].sum=d+c;
            if(d>=hs&&c>=hs) stu[cnt].w=100;
            else if(d>=hs&&c<hs) stu[cnt].w=90;
            else if(d<hs&&c<hs&&d>=c) stu[cnt].w=80;
            else stu[cnt].w=70;
            ++cnt;
        }
    }
    sort(stu,stu+cnt,cmp);
    cout<<cnt<<endl;
    for(int i=0;i<cnt;i++)
        cout<<stu[i].str<<" "<<stu[i].dd<<" "<<stu[i].cc<<endl;
    return 0;
}
```


## 问题 D: 锤子剪刀布

**题目描述**

大家应该都会玩“锤子剪刀布”的游戏：
现给出两人的交锋记录，请统计双方的胜、平、负次数，并且给出双方分别出什么手势的胜算最大。

**输入**

输入第1行给出正整数N（<=10^5），即双方交锋的次数。随后N行，每行给出一次交锋的信息，即甲、乙双方同时给出的的手势。C代表“锤子”、J代表“剪刀”、B代表“布”，第1个字母代表甲方，第2个代表乙方，中间有1个空格。

**输出**

输出第1、2行分别给出甲、乙的胜、平、负次数，数字间以1个空格分隔。第3行给出两个字母，分别代表甲、乙获胜次数最多的手势，中间有1个空格。如果解不唯一，则输出按字母序最小的解。

**样例输入** 

```javascript
10
C J
J B
C B
B B
B C
C C
C B
J B
B C
J J
```

**样例输出** 

```javascript
5 3 2
2 3 5
B B
```

### 解题思路

如下述代码所示，这道题写的有点糊了，一开始各种 if 暴力判断，写着写着输出不太对劲，b一直没有赢过？

卡了一段时间后，想着整合起来，然后输出处理了一下。

### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,v,sizeof(a))
using namespace std;
const int maxn=1e3+5;
int n,x;
int main(){
    int s=0,f=0,p=0;
    int ac=0,aj=0,ab=0,bc=0,bj=0,bb=0;
    char a[2],b[2];
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        cin>>a>>b;
        if((a[0]=='C'&&b[0]=='J')||(a[0]=='J'&&b[0]=='B')||(a[0]=='B'&&b[0]=='C')){
            s++;
            if(a[0]=='C')ac++;
            if(a[0]=='B')ab++;
            if(a[0]=='J')aj++;
        }
        else if((a[0]=='C'&&b[0]=='C')||(a[0]=='J'&&b[0]=='J')||(a[0]=='B'&&b[0]=='B')){
            p++;
        }else {
            f++;
            if(b[0]=='C')bc++;
            if(b[0]=='B')bb++;
            if(b[0]=='J')bj++;
        }
    }
    cout<<s<<" "<<p<<" "<<f<<endl;
    cout<<f<<" "<<p<<" "<<s<<endl;
    /*if(aj>ac&&aj>ab) cout<<"J ";
    else if(ab>ac&&ab>aj) cout<<"B ";
    else cout<<"C ";
 
    if(bj>bc&&bj>bb) cout<<"J ";
    else if(bb>bc&&bb>bj) cout<<"B ";
    else cout<<"C ";*/
    cout<<((ac>ab&&ac>=aj)?'C':(ab>=aj?'B':'J'))<<" ";
    cout<<((bc>bb&&bc>=bj)?'C':(bb>=bj?'B':'J'))<<endl;
    return 0;
}
```
## 问题 E: 月饼

**题目描述**

月饼是中国人在中秋佳节时吃的一种传统食品，不同地区有许多不同风味的月饼。现给定所有种类月饼的库存量、总售价、以及市场的最大需求量，请你计算可以获得的最大收益是多少。

注意：销售时允许取出一部分库存。样例给出的情形是这样的：假如我们有3种月饼，其库存量分别为18、15、10万吨，总售价分别为75、72、45亿元。如果市场的最大需求量只有20万吨，那么我们最大收益策略应该是卖出全部15万吨第2种月饼、以及5万吨第3种月饼，获得 72 + 45/2 = 94.5（亿元）。

**输入**

每个输入包含1个测试用例。每个测试用例先给出一个不超过1000的正整数N表示月饼的种类数、以及不超过500（以万吨为单位）的正整数D表示市场最大需求量。随后一行给出N个正实数表示每种月饼的库存量（以万吨为单位）；最后一行给出N个正实数表示每种月饼的总售价（以亿元为单位）。数字间以空格分隔。

**输出**

对每组测试用例，在一行中输出最大收益，以亿元为单位并精确到小数点后2位。

**样例输入** 

```javascript
3 20
18 15 10
75 72 45
```

**样例输出** 

```javascript
94.50
```

### 解题思路

这道题再熟悉不过了，当年PAT正式比赛前的一场全国模拟赛就是出的这一道，没啥说的，裸裸の贪心


### AC代码

```javascript
#include<bits/stdc++.h>
using namespace std;
const int maxn=1e3+5;
struct node{
    double w,v,bt;
}stu[maxn];
int n;
double sum;
bool cmp(node x,node y){
    return x.bt>y.bt;
}
int main(){
    while(~scanf("%d %lf",&n,&sum)){
        for(int i=0;i<n;i++) scanf("%lf",&stu[i].w);
        for(int i=0;i<n;i++){
            scanf("%lf",&stu[i].v);
            stu[i].bt=(double)stu[i].v/stu[i].w;
        }
        sort(stu,stu+n,cmp);
        double ans=0;
        for(int i=0;i<n;i++){
            if(stu[i].w>=sum){
                ans+=(double)stu[i].bt*sum;
                break;
            }else{
                ans+=stu[i].v;
                sum-=stu[i].w;
            }
        }
        printf("%.2f\n",ans);
    }
    return 0;
}
```
## 问题 F: 打印沙漏

**题目描述**

本题要求你写个程序把给定的符号打印成沙漏的形状。例如给定17个“*”，要求按下列格式打印
 

```javascript
  *****
   ***
    *
   ***
  *****
```

 所谓“沙漏形状”，是指每行输出奇数个符号；各行符号中心对齐；相邻两行符号数差2；符号数先从大到小顺序递减到1，再从小到大顺序递
 增；首尾符号数相等。
 
 给定任意N个符号，不一定能正好组成一个沙漏。要求打印出的沙漏能用掉尽可能多的符号。

**输入**

输入在一行给出1个正整数N（N<=1e5）和一个符号，中间以空格分隔。

**输出**

首先打印出由给定符号组成的最大的沙漏形状，最后在一行中输出剩下没用掉的符号数。

**样例输入** 

```javascript
19 *
```

**样例输出** 

```javascript
*****
 ***
  *
 ***
*****
2
```

### 解题思路

打印沙漏问题，PAT原题。

注意一个公式：

```javascript
需要字符总数=2*h*h-1（其中h表示沙漏“一半”的形状）
```
### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,v,sizeof(a))
using namespace std;
typedef long long ll;
const int maxn=1e3+5;
int n,h;
char s[5];
int main(){
    cin>>n>>s;
    h=sqrt((n+1)/2);
    for(int i=h;i>=1;i--){
        for(int j=1;j<=h-i;j++) cout<<" ";
        for(int j=1;j<=2*i-1;j++) cout<<s[0];
        cout<<endl;
    }
    for(int i=2;i<=h;i++){
        for(int j=1;j<=h-i;j++) cout<<" ";
        for(int j=1;j<=2*i-1;j++) cout<<s[0];
        cout<<endl;
     }
     ll ans=n-(2*h*h-1);
     cout<<ans<<endl;
    return 0;
}
```


## 问题 G: 组个最小数

**题目描述**

给定数字0-9各若干个。你可以以任意顺序排列这些数字，但必须全部使用。目标是使得最后得到的数尽可能小（注意0不能做首位）。例如：
给定两个0，两个1，三个5，一个8，我们得到的最小的数就是10015558。
现给定数字，请编写程序输出能够组成的最小的数。

**输入**

每个输入包含1个测试用例。每个测试用例在一行中给出10个非负整数，顺序表示我们拥有数字0、数字1、……数字9的个数。整数间用一个空格分隔。
10个数字的总个数不超过200，且至少拥有1个非0的数字。

**输出**

在一行中输出能够组成的最小的数。

**样例输入**

```javascript
2 2 0 0 0 3 0 0 1 0
```

**样例输出**

```javascript
10015558
```

### 解题思路
按照题意来说，只要0不打头，其它按顺序输出即可


### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,v,sizeof(a))
using namespace std;
const int maxn=1e3+5;
map<int,int> mp;
int main(){
    mp.clear();
    int x;
    for(int i=0;i<=9;i++){
        cin>>x;
        mp[i]=x;
    }
    if(mp[0]){
        for(int i=1;i<=9;i++){
            if(mp[i]){
                cout<<i;
                mp[i]--;
            break;
            }
        }
    }
    for(int i=0;i<=9;i++){
        while(mp[i]){
            cout<<i;
            mp[i]--;
        }
    }
    cout<<endl;
    return 0;
}
```
## 问题 H: 跟奥巴马一起编程

**题目描述**

美国总统奥巴马不仅呼吁所有人都学习编程，甚至以身作则编写代码，成为美国历史上首位编写计算机代码的总统。
2014年底，为庆祝“计算机科学教育周”正式启动，奥巴马编写了很简单的计算机代码：在屏幕上画一个正方形。现在你也跟他一起画吧！

**输入**

多组输入，每组数据一行，每行给出正方形边长N（3<=N<=20）和组成正方形边的某种字符C，间隔一个空格。

**输出**

输出由给定字符C画出的正方形。但是注意到行间距比列间距大，所以为了让结果看上去更像正方形，我们输出的行数实际上是列数的50%（四舍五入取整）。
每组数据后空一行

**样例输入**

```javascript
10 a
```

**样例输出** 

```javascript
aaaaaaaaaa
a        a
a        a
a        a
aaaaaaaaaa
```

### 解题思路

模拟即可

### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
using namespace std;
const int maxn=1e3+5;
int n;
char s[10];
int main(){
    while(cin>>n>>s){
    int m=(n+1)/2;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(i==0||i==m-1||j==0||j==n-1) cout<<s[0];
            else cout<<" ";
        }
        cout<<endl;
    }
    cout<<endl;
    }
    return 0;
}
```



## 结尾
><div>Github上面可以直接查看所有前端知识点梳理，<a href="https://github.com/Chocolate1999/Front-end-learning-to-organize-notes">github传送门</a>，觉得不错，点个Star★，好运连连，Offer终究鼠于你，持续更新中。另外，也可以关注微信公众号：<font color=chocolate>小狮子前端Vue</font>，源码以及资料今后都会放在里面。</div>



