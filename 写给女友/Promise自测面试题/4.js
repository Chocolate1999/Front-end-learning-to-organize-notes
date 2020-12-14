let p1 = new Promise((resolve, reject) => {
  reject(42);
});

p1.catch((function (value) {
  console.log(value);
  return value + 1;
})).then(function (value) {
  console.log(value);
});