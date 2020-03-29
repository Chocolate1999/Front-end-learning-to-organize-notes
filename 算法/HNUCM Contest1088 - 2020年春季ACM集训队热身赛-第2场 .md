## Contest1088 - 2020年春季ACM集训队热身赛-第2场
**<font color=chocolate>比赛原地址：</font>** <a href="http://acm.hnucm.edu.cn/JudgeOnline/contest.php?cid=1088">传送门</a>
<!-- TOC -->

    - [Contest1088 - 2020年春季ACM集训队热身赛-第2场](#contest1088---2020年春季acm集训队热身赛-第2场)
    - [问题 A: 河畔军训](#问题-a-河畔军训)
- [y#.](#y)
- [h.](#h)
        - [解题思路](#解题思路)
        - [AC代码](#ac代码)
    - [问题 B: 不高兴的津津](#问题-b-不高兴的津津)
        - [解题思路](#解题思路-1)
        - [AC代码](#ac代码-1)
    - [问题 C: 花生采摘](#问题-c-花生采摘)
        - [解题思路](#解题思路-2)
        - [AC代码](#ac代码-2)
    - [问题 D: FBI树](#问题-d-fbi树)
        - [解题思路](#解题思路-3)
        - [AC代码](#ac代码-3)
    - [问题 E: 火星人](#问题-e-火星人)
        - [解题思路](#解题思路-4)
        - [AC代码](#ac代码-4)
    - [问题 F: 小B旅游](#问题-f-小b旅游)
        - [解题思路](#解题思路-5)
        - [AC代码](#ac代码-5)
    - [问题 G: 括号匹配](#问题-g-括号匹配)
        - [解题思路](#解题思路-6)
        - [AC代码](#ac代码-6)
    - [问题 H: 报数游戏](#问题-h-报数游戏)
        - [解题思路](#解题思路-7)
        - [AC代码](#ac代码-7)
    - [问题 I: 小A的烦恼](#问题-i-小a的烦恼)
        - [解题思路](#解题思路-8)
        - [AC代码](#ac代码-8)
    - [问题 J: 一步之遥](#问题-j-一步之遥)
        - [解题思路](#解题思路-9)
        - [AC代码](#ac代码-9)
        - [简化](#简化)

<!-- /TOC -->


## 问题 A: 河畔军训

**题目描述**

河畔镇是一个景色秀丽，气候宜人的度假胜地，每天都会有很多的游客来这里游玩。但奇怪的是这里总会出现一些潜伏者。果不其然，通过保卫者的跟踪，发现在河畔镇的地下隐藏着Blitz的秘密武器实验室。最危险的地方也是最安全的地方，这里人多，所以只能采用狙击作战，一场“无声无息“的战斗即刻打响。 
每到周末小z，小y便开始在河畔军训小h(当然有时也会被反军训)。
不过他们军训采用刀战(即相遇时才可军训)
每当小z，小y，小h三人在河畔整相遇时，小z和小y便可军训小h
由于小h有兔耳朵buff加成，小h每秒最多可以移动3步，且可以选择上/下/左/右/左上/左下/右上/右下8个方向移动
小z，小y每秒均只能移动1步，只能上/下/左/右4个方向移动。
当然，三人均可选择保持原地不动。
三人移动始终在地图范围内。
下面，给你河畔的地图以及小z，小y，小h的初始坐标。
请你求出最快军训小h的时间(即3人相遇的最短时间)，如果无法军训小h则输出“lack of junxun”

**输入**

多组数据
每组数据第一行两个整数N,M(1<=N,M<=1000)代表河畔地图的行和列
接下来是N*M大小的地图
其中“z”，“y”，“h”分别代表小z，小y，小h的初始坐标
“#”代表障碍物，“.”表示可以正常通过的位置

**输出**

对于每组数据
如果能军训小h，则输出最快军训小h所需的时间
否则，输出“lack of junxun”

**样例输入** 

2 4
z..h
#y#.
2 3
z#y
#h.

**样例输出** 
1
lack of junxun


###  解题思路
BFS

### AC代码

```javascript
待补充
```


## 问题 B: 不高兴的津津
**题目描述**

津津上初中了。妈妈认为津津应该更加用功学习，所以津津除了上学之外，还要参加妈妈为她报名的各科复习班。另外每周妈妈还会送她去学习朗诵、舞蹈和钢琴。但是津津如果一天上课超过八个小时就会不高兴，而且上得越久就会越不高兴。假设津津不会因为其它事不高兴，并且她的不高兴不会持续到第二天。请你帮忙检查一下津津下周的日程安排，看看下周她会不会不高兴；如果会的话，哪天最不高兴。

**输入**

输入包括七行数据，分别表示周一到周日的日程安排。每行包括两个小于10的非负整数，分别表示津津在学校上课的时间和妈妈安排她上课的时间。

**输出**

输出包括一行，这一行只包含一个数字。如果不会不高兴那么输出0，如果会那么输出最不高兴的是周几〔用1,2,3,4,5,6,7分别表示周一，周二，周三，周四，周五，周六，周日〕。如果有两天或两天以上不高兴的程度相当，那么输出时间最靠前的一天。

**样例输入**
53
62
72
53
54
04
06

**样例输出** 

3

### 解题思路
输出最不高兴的天数，注意输入的特殊性，中间没有空格，因此需要进行字符串处理，判断最大值时取大于号>即可

### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
using namespace std;
const int maxn=1e5+5;
int n,m;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    int idx=0,tmp=0;
    for(int i=1;i<=7;i++){
        char s[5];
        cin>>s;
        n=s[0]-'0';
        m=s[1]-'0';
        int sum=n+m;
        if(sum>8&&sum>tmp){
            idx=i;
            tmp=sum;
        }
    }
    cout<<idx<<endl;
    return 0;
}
```

## 问题 C: 花生采摘

**题目描述**

鲁宾逊先生有一只宠物猴，名叫多多。这天，他们两个正沿着乡间小路散步，突然发现路边的告示牌上贴着一张小小的纸条：“欢迎免费品尝我种的花生！——熊字”。 
鲁宾逊先生和多多都很开心，因为花生正是他们的最爱。在告示牌背后，路边真的有一块花生田，花生植株整齐地排列成矩形网格〔如图1〕。有经验的多多一眼就能看出，每棵花生植株下的花生有多少。为了训练多多的算术，鲁宾逊先生说：“你先找出花生最多的植株，去采摘它的花生；然后再找出剩下的植株里花生最多的，去采摘它的花生；依此类推，不过你一定要在我限定的时间内回到路边。” 
我们假定多多在每个单位时间内，可以做以下四件事情中的一件： 
1)从路边跳到最靠近路边〔即第一行〕的某棵花生植株； 
2)从一棵植株跳到前后左右与之相邻的另一棵植株； 
3)采摘一棵植株下的花生； 
4)从最靠近路边〔即第一行〕的某棵花生植株跳回路边。 
现在给定一块花生田的大小和花生的分布，请问在限定时间内，多多最多可以采到多少个花生？注意可能只有部分植株下面长有花生，假设这些植株下的花生个数各不相同。 
例如在样例所示的花生田里，只有位于(2,5),(3,7),(4,2),(5,4)的植株下长有花生，个数分别为13,7,15,9。多多在21个单位时间内，最多可以采到37个花生。 

![](https://img-blog.csdnimg.cn/20200329213020656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

**输入**

输入的第一行包括三个整数，M,N和K，用空格隔开；表示花生田的大小为M*N〔1<=M,N<=20〕，多多采花生的限定时间为K〔0<=K<=1000〕个单位时间。接下来的M行，每行包括N个非负整数，也用空格隔开；第i+1行的第j个整数Pij〔0<=Pij<=500〕表示花生田里植株(i,j)下花生的数目，0表示该植株下没有花生。
输出
输出包括一行，这一行只包含一个整数，即在限定时间内，多多最多可以采到花生的个数。

**样例输入** 

6 7 21
0 0 0 0 0 0 0
0 0 0 0 13 0 0
0 0 0 0 0 0 7
0 15 0 0 0 0 0
0 0 0 9 0 0 0
0 0 0 0 0 0 0

**样例输出** 

37


### 解题思路

贪心，在有限时间内获得最多的花生，注意点：

- 起初和结束会花费1单位时间
- 猴子位移也会花费距离时间
- 采花生会花费1单位时间
- 当前花生能不能拿的条件是，判断一下能不能回到路边，不能回到路边当前就不能采了


不过数据不是很强，勉强过了。严格一点的话可能会有数据会卡住。

### AC代码

```javascript
#include<bits/stdc++.h>
#define mst(a,b) memset(a,b,sizeof(a))
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e5+5;
int n,m,k,x;
vector<int> G[maxn];
set<int> st;
bool vis[maxn];
struct node{
    int x,y,cc;
}stu[maxn];
bool cmp(node x,node y){
    return x.cc>y.cc;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n>>m>>k;
    int cnt=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>x;
            if(x) stu[cnt].x=i,stu[cnt].y=j,stu[cnt++].cc=x;
        }
    }
    sort(stu,stu+cnt,cmp);
    int res=0,ans=0,tmp=0;
    ans+=stu[0].x;
    k--;
    if(ans<k){
        ans+=2;   //起初到路边+采当前花生花费的时间
        res+=stu[0].cc;
    }
    for(int i=1;i<cnt;i++){
        ans+=(abs(stu[i].x-stu[i-1].x)+abs(stu[i].y-stu[i-1].y));
        if(ans+stu[i].x<k){
            ans+=1;
            res+=stu[i].cc;
        }
    }
    cout<<res<<endl;
    return 0;
}
```
## 问题 D: FBI树

**题目描述**

我们可以把由“0”和“1”组成的字符串分为三类：全“0”串称为B串，全“1”串称为I串，既含“0”又含“1”的串那么称为F串。
FBI树是一种二叉树[1]，它的结点类型也包括F结点，B结点和I结点三种。由一个长度为2N的“01”串S可以构造出一棵FBI树T，递归的构造方法如下：
1)T的根结点为R，其类型与串S的类型相同；
2)假设串S的长度大于1，将串S从中间分开，分为等长的左右子串S1和S2；由左子串S1构造R的左子树T1，由右子串S2构造R的右子树T2。
现在给定一个长度为2N的“01”串，请用上述构造方法构造出一棵FBI树，并输出它的后序遍历序列[2]。

**输入**

第一行是一个整数N〔1<=N<=128〕，数据保证n为2的幂次方。
第二行是一个长度为2N的“01”串。

**输出**

输出包括一行，这一行只包含一个字符串，即FBI树的后序遍历序列。

**样例输入** 

4
10001011

**样例输出** 

IBFBBBFIBFIIIFF

**提示**

[1]二叉树：二叉树是结点的有限集合，这个集合或为空集，或由一个根结点和两棵不相交的二叉树组成。这两棵不相交的二叉树分别称为这个根结点的左子树和右子树。  
[2]后序遍历：后序遍历是深度优先遍历二叉树的一种方法，它的递归定义是：先后序遍历左子树，再后序遍历右子树，最后访问根。 


### 解题思路
![](https://img-blog.csdnimg.cn/20200329213540368.png)
非常经典的一道二叉树题。根据题意建树，会发现这就是先序遍历。而题目的输出是后序遍历，那么我们就可以考虑，递归先序遍历建树，回溯的过程输出，因为先序遍历回溯就是后序遍历。

### AC代码

```javascript
#include<bits/stdc++.h>
#define mst(a,b) memset(a,b,sizeof(a))
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e5+5;
int n,m,cc;
char str[maxn];
int ans=0;
void output(int le,int re){
    int k0=0,k1=0;
    for(int i=le;i<=re;i++){
        if(str[i]=='0') k0++;
        else k1++;
    }
    if(k0&&k1) cout<<'F';
    else if(!k0&&k1) cout<<'I';
    else cout<<'B';
}
void fun(int l,int r){
    if(l!=r){
        fun(l,(l+r)/2);
        fun((l+r)/2+1,r);
    }
    output(l,r);
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n;
    cin>>str;
    int len=strlen(str)-1;
    fun(0,len);
    cout<<endl;
    return 0;
}
```

## 问题 E: 火星人

**题目描述**

人类终于登上了火星的土地并且见到了神秘的火星人。人类和火星人都无法理解对方的语言，但是我们的科学家发明了一种用数字交流的方法。这种交流方法是这样的，首先，火星人把一个非常大的数字告诉人类科学家，科学家破解这个数字的含义后，再把一个很小的数字加到这个大数上面，把结果告诉火星人，作为人类的回答。 
火星人用一种非常简单的方式来表示数字——掰手指。火星人只有一只手，但这只手上有成千上万的手指，这些手指排成一列，分别编号为1，2，3……。火星人的任意两根手指都能随意交换位置，他们就是通过这方法计数的。 
一个火星人用一个人类的手演示了如何用手指计数。如果把五根手指——拇指、食指、中指、无名指和小指分别编号为1，2，3，4和5，当它们按正常顺序排列时，形成了5位数12345，当你交换无名指和小指的位置时，会形成5位数12354，当你把五个手指的顺序完全颠倒时，会形成54321，在所有能够形成的120个5位数中，12345最小，它表示1；12354第二小，它表示2；54321最大，它表示120。下表展示了只有3根手指时能够形成的6个3位数和它们代表的数字： 
三进制数 
123 
132 
213 
231 
312 
321 
代表的数字 
1 
2 
3 
4 
5 
6 
现在你有幸成为了第一个和火星人交流的地球人。一个火星人会让你看他的手指，科学家会告诉你要加上去的很小的数。你的任务是，把火星人用手指表示的数与科学家告诉你的数相加，并根据相加的结果改变火星人手指的排列顺序。输入数据保证这个结果不会超出火星人手指能表示的范围。 
输入
输入包括三行，第一行有一个正整数N，表示火星人手指的数目〔1<=N<=10000〕。第二行是一个正整数M，表示要加上去的小整数〔1<=M<=100〕。下一行是1到N这N个整数的一个排列，用空格隔开，表示火星人手指的排列顺序。
输出
输出只有一行，这一行含有N个整数，表示改变后的火星人手指的排列顺序。每两个相邻的数中间用一个空格分开，不能有多余的空格。

**样例输入** 

5
3
1 2 3 4 5

**样例输出** 

1 2 4 5 3

### 解题思路
文章挺长，但是讲来讲去，就是全排列问题，直接调用`next_permutation`即可

### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e5+5;
int n,m;
stack<p> sk;
char str[maxn];
int a[maxn];
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n>>m;
    for(int i=0;i<n;i++) cin>>a[i];
    while(m--) next_permutation(a,a+n);
    for(int i=0;i<n-1;i++) cout<<a[i]<<" ";
    cout<<a[n-1]<<endl;
    return 0;
}
```

## 问题 F: 小B旅游

**题目描述**

小B在一个有N个城市M条道路的国家，每条道路连接的城市可以互相到达且每条道路小B都要花1步去走过它。现在他在1号城市，问他走P步最多能走多少个不同的城市？ 

**输入**

输入格式：第1行，三个正整数N、M、P，意义如题：接下来M行，每行两个整数U、V，表示存在一条连接U、V的无向边。
输出
输出格式：1行，一个整数，表示从1号城市出发走P步的所有情况，共能经过多少个不同的城市。 

**样例输入** 
4 4 2
1 2
1 3
2 3
3 4

**样例输出** 
4

**提示**
数据规模：
 1<=N<=100000，1<=M<=5000000，1<=P<=10000

### 解题思路

搜索题，直接搜就是，但是开始做的时候是从1开始搜，总是

![](https://img-blog.csdnimg.cn/20200329214154462.png)

不造被卡在哪了，后面换了一种方式，直接先加一步，从孩子结点开始搜，然后过了

### AC代码
```javascript
#include<bits/stdc++.h>
#define mst(a,b) memset(a,b,sizeof(a))
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e5+5;
int n,m,cc;
vector<int> G[maxn];
int vis[maxn];
int ans=0;
void dfs(int u,int cnt){
    if(cnt>cc) return;
    if(!vis[u]){
        ++ans;
        vis[u]=1;
    }
    for(auto v:G[u])
        if(!vis[v]) dfs(v,cnt+1);
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n>>m>>cc;
    int u,v;
    for(int i=0;i<m;i++){
        cin>>u>>v;
        G[u].push_back(v);
        G[v].push_back(u);
    }
    for(auto u:G[1])
        dfs(u,1);
    cout<<ans<<endl;
    return 0;
}
```

## 问题 G: 括号匹配

**题目描述**

括号主要有：大括号“{ }”、中括号“[ ]”、小括号“( )”。给定一个只包含左右括号的合法括号序列(序列长度2<=n<=10000)，按右括号从左到右的顺序输出每一对配对的括号出现的位置（括号序列以0开始编号） 

**输入**
输入格式：仅1行，表一个合法的括号序列 

**输出**
输出格式：设括号序列有n个右括号，每行两个整数l、r，表示配对的括号左括号出现在第l位，右括号出现在第r位。 

**样例输入**

{()[()()]}()

**样例输出** 
1 2
4 5
6 7
3 8
0 9
10 11

### 解题思路
括号匹配问题，经常性扯到使用栈的问题，根据题意，需要搞一个对子`pair`存一下下标，每次取出栈顶元素和当前准备放入的元素进行比较，如果括号匹配成功即弹出栈，输出下标即可
### AC代码

```javascript
#include<bits/stdc++.h>
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e5+5;
int n,m;
stack<p> sk;
char str[maxn];
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>str;
    for(int i=0;i<strlen(str);i++){
        if(sk.empty()){
            p p1=make_pair(str[i],i);
            sk.push(p1);
        }else if(str[i]=='}'){
            p now=sk.top();
            if(now.first=='{'){
                cout<<now.second<<" "<<i<<endl;
                sk.pop();
            }
        }else if(str[i]==']'){
            p now=sk.top();
            if(now.first=='['){
                cout<<now.second<<" "<<i<<endl;
                sk.pop();
            }
        }else if(str[i]==')'){
            p now=sk.top();
            if(now.first=='('){
                cout<<now.second<<" "<<i<<endl;
                sk.pop();
            }
        }else{
            p p2=make_pair(str[i],i);
            sk.push(p2);
        }
    }
    return 0;
}
```

## 问题 H: 报数游戏

**题目描述**

有n个小朋友，按顺时针方向围成一圈（编号从1—n），从第1号开始报数，一直数到m，数到m的小朋友退出圈外，剩下的小朋友再接着从1开始报数。

**输入**
T组数据，第一行为T(1<=T<=10)
接下来T行，每行用空格分开两个整数n、m（1<=m，n<=10000）

**输出**
输出T行
每行一个答案表示第1号小朋友退出前，报数为m的次数

**样例输入**
1
6 2

**样例输出**
4

### 解题思路
报数游戏，与约瑟夫环问题有关，可以用递归求解，但是不太会做了，于是用了如下模拟，数据不强没卡住...


### AC代码

```javascript
#include<bits/stdc++.h>
#define mst(a,b) memset(a,b,sizeof(a))
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e5+5;
int n,m,cc,t;
char str[maxn];
int ans=0;
int a[maxn];
vector<int> v;
vector<int>::iterator it;
int vis[maxn];
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>t;
    while(t--){
        cin>>n>>m;
        mst(vis,0);
        int cnt=0,ans=-1;
        v.clear();
        for(int i=1;i<=n;i++) v.push_back(i);
        while(1){
            int len=v.size();
            for(int i=0;i<len;i++){
                if(!vis[v[i]])
                    ++cnt;
                if(!vis[v[i]]&&cnt==m){
                    vis[v[i]]=1;
                    ++ans,cnt=0;
                }
                if(vis[1]) break;
            }
            if(vis[1]) break;
        }
        cout<<ans<<endl;
    }
    return 0;
}
```
## 问题 I: 小A的烦恼
**题目描述**

小A生活在一个神奇的国家，这个国家有N（N<=100000）个城市，还有M（M<=5000000）条道路连接两城市。道路连接的两个城市可以直接免费到达。小A比较烦恼，因为他想知道每个城市能直接到达哪些城市，你能帮帮他吗？保证每个城市都有道路与其连接。（注：按照输入的道路顺序输出每个城市直接连接的城市,若有城市出现多次，则按最小出现次序输出） 

**输入**
第1行包含两个整数N和M；接下来M行，每行两个整数描述一条道路连接的两个城市的编号。

**输出**
输出N行，每行若干个用一个空格隔开的整数；第I行输出的是与城市I直接相连城市编号，保证城市的出现按照道路输入的先后顺序出现。 

**样例输入** 
4 5
2 3
3 1
1 4
2 4
1 2

**样例输出** 
3 4 2 
3 4 1
2 1 
1 2

### 解题思路
由题意，直接建图输出每个城市的子结点即可，不过总感觉没这么简单吧，这个题还是卡了挺多人的...   可能还是数据不强吧...

### AC代码

```javascript
#include<bits/stdc++.h>
#define mst(a,b) memset(a,b,sizeof(a))
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e6+5;
int n,m;
vector<int> G[maxn];
set<int> st;
bool vis[maxn];
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n>>m;
    for(int i=1;i<=m;i++){
        int u,v;
        cin>>u>>v;
        G[u].push_back(v);
        G[v].push_back(u);
    }
    for(int i=1;i<=n;i++){
        for(auto v:G[i]){
            cout<<v<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```
## 问题 J: 一步之遥

**题目描述**

小B在一个有N个城市M条道路的国家，每条道路连接的城市可以互相到达且每条道路都要花1步去走过它。现在他在P号城市，问有多少城市走1步能到达该城市？ 

**输入**

多组输入
第1行，三个正整数N、M、P，意义如题。
接下来M行，每行两个整数U、V，表示存在一条连接U、V的无向边。（0<=N<=1000000,0<=M<=500000）

**输出**
1行，走1步能到P城市的城市数量。

**样例输入** 
4 4 1
1 2
1 3
2 3
3 4

**样例输出** 
2

### 解题思路
问从p号城市，通过一步就能到达的城市数量。开始想着直接建图，然后输出p城市的子结点即可，然后用set直接去重一下，应该能过，不过一直卡在了33%

![](https://img-blog.csdnimg.cn/2020032921544874.png)

后面也尝试了用vis数组判断一下，也wa了。

最后，考虑只用看p城市相连边的城市数目即可。直接用set不就好了嘛，下面代码不是最简代码，最简放后面

### AC代码

```javascript
#include<bits/stdc++.h>
#define mst(a,b) memset(a,b,sizeof(a))
#define endl '\n'
#define p pair<char,int>
using namespace std;
const int maxn=1e6+5;
int n,m;
vector<int> G[maxn];
set<int> st;
bool vis[maxn];
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    int dd;
    while(cin>>n>>m>>dd){
        st.clear();
        int cnt=0;
        for(int i=1;i<=m;i++){
            int u,v;
            cin>>u>>v;
            if(u==dd){
                vis[v]=1;
                ++cnt;
                st.insert(v);
            }else if(v==dd){
                vis[u]=1;
                ++cnt;
                st.insert(u);
            }
        }
        /*for(auto x:G[dd])
            st.insert(x);
        cout<<st.size()<<endl;*/
        //cnt=st.size();
        cout<<st.size()<<endl;
    }
    return 0;
}
```

### 简化

```javascript
#include<bits/stdc++.h>
#define endl '\n'
using namespace std;
int n,m;
set<int> st;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    int dd;
    while(cin>>n>>m>>dd){
        st.clear();
        int cnt=0;
        for(int i=1;i<=m;i++){
            int u,v;
            cin>>u>>v;
            if(u==dd)
                st.insert(v);
            else if(v==dd)
                st.insert(u);
        }
        cout<<st.size()<<endl;
    }
    return 0;
}
```


```javascript
学如逆水行舟，不进则退
```
