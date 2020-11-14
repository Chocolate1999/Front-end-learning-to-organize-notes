#include<bits/stdc++.h>
using namespace std;
int n;
int main(){
    cin>>n;
    int a,b;
    char c;
    int up=0,down=1;
    for(int i=0;i<n;i++){
        cin>>a>>c>>b;
        up = up*b + down*a;
        down*=b;
        int k = abs(__gcd(up,down));
        up/=k;
        down/=k;
    }
    if(up%down==0) cout<<up/down<<endl;
    else{
        if(up/down) cout<<up/down<<" ";
        cout<<up-up/down*down<<"/"<<down<<endl;
    }
    return 0;
}
