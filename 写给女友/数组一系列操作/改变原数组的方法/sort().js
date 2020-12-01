let arr = [1, 10, 2, 5, 8, 3];

arr.sort(); // 默认
console.log(arr); // [ 1, 10, 2, 3, 5, 8 ]

arr.sort((a, b) => a - b); // 从小到大排序
console.log(arr); // [ 1, 2, 3, 5, 8, 10 ]

arr.sort((a, b) => b - a); // 从大到小排序
console.log(arr); // [ 10, 8, 5, 3, 2, 1 ]
