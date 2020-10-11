import observe from './observe';
function defineReactiveData(data, key, val) {
  // 有可能当前val还是一个对象，因此继续观察当前 val
  observe(val);
  Object.defineProperty(data, key, {
    get() {
      console.log('响应式数据-获取', val);
      return val;
    },
    set(newVal) {
      console.log('响应式数据-设置', newVal);
      if (newVal === val) return;
      // 可能更新的这个newVal 还是一个对象或者数组，我们需要再观察一下
      observe(newVal); 
      val = newVal;
    }
  })
}
export default defineReactiveData;