/* 用不同的三种思想实现数组去重 */

let arr = [12, 23, 12, 15, 25, 23, 16, 25, 16];

/* 思想一：数组最后一项元素替换掉当前项元素，并删除最后一项元素 */

let setToArr = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let cur = arr[i]; // 获取当前项
    let remainArr = arr.slice(i + 1); // 从i+1开始取（包括i+1），取数组后所有元素
    let idx = remainArr.indexOf(cur); // 看从i+1开始是否含有与cur相同的元素
    if (idx !== -1) {
      arr[i] = arr[arr.length - 1]; // 把最后一项替换当前项
      arr.length--; // 数组长度减1
      i--; // 从当前项再次判断
    }
  }
  return arr;
}

console.log(setToArr(arr)); // [ 16, 23, 12, 15, 25 ]

/* 思想二：利用map键值对来进行去重操作，替换操作与思想一一致 */

let setToArr2 = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (map.has(cur)) {
      arr[i] = arr[arr.length - 1];
      arr.length--;
      i--;
    }
    map.set(cur, true);
  }
  return arr;
}
console.log(setToArr2(arr)); // [ 16, 23, 12, 15, 25 ]

/* 思想三：直接食用内置的 Set 去重 */

let setToArr3 = (arr) => {
  return [...new Set(arr)];
}
console.log(setToArr3(arr)); // [ 16, 23, 12, 15, 25 ]