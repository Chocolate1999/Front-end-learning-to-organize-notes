## 题目

>时间限制：C/C++ 2秒，其他语言4秒空间限制：C/C++ 256M，其他语言512M

小易有 n个数字排成一个环，你能否将它们分成连续的两个部分(即在环上必须连续)，使得两部分的和相等？

## 输入描述:


第一行数据组数 T，对于每组数据 
第一行数字 n，表示数字个数 
接下来一行 n 个数，按顺序给出环上的数字。
2 ≤ n ≤ 100000 ， 1 ≤ Ai  ≤ 10的9次方
 
## 输出描述:
对于每组数据，一行输出YES/NO

## 测试样例

```cpp
输入
1 
6
1 2 3 4 5 6
输出
NO
```

```cpp
输入
1
4
4 4 5 3
输出
YES
```

## 解题思路
分析一下题意：给你 n 个数，组成一个环，让你判断是否存在将环分为两个部分，而这两个部分的和相等。

不妨考虑如下情况：

 1. 如果这 n 个数的和为奇数，显然不符合题意。直接判断输出 NO
 2. 由于是一个环状，因此直接暴力累加肯定不行
 3. 使用双指针做法，想象成一个滑动窗口，不断地判断，直到窗口的右指针走到尾为止

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int t,n;
const int maxn=1e5+5;
ll a[maxn];
int main(){
    cin>>t;
    while(t--){
        cin>>n;
        ll sum=0;
        for(int i=0;i<n;i++){
           cin>>a[i];
           sum+=a[i];
        }
        // 如果和为奇数，直接判断NO即可
        if(sum&1){
            cout<<"NO"<<endl;
            continue;
        }
        ll ans = sum/2;
        ll res = 0;
        int flag = 0;
        int i=0,j=0;
        while(i<n && j<n){
            if(res == ans){
                flag=1;
                break;
            }else if(res<ans){
                res+=a[j++];
            }else{
                res-=a[i++];
            }
        }
        if(flag) cout<<"YES"<<endl;
        else cout<<"NO"<<endl;
    }
    return 0;
}
```

## 后续

如果大家还有什么疑惑，可以在评论区留言哈，点赞支持，为小狮子充充电~
