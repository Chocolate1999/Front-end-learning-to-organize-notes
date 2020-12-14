let p1 = new Promise((resolve, reject) => {
  resolve(42);
});

let p2 = new Promise((resolve, reject) => {
  reject(new Error('TypeError!!!'));
});

p1.then(function (value) {
  console.log(value);
  return p2;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.log(err);
})