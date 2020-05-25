
## 背景
期末考试免考，冲！
## 实验名称
对任意给定的NFA M进行确定化操作

## 实验时间
2020年5月21日 到 2020年5月24日

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
- 深刻理解 NFA 确定化操作
- 掌握子集构造算法过程
- 加强团队合作能力
- 提高自身的编程能力和解决问题的能力

### 要求






## NFA 转换为等价的 DFA
### 正则 到 NFA的转换
#### 有穷自动机
作用：将输入的序列转换成一个状态图，方便之后的处理。通常被用在词法分析器中。
1）有穷自动机是一个识别器，对每个可能的的输入串简单的回答“是”或“否”。
2）有穷自动机分为两类：
a)不确定的有穷自动机（NFA）对其边上的标号没有任何限制。一个符号标记离开同一状态的多条变，并且空串ε也可以作为标号。
b)确定的有穷自动机（DFA）有且只有一条离开该状态，以该符号位标号的边。

#### 不确定的有穷自动机
![](https://img-blog.csdnimg.cn/20200525230852239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
#### 正则式（RE）转不确定型有穷自动机（NFA）
![](https://img-blog.csdnimg.cn/20200525230944398.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
找出所有可以被匹配的字符即符号集合∑作为每一列的字段名，然后从起始态开始
1）状态0可以匹配a，匹配后可以到状态0或状态1，记为∅。匹配b只能得到状态0，记为{0}。
2）状态1可以匹配a，没有匹配到，记为∅。匹配b得到状态2，记为{2}。
3）状态0可以匹配a，没有匹配到，记为∅。匹配b得到状态3，记为{3}。
4）状态0可以匹配a，没有匹配到，记为∅。匹配b没有匹配到，记为∅。

至此，状态表建立完成。正则式（RE）转不确定型有穷自动机（NFA）完成。

### NFA 到 DFA
1）根据NFA构造DFA状态转换矩阵：

- ①确定DFA的字母表，初态（NFA的所有初态集）
- ②从初态出发，经字母表到达的状态集看成一个新状态
- ③将新状态添加到DFA状态集
- ④重复②③步骤，直到没有新的DFA状态

2）画出DFA

3）看NFA和DFA识别的符号串是否一致

<a href="https://blog.csdn.net/qq_40294512/article/details/89004777">更多详细内容可参考：NFA到DFA的转换及DFA的简化</a>
## 实验过程



## 实验结果（附源代码）

```cpp
#include<bits/stdc++.h>
#define endl '\n'
using namespace std;
const int maxn=999999;
int ans[maxn],one[maxn],zero[maxn],lft[maxn],rgt[maxn];
char change[maxn];
bool vis[maxn],ac[maxn];
int cnt,n,q,f;
//找到对应的状态下标
int index(int p){
    int x = 1;
    if(p == 1)  //p为1表示当前为初始状态
        return 0;
    int i = 0;
    while(++i){  //循环找出当前对应的状态下标
        x <<= 1;
        if(p == x)
            return i; //找到即返回对应下标
    }
    return 0;
}
int moveT(int a, int b){
    while(b){
        int x = b&(-b);  //去当前集合中的最后一个节点
        if(!(a&x))   //如果不存在该节点，加入集合当中
            a ^= x;
        b ^= x;  //已经存在该节点，就进行舍去操作
    }
    return a;
}
void dfs(int p){
    ans[cnt] = p;
    int lsum = 0, rsum = 0;
    while(p){
        int x = p&(-p);  //取出当前集合中的最后一个节点
        int y = index(x); //找到对应的状态下标
        lsum = moveT(lsum, zero[y]); //进行move操作
        rsum = moveT(rsum, one[y]);  //进行move操作
        p ^= x;   //将当前拿出来的节点从原集合中去掉
    }
    lft[cnt] = lsum;  //更新当前的状态集合
    rgt[cnt] = rsum;  //更新当前的状态集合
    cnt++;            //更新状态行数
    if(!vis[lsum])
        vis[lsum] = 1, dfs(lsum);  //进行去重操作
    if(!vis[rsum])
        vis[rsum] = 1, dfs(rsum); //进行去重操作
}
int main(){
    int t;
    cout<<"多组输入，请先输入对应的组数:"<<endl;
    cin>>t;  //多组输入
    while(t--){
        cout << "输入各边的信息,并且以 '前点(char '0'-'1000')   转换字符(a 或 b)   后点(int '0'-'1000')'格式，结束以'$'开头" << endl;
        char preNode,tchar,nexNode;
        while(cin>>preNode){
            if(preNode=='$') break;
            cin>>tchar>>nexNode;
            if(tchar-'a'==0) zero[preNode-'0']|=(1<<(nexNode-'0'));
            else one[preNode-'0']|=(1<<(nexNode-'0'));
        }
        q=1;
        cout<<"输入终止状态集合，结束以'$'开头"<<endl;
        char endNode;
        while(cin>>endNode){
            if(endNode=='$') break;
            f|=(1<<(endNode-'0'));
        }
        cnt=0;
        memset(vis,0,sizeof(vis)); //初始化
        memset(ac,0,sizeof(ac)); //初始化
        vis[q]=1;
        dfs(q);    //转换开始
        int sum=0;
        for(int i=0;i<cnt;i++)
            if(ans[i]&f)   //判断所求集合中是否包含终态
                ac[i]=1,sum++;  //标记终态集合并统计个数
        for(int i=0;i<cnt;i++)
            change[ans[i]]=i+'A';  //输出处理，用字母'A'-'Z'来表示集合
        cout<<"转换结果:"<<endl;
        cout<<"DFA的状态数:"<<cnt<<" "<<"终止状态数:"<<sum<<endl<<endl;
        cout<<"终态:"<<endl;   //输出终态集合
        for(int i=0,j=0;i<cnt;i++){
            if(ac[i]){
                if(j)
                    cout<<" ";
                cout<<(char)(i+'A');
                j++;
            }
        }
        cout<<endl<<endl; //输出DFA状态转换矩阵
        cout<<"由NFA得到的DFA状态转换矩阵:"<<endl;
        cout<<"----------------------------"<<endl;
        cout<<"  "<<"a"<<" "<<"b"<<endl;
        cout<<"----------------------------"<<endl;
        for(int i=0;i<cnt;i++)  //输出打印新的转换结果
            cout<<(char)('A'+i)<<" "<<change[lft[i]]<<" "<<change[rgt[i]]<<endl;
        cout<<"----------------------------"<<endl;
        cout<<endl;
    }
    return 0;
}
```
### 输出结果
![](https://img-blog.csdnimg.cn/2020052522413886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 输出结果文字版

```cpp
多组输入，请先输入对应的组数:
100
输入各边的信息,并且以 '前点(char '0'-'1000')   转换字符(a 或 b)   后点(int '0'-'1000')'格式，结束以'$'开头
0 b 2
4 a 0
0 a 1
1 a 1
2 b 3
3 b 2
3 a 3
5 a 5
4 b 5
5 b 4
1 b 4
2 a 1
$
输入终止状态集合，结束以'$'开头
0
$
转换结果:
DFA的状态数:6 终止状态数:1

终态:
A

由NFA得到的DFA状态转换矩阵:
----------------------------
  a b
----------------------------
A B E
B B C
C A D
D D C
E B F
F F E
----------------------------
```

## 参考文献
感谢以下博主的文章，本文参考了部分代码和知识。

<a href="https://blog.csdn.net/Hungryof/article/details/46822841?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-7.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-7.nonecase">Hungryof：NFA到DFA的转换</a>

<a href="https://blog.csdn.net/u010563350/article/details/106114625">zhen12321：编译原理-(NFA->DFA)</a>

<a href="https://blog.csdn.net/qq_43543789/article/details/105035332">
发芽ing的小啊呜：【20200319】编译原理课程课业打卡九之NFA的确定化</a>

<a href="https://www.cnblogs.com/pengfeiz/p/5974578.html">Just-Live：湖大OJ-实验C----NFA转换为DFA
</a>

<a href="https://blog.csdn.net/qq_40294512/article/details/89003655">爱玩游戏的小隐：正则到NFA的转换</a>

<a href="https://blog.csdn.net/qq_40294512/article/details/89004777">爱玩游戏的小隐：NFA到DFA的转换及DFA的简化</a>

```cpp
学如逆水行舟，不进则退
```
