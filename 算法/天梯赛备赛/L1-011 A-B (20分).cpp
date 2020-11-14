#include<bits/stdc++.h>
using namespace std;
string str,s;
map<char,int> mp;
int main(){
    getline(cin,str);
    getline(cin,s);
    for(int i=0;i<s.length();i++) mp[s[i]]++;
    for(int i=0;i<str.length();i++)
        if(!mp[str[i]]) cout<<str[i];
    cout<<endl;
    return 0;
}
