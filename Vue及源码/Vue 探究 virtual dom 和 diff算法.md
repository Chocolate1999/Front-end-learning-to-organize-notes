###   virtual dom 和 diff算法
<hr/>

关于diff算法和虚拟dom，也是面试常见的问题，平常容易忽视，这里我也就深入研究了一下：


#### 虚拟dom

所谓虚拟dom，如字面意思，它是虚拟的，只在概念里面存在，并不真的存在，在vue中是ast语法树，关于这个语法树本文就不详细介绍了，有兴趣的读者可以深入研究一下。


下面代码，是一个简单vue template模板，那么解析成虚拟dom是怎样的呢？
```javascript
<template>
	<div id='dd'>
		<p>{{msg}}</p>
		<p>abc</p>
		<p>123</p>
	</div>
</template>
```

解析成虚拟dom：

```javascript
diff <div>
	props:{
		id:dd
	},
	children:[
		diff <p>
		props:
		children:[
			
		],
		text:xxx,
	]
```

上述代码就是概念上的介绍，如果懂一点算法知识的应该就明白了，就是不断地嵌套，但为了让更多伙伴读懂学会虚拟dom，下面来手写一个对象的形式：

```javascript
<template>
	<div id='dd'>
		<p><span></span></p>
		<p>abc</p>
		<p>123</p>
	</div>
</template>

var virtual=
{
	dom:'div',
	props:{
		id:dd
	},
	children:[
		{
			dom:'p',
			children:[
				dom:'span',
				children:[]
			]
		},
		{
			dom:'p',
			children:[
			]
		},
		{
			dom:'p',
			children:[
			]
		}
	]
}
```

上述代码应该就很清晰了，简单来说，就是将最上面的dom结构，解析成下面用js解析成的对象，每一个对象都有一个基础的结构：
- dom元素标签
- props记录挂载了哪些属性
- children记录有哪些子元素（子元素拥有和父元素相同的结构）



#### diff算法的比对机制
下面部分采用了伪代码形式介绍diff算法的比对机制，已经给出了详细的注释说明：
```javascript
//diff算法匹配机制
patchVnode(oldVnode,vnode){
	//先拿到真实的dom
	const el=vnode.el=oldVnode.el;
	//分别拿出旧节点和新节点的子元素
	let i,oldCh=oldVnode.children,ch=vnode.children;
	//如果新旧节点相同，直接return
	if(oldVnode==vnode) return;
	/*分四种情况讨论*/
	//1.只有文字节点不同的情况
	if(oldVnode.text!==null&&vnode.text!==null&&oldVnode.text!==vnode.text){
		api.setTextContent(el,vnode.text);
	}else{
		updateEle();
		//2.如果新旧节点的子元素都存在，那么发生的是子元素变动
		if(oldCh&&ch&&oldCh!==ch){
			updateChildren();
		//3.如果只有新节点有子元素，那么发生的是新增子元素
		}else if(ch){
			createEl(vnode);
		//4.如果只有旧节点有子元素，那么发生的是新节点删除了子元素
		}else if(oldCh){
			api.removeChildren(el);
		}
	}
}
```
## 总结

```javascript
学如逆水行舟，不进则退
```
