class Watcher{
  constructor(vm,expr,cb){
    this.vm = vm
    this.expr = expr
    this.cb = cb
    // 先将旧值进行保存
    this.oldVal = this.getOldVal()
  }
  getOldVal(){
    // 将当前订阅者指向自己
    Dep.target = this
    // 获取旧值
    const oldVal = complieUtil.getVal(this.expr,this.vm)
    // 添加完毕，重置
    Dep.target = null
    return oldVal
  }
  // 比较新值与旧值，如果有变化就更新视图
  update(){
    const newVal = complieUtil.getVal(this.expr,this.vm)
    // 如果新旧值不相等，则将新值callback
    if(newVal !== this.oldVal){
      this.cb(newVal)
    }
  }
}

class Dep{
  constructor(){
    this.subs = []
  }
  // 收集观察者
  addSub(watcher){
    this.subs.push(watcher)
  }
  // 通知观察者去更新
  notify(){
    console.log('观察者',this.subs);
    this.subs.forEach(watcher => watcher.update())
  }
}