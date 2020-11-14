// 17分，最后一个样例超时
#include<bits/stdc++.h>
using namespace std;
int n,k,m;
set<string> st,st2;
vector<string>:: iterator it;
vector<string> vec;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin>>n;
    string id;
    for(int i=0;i<n;i++){
        cin>>k;
        if(k>1){
            while(k--){
                cin>>id;
                st.insert(id);
            }
        }else{
            cin>>id;
        }
    }
    cin>>m;
    for(int i=0;i<m;i++){
        cin>>id;
        if(find(st.begin(),st.end(),id) == st.end() && find(vec.begin(),vec.end(),id) == vec.end()){
            vec.push_back(id);
        }
    }
    int len = vec.size();
    if(len){
        for(int i=0;i<len;i++){
            if(i!=0)
                cout<<" "<<vec[i];
            else
                cout<<vec[i];
        }
        cout<<endl;
    }else cout<<"No one is handsome"<<endl;
    return 0;
}
