/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n<=0) return 0;
    let arr = [1];
    let i2=i3=i5=0;
    while(arr.length < n){
        arr.push(Math.min(arr[i2]*2, arr[i3]*3, arr[i5]*5));
        let cur = arr[arr.length-1];
        while(arr[i2]*2 <= cur) i2++;
        while(arr[i3]*3 <= cur) i3++;
        while(arr[i5]*5 <= cur) i5++;
    }
    return arr[n-1];
};
console.log(nthUglyNumber(10));