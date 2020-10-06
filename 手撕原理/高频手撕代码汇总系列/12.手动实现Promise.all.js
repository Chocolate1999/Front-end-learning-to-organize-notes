Promise.myAll = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) { // 数组为空，直接resolve一个空数组
      resolve([]);
    } else {
      let res = [], cnt = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Promise) {  // 传递的是Promise对象
          arr[i].then(data => {
            res[i] = arr[i];
            if (++cnt === arr.length) { // 所有任务成功，进行回调
              resolve(res);
            }
          }, err => {
            reject(err);  // 只有有一个失败就全部失败
          })
        } else {  // 处理非 Promise 对象
          res[i] = arr[i];
          if (++cnt === arr.length) { // 所有任务成功，进行回调
            resolve(res);
          }
        }
      }
    }
  })
}

// 测试用例
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11)
  }, 2000);
});

let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(33);
  }, 4);
});

Promise.myAll([p1, p3, 3, 4]).then(data => {
  // 按传入数组的顺序打印
  console.log(data); // [ Promise { 11 }, Promise { 33 }, 3, 4 ]
}, err => {
  console.log(err)
});
