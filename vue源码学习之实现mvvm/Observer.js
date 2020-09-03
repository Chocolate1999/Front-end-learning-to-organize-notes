class Observer{
  constructor(data){
    this.observe(data)
  }
  observe(data){
    if(data && typeof data === 'object'){
      // console.log(Object.keys(data))
      // 进行数据劫持
      Object.keys(data).forEach(key=>{
        this.defineReactive(data,key,data[key])
      })
    }
  }
  defineReactive(obj,key,value){
    // 递归遍历
    this.observe(value)
    const dep = new Dep()
    Object.defineProperty(obj,key,{
      enumerable: true,
      configurable: false,
      get(){
        // 订阅数据属性时，往Dep中添加观察者，进行依赖收集
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      // 通过箭头函数改变this指向到class Observer
      set:(newVal)=>{
        this.observe(newVal)
        if(newVal !== value){
          value = newVal
          // 如果新旧值不同，则告诉Dep通知变化
          dep.notify()
        }
      }
    })
  }
}

