// /* 创建数组 */
// var arr1 = []; // 通过字面量创建
// var arr2 = new Array(); // 通过系统内置的Array构造函数


// var arr = [, 1,3,5,7,];
// console.log(arr); // [ <1 empty item>, 1, 3, 5, 7 ]
// // console.log(arr.length); // 5
// var arr = new Array(100);
// console.log(arr)

// var arr = [1,2,3,4];
// console.log(arr.push(5));
// console.log(arr.unshift(0));
// console.log(arr);


// Array.prototype.myPush = function(){
//   for(var i=0;i<arguments.length;i++){
//     this[this.length] = arguments[i];
//   }
//   return this.length;
// }
// var arr = [1,2,3,4];
// console.log(arr.myPush(5));
// console.log(arr);

// var arr = [1,2,3,4];
// var tmp = arr.pop();
// console.log(tmp); // 4
// var tmp2 = arr.shift();
// console.log(tmp2); // 1

// var arr = [1,2,3];
// arr.reverse();
// console.log(arr); // [ 3, 2, 1 ]

// // arr.splice(开始项的下标，剪切长度，剪切以后最后一位开始添加数据)
// var arr = ['a', 'b', 'c'];
// arr.splice(1,2);
// console.log(arr); // ['a']
// arr.splice(1,0,2,3);
// console.log(arr) // [ 'a', 2, 3 ]

// var arr = [-1,-5,8,0,2];
// console.log(arr.sort()); // [ -1, -5, 0, 2, 8 ]

// var arr = ['b','z','h','i','a'];
// console.log(arr.sort()); // [ 'a', 'b', 'h', 'i', 'z' ]

// var arr = [27,49,5,7];
// console.log(arr.sort());

/* 
  sort 按照ascii码来进行排序
  1、参数a,b
  2、返回值：负值，a 就排在前面
            正值，b 就排在前面
            0， 保持不动
*/
var arr = [27, 49, 5, 7];
arr.sort((a,b)=>a-b);
console.log(arr); // [ 5, 7, 27, 49 ]
arr.sort((a,b)=>b-a);
console.log(arr); // [ 49, 27, 7, 5 ]