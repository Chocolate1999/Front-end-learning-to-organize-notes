#include<bits/stdc++.h>
using namespace std;
string str;
int main(){
    cin>>str;
    double res = 1.0;
    int len = str.length();
    int lenk = len;
    if(str[0] == '-'){
        lenk--;
        res*=1.5;
    }
    int twos = 0;
    for(int i=0;i<len;i++)
        if(str[i]=='2') twos++;
    if((str[len-1]-'0')%2==0)
        res*=2;
    res*=(twos*1.0/lenk)*100;
    printf("%.2lf%%\n",res);
    return 0;
}
