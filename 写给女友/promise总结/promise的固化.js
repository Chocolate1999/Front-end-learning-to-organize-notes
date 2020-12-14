let p1 = new Promise((resolve, reject) => {
  resolve(1);
  reject(2);
})

p1.then(res => console.log(res))
  .then()
  .then()
  .then(res => console.log(res))
  .catch(err => console.log(err));