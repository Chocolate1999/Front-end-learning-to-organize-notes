Promise.myRace = arr => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Promise) { // 处理Promise对象
        arr[i].then(resolve, reject);
      } else { // 处理非Promise对象
        Promise.resolve(arr[i]).then(resolve, reject);
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
let p2 = new Promise((resolve, reject) => {
  reject('asfs')

});
let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(33);
  }, 4);
});

Promise.myRace([p1, p3, 3, 4]).then(data => {
  // 谁快就是谁
  console.log(data);
}, err => {
  console.log('失败跑的最快')
})

Promise.myRace([p1, p2, p3, 3, 4]).then(data => {
  // 谁快就是谁
  console.log(data);
}, err => {
  console.log('失败跑的最快')
})