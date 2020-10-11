function proxyData(vm, target, key) {
  Object.defineProperty(vm, key, {
    get() {
      // 相当于将vm._data.title 转变成 vm.title
      return vm[target][key];
    },
    set(newVal) {
      // set 同理
      vm[target][key] = newVal;
    }
  })
}
export default proxyData;