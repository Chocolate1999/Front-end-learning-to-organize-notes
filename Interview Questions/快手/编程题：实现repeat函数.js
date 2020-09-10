/* 编程题：实现repeat函数，每隔一段时间执行一次函数，重复n次。 */


//每隔2s输出一次"helloworld"，共输出4次 const repeatFunc = repeat(console.log, 4, 2000); repeatFunc("helloworld"); 
// repeatFunc = repeat(console.log, 4, 2000); repeatFunc("helloworld");

let repeat = (fn,time,wait) => {
  return (...args) => { 
    let timeId= null
    let cnt = 0
    timeId = setInterval(()=>{
      cnt++
      fn(args)
      if(cnt === time){
        clearInterval(timeId)
      }
    },wait)
  }
}
let repeatFunc = repeat(console.log, 4, 2000)
repeatFunc('helloworld')