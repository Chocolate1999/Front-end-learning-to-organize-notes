// 指令处理集合
const complieUtil = {
  getVal(expr,vm){
    return expr.split('.').reduce((data,currentVal)=>{
      // console.log(currentVal)
      return data[currentVal]
    },vm.$data)
  },
  setVal(expr,vm,inputVal){
    return expr.split('.').reduce((data,currentVal)=>{
       data[currentVal] = inputVal
    },vm.$data)
  },
  // 获取新值 对{{a}}--{{b}} 这种格式进行处理
  getContentVal(expr,vm){
    return expr.replace(/\{\{(.+?)\}\}/g, (...args)=>{
      // console.log(args[1]);
      return this.getVal(args[1],vm);
    })
  },
  text(node,expr,vm){
    let value;
    if(expr.indexOf('{{') !== -1){
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args)=>{
        // 绑定watcher从而更新视图
        new Watcher(vm,args[1],()=>{
          this.updater.textUpdater(node,this.getContentVal(expr,vm))
          // console.log(expr);
        })
        return this.getVal(args[1],vm);
      })
    }else{ // 也可能是v-text='obj.name' v-text='msg'
      value = this.getVal(expr,vm)
      // 绑定watcher从而更新视图
      new Watcher(vm,expr,(newVal)=>{
        this.updater.textUpdater(node,newVal)
        // console.log(expr);
      })
    }
    this.updater.textUpdater(node,value)
  },
  html(node,expr,vm){
    const value = this.getVal(expr,vm)
    new Watcher(vm,expr,(newVal)=>{
      this.updater.htmlUpdater(node,newVal)
    })
    this.updater.htmlUpdater(node,value)
  },
  model(node,expr,vm){
    let value = this.getVal(expr,vm)
    // 订阅数据变化时 绑定更新函数 更新视图的变化
    // 数据==>视图
    new Watcher(vm,expr,(newVal)=>{
      this.updater.modelUpdater(node,newVal)
    })
    // 视图==》数据
    node.addEventListener('input',(e)=>{
      var newValue = e.target.value
      if(value == newValue) return
      // 设置值
      this.setVal(expr,vm,newValue)
      value = newValue
    })
    this.updater.modelUpdater(node,value)
  },
  on(node,expr,vm,eventName){
    let fn = vm.$options.methods && vm.$options.methods[expr] 
    // 1、让fn通过bind函数指向原来的vm 2、默认冒泡
    node.addEventListener(eventName,fn.bind(vm),false) 
  },
  bind(node,expr,vm,attrName){
    let attrVal = this.getVal(expr,vm)
    this.updater.attrUpdater(node,attrName,attrVal)
  },
  // 更新的函数
  updater:{
    textUpdater(node,value){
      node.textContent = value
    },
    htmlUpdater(node,value){
      node.innerHTML = value
    },
    modelUpdater(node,value){
      node.value = value
    },
    attrUpdater(node, attrName, attrVal){
      node.setAttribute(attrName,attrVal)
    }
  }
}
class Compile{
  constructor(el,vm){
    // 判断是否为元素节点，如果不是就query
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    // 1、获取文档碎片对象，放入内存中，会减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el)
    // 2、编译模板
    this.compile(fragment)
    // 3、追加子元素到根元素
    this.el.appendChild(fragment)
  }
  // 判断是否为元素节点，直接判断nodeType是否为1即可
  isElementNode(node){
    return node.nodeType  === 1
  }
  node2Fragment(el){
    // 创建文档碎片对象
    const fragment = document.createDocumentFragment()
    let firstChild
    while(firstChild =  el.firstChild){
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  compile(fragment){
    // 1、获取所有子节点
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child=>{
      // console.log(child)
      // 如果是元素节点，则编译元素节点
      if(this.isElementNode(child)){
        // console.log('元素节点',child) 
        this.compileElement(child)
      }else{
        // 其它为文本节点，编译文本节点
        // console.log('文本节点',child)
        this.compileText(child)
      }
      if(child.childNodes && child.childNodes.length){
        this.compile(child)
      }
    })
  }
  // 编译元素节点
  compileElement(node){
    const attributes = node.attributes;
    [...attributes].forEach(attr=>{
      // console.log(attr)
      const {name,value} = attr;
      // console.log(name,value)
      // 判断当前name值是否为一个指令，通过是否以 'v-' 开头来判断
      if(this.isDirective(name)){
        // console.log(name.split('-'))
        const [,directive] = name.split('-') // text html model on:click
        // console.log(directive)
        const [dirName,eventName] = directive.split(':') // text html model on
        // 更新数据 数据驱动视图
        complieUtil[dirName](node,value,this.vm,eventName)
        // 删除指令上标签上的属性
        node.removeAttribute('v-' + directive)
      }else if(this.isEventName(name)){ // @click="sayHi"
        let [,eventName] = name.split('@')
        complieUtil['on'](node,value,this.vm,eventName)
      }
    })
  }
  // 编译文本节点
  compileText(node){
    // {{}} v-text
    // console.log(node.textContent)
    const content = node.textContent
    if(/\{\{(.+?)\}\}/.test(content)){
      // console.log(content)
      complieUtil['text'](node,content,this.vm)
    }
  }
  isDirective(attrName){
    return attrName.startsWith('v-')
  }
  // 判断当前attrName是否为一个事件，以'@'开头的事件绑定
  isEventName(attrName){
    return attrName.startsWith('@')
  }
}