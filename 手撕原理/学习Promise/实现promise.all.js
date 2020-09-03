Promise.myAll = (arr) => {
  return new Promise((resolve,reject)=>{
    if(arr.length === 0){
      return resolve([])
    }else{
      let res = [], cnt = 0
      for(let i=0;i<arr.length;i++){
        if(!(arr[i] instanceof Promise)){
          res[i] = arr[i]
          if(++cnt === arr.length){
            resolve(res)
          }
        }else{
          arr[i].then(data=>{
            res[i] = arr[i]
            if(++cnt === arr.length){
              resolve(res)
            }
          },err=>{
            reject(err)
          })
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
let p2 = new Promise((resolve, reject) => {
  reject('asfs')

});
let p3 = new Promise((resolve) => {
  setTimeout(() => {
      resolve(33);
  }, 4);
});


Promise.myAll([p1, p3, 3, 4]).then(data => {
  // 按传入数组的顺序打印
  console.log(data);
}, err => {
  console.log(err)
});


