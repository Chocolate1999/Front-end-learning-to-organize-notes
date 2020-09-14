// console.log(typeof(1 -'1'))
// console.log(typeof('1' - '1'))

// console.log(a)

// console.log(typeof(a))

// console.log(typeof(null)) // object
// console.log(typeof(undefined)) // undefined

// console.log(typeof(typeof(a)))
// console.log(typeof(typeof(123)))

// let a = 'true'
// console.log(typeof(Number(a)) + '-' + Number(a))

// let a = true
// console.log(typeof(Number(a)) + '-' + Number(a))

// let a = null
// console.log(typeof(Number(a)) + '-' + Number(a))

// let a = undefined
// console.log(typeof(Number(a)) + '-' + Number(a))

// var a = 'a'
// console.log(typeof(Number(a)) + '-' + Number(a)) // number-NaN
// var a = '1a'
// console.log(typeof(Number(a)) + '-' + Number(a))// number-NaN
// var a = 3.14
// console.log(typeof(Number(a)) + '-' + Number(a))// number-3.14
// console.log(typeof(NaN)) // number

// let a = '123'
// console.log(typeof(parseInt(a)) + '-' + parseInt(a))

// let a = true
// console.log(typeof(parseInt(a)) + '-' + parseInt(a)) //number-NaN

// let a = '10'
// console.log(parseInt(a,16))

// console.log(parseInt('abc123')) // NaN
// console.log(parseInt('123abc456')) // 123

// console.log(parseFloat('3.1415926').toFixed(2)) // 3.14
// console.log(parseFloat('3.1415926').toFixed(4)) // 3.1416

// let str = 123 + ''
// let str1 = 123
// str1 = str1.toString()
// console.log(typeof(str))
// console.log(typeof(str1))

// let str = null
// let str1 = undefined
// str = str.toString()
// str1 = str1.toString()
// console.log(typeof(str)) // error
// console.log(typeof(str1)) // error


// let num = 10
// console.log(num.toString(2)) // 1010

// console.log(Boolean(1)) // true
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean("")) // false
// console.log(Boolean(0)) // false

/* 隐式类型转换 */

// let a = '123'
// a++
// console.log(a) //123

// let a = 'a' + 1
// console.log(a) 

// let a = '3' > 2
// console.log(a)

// let a = 1 == '1'
// console.log(a)


// let a = 1 === '1'
// console.log(a)

// let a = NaN == NaN
// console.log(a)

// let a = 4 > 3 > 2 // false
// let b = 2 > 1 == 1 // true 
// console.log(a,b)

// let a = undefined > 0 
// let b = undefined == 0
// let c = undefined < 0
// let d = undefined == undefined
// let e = undefined == null
// let f = null > 0
// let g = null == 0
// let h = null < 0

// console.log(a,b,c,d,e,f,g,h)

// let a = '123'
// console.log(typeof(+ a) + '-' + +a)

// let a = NaN
// let b = '123'
// let c = 'a'
// let d = null
// let e = undefined
// console.log(isNaN(a))
// console.log(isNaN(b))
// console.log(isNaN(c))
// console.log(isNaN(d))
// console.log(isNaN(e))

