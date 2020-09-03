let arr = [1, 2, 3, 2, 33, 55, 66, 3, 55];

/*第一种：遍历方法 */
let newArr = [];
arr.forEach(item=>{
    if(!newArr.includes(item)){
        newArr.push(item);
    }
})
console.log(newArr);

/*第二种：巧用Set */
let newArr2 = [...new Set(arr)];
console.log(newArr2);
