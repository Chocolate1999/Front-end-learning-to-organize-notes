import proxyData from './proxy';
function initState(vm) {
  var options = vm.$options;
  // 判断 data 是否存在
  if (options.data) {
    initData(vm); // 初始化数据
  }
}

function initData(vm) {
  var data = vm.$options.data;
  // 将 data 挂载到 vm 的 _data 上
  vm._data = data = typeof data === 'function' ? data.call(vm) : data || {};
  /* 进行代理 */
  for (var key in data) {
    proxyData(vm, '_data', key);
  }
}

export {
  initState
}