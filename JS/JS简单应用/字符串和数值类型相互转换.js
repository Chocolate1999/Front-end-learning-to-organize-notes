/*字符串转数值 */
let str = '1314.520'
console.log(parseInt(str))
console.log(typeof parseInt(str))

console.log(parseFloat(str))
console.log(typeof parseFloat(str))

console.log(Number(str))


/* 数值转字符串 */
let num = 1314.520
console.log(num.toString())
console.log(typeof num.toString())

console.log('' + num)
console.log(''.concat(num))

console.log(num.toFixed())
console.log(typeof num.toFixed())

console.log(num.toFixed(2))
console.log(Number(num.toFixed(2)))
