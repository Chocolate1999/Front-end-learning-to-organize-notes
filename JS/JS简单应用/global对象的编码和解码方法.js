/* global对象的编码和解码方法 */
let uri = 'http://www.yangchaoyi.vip/web index.html?name=chocolate'

/* 编码 */
console.log(encodeURI(uri)) // 只能解析空格
console.log(encodeURIComponent(uri)) // 最常用的编码方式

/* 解码 */
let encodeUri = 'http%3A%2F%2Fwww.yangchaoyi.vip%2Fweb%20index.html%3Fname%3Dchocolate'
console.log(decodeURI(encodeUri)) // 只能解析空格
console.log(decodeURIComponent(encodeUri))