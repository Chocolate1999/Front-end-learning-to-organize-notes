/* 常见日期格式化方法 */
let now = new Date()
console.log(now.toLocaleDateString()) // 获取年月日
console.log(now.toLocaleTimeString()) // 获取时分秒
console.log(now.toLocaleString()) // 整体时间

/* 如何显示数字时钟的格式时间 */
let now = new Date()
let hour = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

let tmp = '' + hour%12
if(hour === 0){
  tmp = '12'
}
tmp = tmp + (minutes < 10 ? ':0':':') + minutes
tmp = tmp + (seconds < 10 ? ':0':':') + seconds
tmp = tmp + (hour >= 12 ? ' P.M.':' A.M.')
console.log(tmp)

/* 进行简易封装 */
let nowTime = () => {
  let now = new Date()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  let tmp = '' + (hour % 12)
  if (hour === 0) {
    tmp = '12'
  }
  tmp = tmp + (minutes < 10 ? ':0' : ':') + minutes
  tmp = tmp + (seconds < 10 ? ':0' : ':') + seconds
  tmp = tmp + (hour >= 12 ? ' P.M.' : ' A.M.')
  return tmp
}
let time = nowTime()
console.log(time)
