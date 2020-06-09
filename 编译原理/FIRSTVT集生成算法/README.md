## 背景
期末考试免考，冲！

## 实验名称
FIRSTVT集生成算法

## 实验时间
2020年6月3日 到 2020年6月90

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
- 深刻理解FIRSTVT集生成算法
- 掌握FIRSTVT集生成的过程
- 加强团队合作能力
- 提高自身的编程能力和解决问题的能力

### 要求
- 编程实现FIRSTVT集生成算法
- 算法简洁，不冗余

## 解决问题
Firstvt集的求法，有三条规则：
（1）A->a.......，即以终结符开头，该终结符入Firstvt
（2）A->B.......，即以非终结符开头，该非终结符的Firstvt入A的Firstvt
（3）A->Ba.....，即先以非终结符开头，紧跟终结符，则终结符入Firstvt

## 实验结果
### 源代码

```cpp
#include<bits/stdc++.h>
#define endl '\n'
#define mst(a,b) memset(a,b,sizeof(a))
using namespace std;
const int maxn=1e3+5;
class node{
public:
    string left;
    vector<string> right;
    node(const string& str){  //类似构造函数
        left=str;
        right.clear();
    }
    void push(char str[]){  //放入产生式右部
        right.push_back(str);
    }
    void print(){  //打印产生式
        printf("%s->%s",left.c_str(),right[0].c_str());
        for(int i=1;i<right.size();i++)
            printf("|%s",right[i].c_str());
        puts("");
    }
};
int n;
char buf[maxn];
int used[maxn],vis[maxn];
vector<node> vnode;
map<string,int> mp;
vector<char> vt;
set<char> firstVt[maxn];
//dfs搜索
void dfs(int x){
    if(vis[x]) return;
    vis[x]=1;
    string& left=vnode[x].left;  //取出当前产生式左部
    for(int i=0;i<vnode[x].right.size();i++){
        string& str=vnode[x].right[i];   //取出当前产生式右部
        if(isupper(str[0])){  //如果产生式右部第一个为非终结符
            int y=mp[str.substr(0,1)]-1;   //拿到对应下标
            if(str.length()>1 && !isupper(str[1]))  //判断第二个是否为终结符，是的话加入
                firstVt[x].insert(str[1]);
            dfs(y);   //搜索当前非终结符
            set<char>::iterator it = firstVt[y].begin();
            for(;it!=firstVt[y].end();it++)   //加入非终结符y的firstVt集合
                firstVt[x].insert(*it);
        }else{
            firstVt[x].insert(str[0]);  //如果是终结符，直接加入
        }
    }
}
void makeFirstVt(){
    memset(vis,0,sizeof(vis));
    for(int i=0;i<vnode.size();i++){
        if(vis[i]) continue;
        else dfs(i);
    }
    puts("------------FIRSTVT集-------------------");
    for(int i=0;i<vnode.size();i++){
        printf("%s : ",vnode[i].left.c_str() );
        set<char>::iterator it = firstVt[i].begin();
        for(;it!=firstVt[i].end();it++)
            printf("%c ",*it);
        puts("");
    }
}
//初始化工作，清空数组
void init(){
    memset(used,0,sizeof(used)); //初始化used数组，用于记录VT集
    vt.clear();   //清空VT集合
    vnode.clear();  //清空产生式node集
    mp.clear();    //清空维护产生式下标集
    for(int i=0;i<=maxn;i++)   //清空输出结果firstVt集
        firstVt[i].clear();
}
int main(){
    while(cin>>n){
        init();  //初始化工作
        for(int i=0;i<n;i++){
            scanf("%s",buf);   //输入产生式
            int len=strlen(buf),j;
            for(j=0;j<len;j++)
                if(buf[j]=='-'){
                    buf[j]=0;
                    break;
                }
            string tmp=buf; //取产生式左部非终结符
            if(!mp[tmp]){
                vnode.push_back(node(tmp));  //去重操作
                mp[tmp]=vnode.size();  //维护下标
            }
            int idx=mp[tmp]-1;
            vnode[idx].push(buf+j+2);  //vnode加入产生式右部
            for(int k=0;k<j;k++){   //检查产生式左部是否包含终结符
                if(!isupper(buf[k])){
                    if(used[buf[k]]) continue;
                    used[buf[k]]=1;
                    vt.push_back(buf[k]);
                }
            }
            for(int k=j+2;k<len;k++){  //将产生式右部加入vt集合
                if(!isupper(buf[k])){
                    if(used[buf[k]]) continue;
                    vt.push_back(buf[k]);
                    used[buf[k]]=vt.size();
                }
            }
        }
        puts("************VT集*******************");
        for(int i=0;i<vt.size();i++ )
            printf("%c ",vt[i]);
        puts("");
        cout<<endl;
        puts("*************产生式*****************");
        for(int i=0;i<vnode.size();i++)
            vnode[i].print();
        puts("************************************");
        cout<<endl;
        makeFirstVt();  //求FirstVt集
    }
    return 0;
}
```


### 输出结果
![](https://img-blog.csdnimg.cn/20200609093433813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### 测试样例

```javascript
8
E->E+T
E->T
T->T*F
T->F
F->P^F
F->P
P->(E)
P->i
```

## 参考文献

<a href="https://blog.csdn.net/qq_24451605/article/details/50096487">参考：编译原理(七) 算符优先分析法(构造算符优先关系表算法及C++实现)</a>
