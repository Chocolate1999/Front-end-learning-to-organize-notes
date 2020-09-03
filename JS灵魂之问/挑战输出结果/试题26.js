const obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
// console.log(obj)
// console.log(obj.length)
//console.log(Array.from(obj))
//console.log([].concat(obj))
 console.log(obj.splice(0))