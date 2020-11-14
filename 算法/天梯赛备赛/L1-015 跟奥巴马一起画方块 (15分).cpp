#include<bits/stdc++.h>
using namespace std;
int n;
char ch;
int main(){
    cin>>n>>ch;
    int m = (n+1)/2;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++)
            cout<<ch;
        cout<<endl;
    }
    return 0;
}
