import Observer from './observer';

function observe(data) {
  // 观察对象，如果不是对象形式，直接返回即可
  if(typeof data !== 'object' || data === null) return;
  // 添加观察者
  return new Observer(data);
}
export default observe;
