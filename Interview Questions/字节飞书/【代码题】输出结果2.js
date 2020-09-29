console.log('begin')
setTimeout(() => {
  console.log('setTimeout 1')
  Promise.resolve().then(() => {
    console.log('promise 1')
    setTimeout(() => {
      console.log('setTimeout2 between promise1&2')
    })
  }).then(() => {
    console.log('promise 2')
  })
}, 0)

console.log('end')

/*
begin
end
setTimeout 1
promise 1
promise 2
setTimeout2 between promise1&2

*/