var arr = [0,1];
arr[5] = 5;
//console.log(arr)
newArr = arr.filter(function(x) { return x === undefined;});
console.log(newArr.length);


