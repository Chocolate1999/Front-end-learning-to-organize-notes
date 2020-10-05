/* Async/Await 版本 Async/Await是目前前端异步书写最优雅的一种方式 */

/*缺点： ES7 语法存在兼容性问题，有 babel 一切兼容性都不是问题 */


function sleep(time) {
  return new Promise(reslove => setTimeout(reslove, time));
}
function say(name) {
  console.log(`hello ${name}`);
}

async function task() {
  await sleep(3000);
  say('Chocolate');
  say('Yang');
}

task();