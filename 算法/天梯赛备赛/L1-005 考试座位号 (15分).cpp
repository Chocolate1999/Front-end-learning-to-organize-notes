#include<bits/stdc++.h>
using namespace std;
struct node{
    string id;
    int num;
}stu;
map<int,node> mp;
int main(){
    int n;
    cin>>n;
    int x;
    for(int i=0;i<n;i++){
        cin>>stu.id>>x>>stu.num;
        mp[x] = stu;
    }
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>x;
        cout<<mp[x].id<<" "<<mp[x].num<<endl;
    }
    return 0;
}
