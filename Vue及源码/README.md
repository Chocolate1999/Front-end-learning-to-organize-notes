## :pushpin: Vue源码解析—动手实现简化版MVVM

<p align="center">
<img src="https://camo.githubusercontent.com/87301d019d7f5fd66e4186fcf2f7e7a2276fd9f1/68747470733a2f2f7472617669732d63692e636f6d2f736877323031382f736877323031382e6769746875622e696f2e737667" alt="Build Status" data-canonical-src="https://travis-ci.comChocolate1999/Vue-MVVM.svg" style="max-width:100%;">
<a href="http://hits.dwyl.com/Chocolate1999/Vue-MVVM"><img src="http://hits.dwyl.com/Chocolate1999/vue-shop.svg" alt="HitCount"></a><a href="https://www.gnu.org/licenses/"> <img src="https://img.shields.io/github/license/Chocolate1999/Vue-MVVM.svg" alt="License"></a><a href="https://github.com/Chocolate1999/Vue-MVVM/network"> <img src="https://img.shields.io/github/forks/Chocolate1999/Vue-MVVM.svg" alt="GitHub forks"></a> <a href="https://github.com/Chocolate1999/Vue-MVVM/stargazers"> <img src="https://img.shields.io/github/stars/Chocolate1999/Vue-MVVM.svg" alt="GitHub stars"></a>
<img src="https://camo.githubusercontent.com/cb8cb80af654f3dae14a4aa62e44bf62f16953d6/68747470733a2f2f6a617977636a6c6f76652e6769746875622e696f2f73622f6c616e672f6368696e6573652e737667"></img></p>


 ## :seedling: 引言
 相信只要去面试 `Vue`，都会被用到 `vue`的双向数据绑定，你如果只说个 `mvvm`就是视图模型模型视图，只要数据改变视图也会同步更新，那可能达不到面试官想要的那个层次。甚至可以说这一点就让面试官觉得你知识了解的还不够，只是粗略地明白双向绑定这个概念。

本博客旨在通过一个简化版的代码来对 `mvvm` 理解更加深刻，如若存在问题，欢迎评论提出，谢谢您！

最后，希望你给一个点赞或 `star` :star:，谢谢您的支持！

<a href="https://github.com/Chocolate1999/Vue-MVVM">实现源码传送门</a>

同时，也会收录在**小狮子前端笔记**仓库里 ✿✿ヽ(°▽°)ノ✿

<a href="https://github.com/Chocolate1999/Front-end-learning-to-organize-notes">:sunny:小狮子前端の学习:cloud:整理笔记:heart:   Front-end-learning-to-organize-notes</a>

**实现效果：**


![](https://img-blog.csdnimg.cn/20200718112044259.gif)


 ## :last_quarter_moon_with_face: 几种实现双向绑定的做法


目前几种主流的 `mvc(vm)`框架都实现了单向数据绑定，即用数据操作视图，数据更新，视图同步更新。而双向数据绑定无非就是在单向绑定的基础上给可输入元素（如 `input`、`textarea`等）添加了 `change(input) `事件，来动态修改  `model` 和 `view`，这样就能用视图来操作数据了，即视图更新，数据同步更新。

实现数据绑定的做法大致有如下几种：

>发布者-订阅者模式（backbone.js）
>脏值检查（angular.js）将旧值和新值进行比对，如果有变化的话，就会更新视图，最简单的方式就是通过 `setInterval()`定时轮询检测数据变动。
>数据劫持（vue.js）

**发布者-订阅者模式**：一般通过 `sub`，`pub` 的方式实现数据和视图的绑定监听，更新数据方式通常做法是 `vm.set('property', value)`

但上述方式对比现在来说满足不了我们需要了，我们更希望通过 `vm.property = value` 这种方式更新数据，同时自动更新视图，于是有了下面两种方式：

**脏值检测**： `angular.js` 是通过脏值检测的方式比对数据是否变更，来决定是否更新视图，最简单的方式就是通过 `setInterval()`定时轮询检测数据变动。当然，它只在指定的事件触发时才进入脏值检测，大致如下：

- `DOM`事件，譬如用户输入文本，点击按钮等。(`ng-click`)
- `XHR`响应事件（`$http`）
- 浏览器 `Location` 变更事件（`$location`）
- `Timer` 事件（`$timeout`, `$interval`）

**数据劫持**： `vue.js` 则是采用数据劫持结合发布者-订阅者模式的方式，通过 `object.defineProperty()` 来劫持各个属性的 `setter`、`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。 

## :waxing_gibbous_moon: 实现 `mvvm` 的双向绑定

要实现 `mvvm` 的双向绑定，就必须要实现以下几点： 

- 实现一个指令解析器 `Compile`，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数 
- 实现一个数据监听器`Observer`，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者 
- 实现一个`Watcher`，作为连接`Observer`和`Compile`的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图 
- `mvvm`入口函数，整合以上三者

整合流程图如下图所示：
![](https://img-blog.csdnimg.cn/20200714093023274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

## :volcano: 实现指令解析器 Compile
`compile` 主要做的事情是**解析模板指令**，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图，如下图所示：
![](https://img-blog.csdnimg.cn/20200714101008776.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

因为遍历解析的过程有多次操作 `dom` 节点，为提高性能和效率，会先将 `vue` 实例根节点的 `el` 转换成文档碎片`fragment`进行解析编译操作，解析完成，再将`fragment`添加回原来的真实`dom`节点中。

`html` 页面引入我们重新写的 `myVue.js`
```javascript
<script src="./myVue.js"></script>
```
### 创建 `myVue` 类

创建一个 `myVue` 类，构造函数如下所示，将页面的挂载 `el`、数据 `data`、操作集 `options` 进行保存。
```javascript
class myVue{
  constructor(options){
    this.$el = options.el
    this.$data = options.data
    this.$options = options
    if(this.$el){
      // 1.实现数据观察者（省略...）
      // 2.实现指令解析器
      new Compile(this.$el,this)
    }
    // console.log(this)
  }
}
```
### 实现 `Compile` 类
具体实现步骤：

- 判断当前挂载是否为元素节点，不是的话就得寻找 `query`
- 获取文档碎片对象，放入内存中来操作我们的 `dom`节点，目的是减少页面的回流和重绘
- 最后，将编译后的模板添加到根元素

```javascript
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
```
判断是否为元素节点，直接判断nodeType是否为1即可
```javascript
isElementNode(node){
  return node.nodeType  === 1
}
```

通过 `document.createDocumentFragment()` 创建文档碎片对象，通过 `el.firstChild` 是否还存在来判断，然后将 `dom` 节点添加到文档碎片对象中，最后 `return`
```javascript
node2Fragment(el){
  // 创建文档碎片对象
  const fragment = document.createDocumentFragment()
  let firstChild
  while(firstChild =  el.firstChild){
    fragment.appendChild(firstChild)
  }
  return fragment
}
```
### 编译模板
解析模板时，会获取得到所有的子节点，此时分两种情况，即`元素`节点和`文本`节点。如果当前节点还存在子节点，则需要通过递归操作来遍历其子节点。

```javascript
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
```
### 编译元素节点（遇见设计模式）
节点 `node` 上有一个 `attributes` 属性，来获取当前节点的所有属性，通过是否以 `v-` 开头来判断当前属性名称是否为一个指令。如果是一个指令的话，还需进行分类编译，用数据来驱动视图。更新数据完毕后，再通过 `removeAttribute` 事件来删除指令上标签的属性。

如果是非指令的话，例如事件 `@click="sayHi"`，仅需通过指令 `v-on` 来实现即可。

对于不同的指令，我们最好进行一下封装，这里就巧妙运用了 **策略模式** 。

```javascript
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
```
判断当前 `attrName` 是否为一个指令，仅需判断是否以 `v-` 开头
```javascript
isDirective(attrName){
    return attrName.startsWith('v-')
  }
```
判断当前 `attrName` 是否为一个事件，就看是否以`'@'`开头的事件绑定
```javascript
isEventName(attrName){
    return attrName.startsWith('@')
  }
```

指令处理集合

```javascript
const complieUtil = {
  getVal(expr,vm){
    return expr.split('.').reduce((data,currentVal)=>{
      // console.log(currentVal)
      return data[currentVal]
    },vm.$data)
  },
  text(node,expr,vm){
    let value;
    // 元素节点
    if(expr.indexOf('{{') !== -1){
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args)=>{
        return this.getVal(args[1],vm);
      })
    }else{ // 文本节点
      value = this.getVal(expr,vm)
    }
    this.updater.textUpdater(node,value)
  },
  html(node,expr,vm){
    const value = this.getVal(expr,vm)
    this.updater.htmlUpdater(node,value)
  },
  model(node,expr,vm){
    const value = this.getVal(expr,vm)
    this.updater.modelUpdater(node,value)
  },
  on(node,expr,vm,eventName){
    let fn = vm.$options.methods && vm.$options.methods[expr] 
    // 1、让fn通过bind函数指向原来的vm 2、默认冒泡
    node.addEventListener(eventName,fn.bind(vm),false) 
  },
  bind(node,expr,vm,attrName){
    
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
    }
  }
}
```

## :balloon: 实现数据监听器 Observer
利用 `Obeject.defineProperty()` 来监听属性变动，那么将需要 `observe` 的数据对象进行递归遍历，包括子属性对象的属性，都加上 `setter` 和 `getter` 。这样的话，给这个对象的某个值赋值，就会触发 `setter` ，那么就能监听到了数据变化。具体代码如下：

```javascript
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
    Object.defineProperty(obj,key,{
      enumerable: true,
      configurable: false,
      get(){
        // 订阅数据变化时，往Dep中添加观察者，进行依赖收集
        return value
      },
      // 通过箭头函数改变this指向到class Observer
      set:(newVal)=>{
        this.observe(newVal)
        if(newVal !== value){
          value = newVal
        }
      }
    })
  }
}
```

`data` 示例如下：

```javascript
data: {
  person:{
    name: 'Chocolate',
    age: 20,
    hobby: '写代码'
  },
  msg: '超逸の技术博客',
  htmlStr: '<h3>欢迎一起学习~</h3>'
},
```

## :gift: 实现 watcher 去更新视图
![](https://img-blog.csdnimg.cn/20200714093023274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
`Watcher`  订阅者作为 `Observer` 和 `Compile` 之间通信的桥梁，主要做的事情是:

 - 在自身实例化时往属性订阅器( `dep` )里面添加自己 
 - 自身必须有一个 `update()`方法 
 - 待属性变动`dep.notify()`通知时，能调用自身的 `update()` 方法，并触发 `Compile` 中绑定的回调。

### `Watcher`  订阅者

实例化 `Watcher` 的时候，调用 `getOldVal()` 方法，来获取旧值。通过 `Dep.target = watcherInstance（this）` 标记订阅者是当前 `watcher`实例（即指向自己）。

```javascript
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
```

强行触发属性定义的 `get` 方法，`get` 方法执行的时候，就会在属性的订阅器 `dep` 添加当前`watcher` 实例，从而在属性值有变化的时候，`watcherInstance（this）` 就能收到更新通知。

```javascript
// 上文省略...
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
```

### 订阅器 `dep` 

主要做两件事情：

- 收集订阅者
- 通知订阅者更新

```javascript
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
```
### 修改我们原本的 `Compile.js` 文件

做完上述事情后，此时，当我们修改某个数据时，数据已经发生了变化，但是视图没有更新。那我们在什么时候来添加绑定 `watcher` 呢？请继续看下图

![](https://img-blog.csdnimg.cn/20200717101600906.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

也就是说，当我们订阅数据变化时，来绑定更新函数，从而让 `watcher` 去更新视图。此时我们修改我们原本的 `Compile.js` 文件如下：

```javascript
// 指令处理集合
const complieUtil = {
  getVal(expr,vm){
    return expr.split('.').reduce((data,currentVal)=>{
      // console.log(currentVal)
      return data[currentVal]
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
    const value = this.getVal(expr,vm)
    // 订阅数据变化时 绑定更新函数 更新视图的变化
    // 数据==>视图
    new Watcher(vm,expr,(newVal)=>{
      this.updater.modelUpdater(node,newVal)
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
```

<hr/>

此时，我们就能通过数据变化来驱动视图了，例如更改我们的年龄 `age` 从原来的 `20` 设置为 `22`，如下图所示，发现数据更改， `watcher` 去更新了视图。

![](https://img-blog.csdnimg.cn/2020071710344010.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
## :rice_scene: 知识再梳理
有了之前的代码与流程图结合，我想对于` Vue`源码分析应该更加了解了，那么我们再次来梳理一下我们学习的知识点。依旧是结合下面流程图：
![](https://img-blog.csdnimg.cn/20200714093023274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
最开始，我们实现了 `Compile` 来**解析指令**，找到 `{{xxx}}`、指令、事件、绑定等等，然后再**初始化视图**。但此时还有一件事情没做，就是当数据发生变化的时候，在更新数据之前，我们还要**订阅数据变化，绑定更新函数**，此时就需要加入订阅者`Watcher`了。当订阅者观察到数据变化时，就会触发`Updater`来更新视图。

当然，创建 `Watcher`的前提时要进行**数据劫持来监听所有属性**，所以创建了 `Observer.js` 文件。在 `get`方法中，需要给 `Dep` **通知变化**，此时就需要将 `Dep` 的依赖收集关联起来，并且添加订阅者 `Watcher`（这个 `Watcher` 在 `Complie` 订阅数据变化，绑定更新函数时就已经创建了的）。此时 `Dep` 订阅器里就有很多个 `Watcher` 了，有多少个属性就对应有多少个 `Watcher`。

<hr/>

那么，我们举一个简单例子来走一下上述流程图：

假设原本 `data` 数据中有一个 `a:1`，此时我们进行更新为 `a:10`，由于早已经对我们的数据进行了数据劫持并且监听了所有属性，此时就会触发 `set` 方法，在 `set`方法里就会通知 `Dep` 订阅器发生了变化，然后就会通知相关 `Watcher` 触发 `update` 函数来更新视图。而这些订阅者 `Watcher` 在 `Complie` 订阅数据变化，绑定更新函数时就已经创建了。

## :hourglass: 视图->数据

上述，我们基本完成了数据驱动视图，现在我们来完成一下通过视图的变化来更新数据，真正实现双向数据绑定的效果。

在我们 `complieUtil` 指令处理集合中的 `model` 模块，给我们当前节点绑定一个 `input` 事件即可。我们可以通过  `e.target.value` 来获取当前 `input` 输入框的值。然后比对一下旧值和新值是否相同，如果不同的话，就得需要更新，调用 `setVal` 方法（具体见下文代码）。

```javascript
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
```
`setVal` 和 `getVal` 两者没有多大区别，只是 `set` 时多了一个 `inputVal`。它们都是找到最底层 `key` 值，然后更新 `value` 值。
```javascript
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
```
更新 `bug`：在上文，对于 `v-text`指令处，我们遗漏了绑定 `Watcher` 步骤，现在进行补充。
```javascript
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
```
最终，当我们更改 `input` 输入框中的值时，发现其他节点也跟着修改，这代表我们的数据进行了修改，相关订阅者触发了 `update` 方法，双向绑定功能实现！
![](https://img-blog.csdnimg.cn/20200718103044747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)



## :mag: 实现 proxy
我们在使用 `vue` 的时候,通常可以直接 `vm.msg` 来获取数据,这是因为 `vue` 源码内部做了一层代理.也就是说把数据获取操作 `vm` 上的取值操作 都代理到 `vm.$data` 上。

```javascript
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
```
我们简单测试一下，例如我们给 `button` 绑定一个 `sayHi()` 事件，通过设置 `proxy` 做了一层代理后，我们不需要像后面那样通过 `this.$data.person.name`来更改我们的数据，而直接可以通过 `this.person.name` 来获取我们的数据。

```javascript
methods: {
   sayHi() {
     this.person.name = '超逸'
     //this.$data.person.name = 'Chaoyi'
     console.log(this)
   }
}
```

## :orange_book: 大厂面试题
请阐述一下你对 `MVVM` 响应式的理解

![](https://img-blog.csdnimg.cn/20200714093023274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

`vue.js` 则是采用数据劫持结合发布者-订阅者模式的方式，通过 `Object.defineProperty()`来劫持各个属性的`getter`，`setter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

`MVVM`作为数据绑定的入口，整合`Observer`、`Compile` 和 `Watcher` 三者，通过`Observer`来监听自己的`model`数据变化，通过`Compile`来解析编译模板指令，最终利用`Watcher`搭起`Observer`和`Compile`之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(`input`) -> 数据`model`变更的双向绑定效果。

最开始，我们实现了 `Compile` 来**解析指令**，找到 `{{xxx}}`、指令、事件、绑定等等，然后再**初始化视图**。但此时还有一件事情没做，就是当数据发生变化的时候，在更新数据之前，我们还要**订阅数据变化，绑定更新函数**，此时就需要加入订阅者`Watcher`了。当订阅者观察到数据变化时，就会触发`Updater`来更新视图。

当然，创建 `Watcher`的前提时要进行**数据劫持来监听所有属性**，所以创建了 `Observer.js` 文件。在 `get`方法中，需要给 `Dep` **通知变化**，此时就需要将 `Dep` 的依赖收集关联起来，并且添加订阅者 `Watcher`（这个 `Watcher` 在 `Complie` 订阅数据变化，绑定更新函数时就已经创建了的）。此时 `Dep` 订阅器里就有很多个 `Watcher` 了，有多少个属性就对应有多少个 `Watcher`。

<hr/>

那么，我们举一个简单例子来走一下上述流程图：

假设原本 `data` 数据中有一个 `a:1`，此时我们进行更新为 `a:10`，由于早已经对我们的数据进行了数据劫持并且监听了所有属性，此时就会触发 `set` 方法，在 `set`方法里就会通知 `Dep` 订阅器发生了变化，然后就会通知相关 `Watcher` 触发 `update` 函数来更新视图。而这些订阅者 `Watcher` 在 `Complie` 订阅数据变化，绑定更新函数时就已经创建了。


## :pencil2: 总结与答疑
总算是把这篇长文写完了，字数也是达到将近 1w8。通过学习 `Vue MVVM源码`，对于 `Vue` 双向数据绑定这一块理解也更加深刻了。当然，本文书写的代码还算是比较简单，也参考了大佬的博客与代码，同时，也存在不足并且小部分功能没有实现，相较于源码来说还是有很多可优化和可重构的地方，那么也欢迎小伙伴们来 `PR`。一起来动手实现 `mvvm` 。




>本篇博客参考文献
<a href="https://juejin.im/post/5edefb32518825431373704c#heading-12">笑马哥：Vue的MVVM实现原理</a>
<a href="https://github.com/DMQ/mvvm">github：mvvm</a>
<a href="https://www.bilibili.com/video/BV1qJ411W7YR?p=7">视频学习：Vue源码解析</a>
