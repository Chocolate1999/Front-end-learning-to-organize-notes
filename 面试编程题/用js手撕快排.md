```javascript
var arr = [123,1231,1,5,7,3];
function quickSort(arr){
    if(arr.length<=1) return arr;
    var mid = Math.floor(arr.length/2);
    var tmp = arr.splice(mid,1);
    var left=[];
    var right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<tmp){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(tmp,quickSort(right));
}
console.log(quickSort(arr));
```
