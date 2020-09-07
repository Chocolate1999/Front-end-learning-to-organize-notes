/* 获取某个范围的随机整数 */
let myRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min+1) + min)
}

/* 如何来获取随机颜色 */
let randomColor = () => {
  let r = myRandom(0,255)
  let g = myRandom(0,255)
  let b = myRandom(0,255)
  let res = `rgb(${r},${g},${b})`
  return res
}
console.log(randomColor())
// document.body.style.backgroundColor = randomColor()