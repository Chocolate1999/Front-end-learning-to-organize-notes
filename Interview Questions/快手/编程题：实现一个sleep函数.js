/* 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现 */

/* 方法一: Promise */
let sleep = (time) =>{
  return new Promise((resolve)=>setTimeout(resolve,time))
}
sleep(1000).then(()=>{
  console.log('1秒后执行')
})


/* 方法二: Generator*/
function* generatorSleep(time){
  yield new Promise(reslove=>setTimeout(reslove,time))
}
generatorSleep(1000).next().value.then(()=>{
  console.log('generator实现方式')
})

/* 方法三: Async/Await */
let sleepA = (time) =>{
  return new Promise((resolve)=>setTimeout(resolve,time))
}
async function foo(){
  let out = await sleepA(1000)
  console.log('async/await实现方式')
  return out
}
foo()

/* 方法四: ES5 实现方式 */
let sleeepES5 = (callback,time)=>{
  if(typeof callback === 'function'){
    setTimeout(callback,time)
  }
}
let fun = () => {
  console.log('ES5实现方式')
}
sleeepES5(fun,1000)