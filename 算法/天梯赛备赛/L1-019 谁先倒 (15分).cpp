#include<bits/stdc++.h>
using namespace std;
int a,b;
int n;
int main(){
    cin>>a>>b;
    cin>>n;
    int res1=0,res2=0;
    while(n--){
        int x1,x2,y1,y2;
        cin>>x1>>x2>>y1>>y2;
        int ans = x1+y1;
        if(x2==ans&&y2!=ans) res1++;
        else if(y2==ans&&x2!=ans) res2++;
        if(res1>a){
            cout<<"A"<<endl;
            cout<<res2<<endl;
            break;
        }else if(res2>b){
            cout<<"B"<<endl;
            cout<<res1<<endl;
            break;
        }
    }
    return 0;
}
