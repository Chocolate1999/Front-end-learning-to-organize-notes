// var p = new Promise((resolve, reject) => {
//   reject(Error('The Fails!'))
// })
// .catch(error => console.log(error.message))
// .catch(error => console.log(error.message))


// var p = new Promise((resolve, reject) => {
//   reject(Error('The Fails!'))
// })
// .catch(error => console.log(error.message))
// .then(error => console.log(error))


// let func = (error) => console.log(error)
// func() // undefined

new Promise((resolve, reject) => {
  resolve('Success!')
})
.then(() => {
  throw Error('Oh noes!')
})
.catch(error => {
  //console.log(error.message)
  return "actually, that worked"
})
.then( data => {
  console.log(data)
  //throw Error('123')
})
.catch(error => console.log(error.message))


// Promise.resolve('Success!')
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return 'actually, that worked'
//   })
//   .then(data => {
//     throw Error('The fails!')
//   })
//   .catch(error => console.log(error.message))
