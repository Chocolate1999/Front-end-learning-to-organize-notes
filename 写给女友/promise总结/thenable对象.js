// let obj = {
//   then(resolve, reject) {
//     // resolve(11);
//     reject(10);
//   }
// }

// let p1 = Promise.resolve(obj);

// p1.then(function (data) {
//   console.log(data);
// }, function (err) {
//   console.log('err' + err);
// })


let obj = {
  then(resolve, reject) {
    // resolve(11);
    reject(10);
  }
}

let p1 = Promise.reject(obj);

p1.then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
})