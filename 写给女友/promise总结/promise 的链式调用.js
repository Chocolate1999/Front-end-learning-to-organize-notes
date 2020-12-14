// let p1 = new Promise((resolve, reject) => {
//   resolve(1);
// })

// p1.then(res => console.log(res));


// let p1 = new Promise((resolve, reject) => {
//   resolve(1);
// })

// p1.then(res => console.log(res))
//   .then(res => console.log(res + 1))
//   .then(res => console.log(res + 2));


// let p1 = new Promise((resolve, reject) => {
//   resolve(1);
// })

// p1.then(res => new Promise((resolve, reject) => {
//   reject(2);
// }))
//   .then(function (res) {
//     console.log(res);
//   }, function (err) {
//     console.log('error:' + err);
//   })

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000)
})

p1.then(res => { console.log(res); return res + 1 });
p1.then(res => { console.log(res); return res + 1 });
p1.then(res => { console.log(res); return res + 1 });

p1.then(res => { console.log(res); return res + 1 })
  .then(res => { console.log(res); return res + 1 })
  .then(res => { console.log(res); return res + 1 });


