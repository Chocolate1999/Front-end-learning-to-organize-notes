let arr = [1, 2, [3, 4], [5, 6, [7, 8, 9]]];
/**第一种方式：flat */
let res1 = arr.flat(Infinity);
console.log(res1);

/**第二种方式：join + split*/
let res2 = arr.join().split(',').map(Number);
console.log(res2);

/**第三种方式： toString + split*/
let res3 = arr.toString().split(',').map(Number);
console.log(res3);

/**第四种方式：递归展开 */
const flattern = arr=>{
    const res = [];
    arr.forEach((item)=>{
        if(Array.isArray(item)){
            res.push(...flattern(item));
        }else{
            res.push(item);
        }
    })
    return res;
}
flattern(arr);

/**第五种方式：递归concat */
function flattern2(arr){
    return [].concat(
        ...arr.map(item=>Array.isArray(item)? flattern2(item):item)
    )
}
flattern2(arr);