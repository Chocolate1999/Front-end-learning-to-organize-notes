/* 获取某个范围的随机整数 */
let myRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/* 如何获取随机验证码 （四位，数字+字母（大写））*/
let createCode = () => {
  // 设置默认的字符串
  let code = ''
  // 设置长度
  let codeLength = 4
  let randomCode = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  while (codeLength--) {
    let randomNum = myRandom(0, 36)
    let randomC = randomCode[randomNum]
    code += randomC
  }
  return code
}
console.log(createCode())

