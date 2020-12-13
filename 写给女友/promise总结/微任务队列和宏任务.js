let promise = new Promise(function (resolve, reject) {
  console.log('promise');
  resolve('resolve');
})

setTimeout(function () {
  console.log('timeout');
}, 0);

promise.then(function (data) {
  console.log(data);
})

console.log('Chocolate');