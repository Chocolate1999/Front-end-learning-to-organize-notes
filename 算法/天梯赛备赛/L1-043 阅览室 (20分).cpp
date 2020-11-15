#include<bits/stdc++.h>
using namespace std;
map<int,int> mp;
bool vis[1005];
int main(){
    int n;
    cin>>n;
    while(n--){
        char ch;
        int hh,mm;
        mp.clear();
        memset(vis,false,sizeof(vis));
        double sum=0;
        int id,cnt=0;
        while(~scanf("%d %c %d:%d",&id,&ch,&hh,&mm)){
            if(id==0) break;
            if(ch=='E'&&!vis[id]) continue;
            else if(ch=='E'){
                sum+= hh*60+mm - mp[id];
                ++cnt;
                vis[id]=false;
            }else if(ch=='S'){
                vis[id]=true;
                mp[id] = hh*60+mm;
            }
        }
        if(cnt==0) cout<<0<<" "<<0<<endl;
        else cout<<cnt<<" "<<(int)(sum*1.0/cnt+0.5)<<endl;
    }
    return 0;
}
