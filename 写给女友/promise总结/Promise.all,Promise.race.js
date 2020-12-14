// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 2000)
// })

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 3000)
// })

// let p4 = Promise.all([p1, p2, p3]);

// p4.then(res => console.log(res));

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(20);
  }, 2000)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 3000)
})

let p4 = Promise.race([p1, p2, p3]);

p4.then(res => console.log(res));