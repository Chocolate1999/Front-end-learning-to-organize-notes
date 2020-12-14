Promise.resolve().then(function () {
  console.log('promise1');
  setTimeout(() => {
    console.log('setTimeout2');
  }, 0)
})

setTimeout(() => {
  console.log('setTimeout1');
  Promise.resolve().then(function () {
    console.log('promise2');
  })
}, 0)