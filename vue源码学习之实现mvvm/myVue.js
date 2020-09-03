class myVue{
  constructor(options){
    this.$el = options.el
    this.$data = options.data
    this.$options = options
    if(this.$el){
      // 1.实现数据观察者
      new Observer(this.$data)
      // 2.实现指令解析器
      new Compile(this.$el,this)
      // 3.实现proxy代理
      this.proxyData(this.$data)
    }
    // console.log(this)
  }
  proxyData(data){
    for(const key in data){
      Object.defineProperty(this,key,{
        get(){
          return data[key]
        },
        set(newVal){
          data[key] = newVal
        }
      })
    }
  }
}