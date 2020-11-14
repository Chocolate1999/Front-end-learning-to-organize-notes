#include<bits/stdc++.h>
using namespace std;
int n;
char ch;
int main(){
    cin>>n>>ch;
    int sum = 1;
    int col = 1;
    while(sum<=n){
        col++;
        sum+= 2*(2*col-1);
    }
    sum -= 2*(2*col-1);
    col--;
    for(int i=0;i<col;i++){
        for(int j=0;j<i;j++) cout<<" ";
        for(int k=0;k<2*(col-i)-1;k++) cout<<ch;
        cout<<endl;
    }
    for(int i=1;i<col;i++){
        for(int j=0;j<col-1-i;j++) cout<<" ";
        for(int k=0;k<2*(i+1)-1;k++) cout<<ch;
        cout<<endl;
    }
    // cout<<sum<<" "<<col<<endl;
    cout<<n-sum<<endl;
    return 0;
}
