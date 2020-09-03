let arr1 = ['a', 'b']
let arr2 = ['c', 'd']

/**方法一：ES5 */
let res1 = arr1.concat(arr2);
console.log(res1);


/**方法二：ES5 */
let res2 = [...arr1,...arr2];
console.log(res2);