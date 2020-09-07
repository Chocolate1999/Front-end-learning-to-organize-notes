/* 获取某个范围的随机整数 */
let myRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min+1) + min)
}
let cnt = 10
while (cnt--) {
  console.log(myRandom(1, 100))
}
