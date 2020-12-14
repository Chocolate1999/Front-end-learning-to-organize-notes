let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('400');
  }, 3000)
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(p1);
  }, 1000)
})

p2.then(res => console.log(res))
  .catch(err => console.log('error:'+err));