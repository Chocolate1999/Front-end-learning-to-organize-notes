#include<bits/stdc++.h>
using namespace std;
map<int,int> mp;
map<int,int>:: iterator it;
int main(){
    string str;
    while(cin>>str){
        for(int i=0;i<str.length();i++) mp[str[i]-'0']++;
        for(it=mp.begin();it!=mp.end();it++)
            cout<<it->first<<":"<<it->second<<endl;
    }
    return 0;
}
