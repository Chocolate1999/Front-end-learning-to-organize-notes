import {initState} from './init'

function Vue(options) {
  this._init(options);
}

// 初始化
Vue.prototype._init = function (options) {
  // 保存实例
  var vm = this;
  vm.$options = options; // 将 options 挂载到实例上

  initState(vm); // 初始化状态
}

export default Vue;