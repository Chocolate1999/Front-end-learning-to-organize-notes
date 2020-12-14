setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise1');
  })
})

Promise.resolve().then(() => {
  console.log('promise2');
  setTimeout(() => {
    console.log('timer2');
  })
})