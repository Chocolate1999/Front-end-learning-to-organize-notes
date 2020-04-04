
<!-- TOC -->

- [1、html5有哪些新特性、移除了那些元素？](#1html5有哪些新特性移除了那些元素)
- [2、前端注意哪些SEO?](#2前端注意哪些seo)
- [3、从浏览器地址栏输入url到显示页面的步骤](#3从浏览器地址栏输入url到显示页面的步骤)
- [4、如何进行网站性能优化](#4如何进行网站性能优化)
- [5、语义化的理解](#5语义化的理解)
- [6、对浏览器内核的理解](#6对浏览器内核的理解)
- [7、请描述一下 cookies，sessionStorage 和 localStorage 的区别？](#7请描述一下-cookiessessionstorage-和-localstorage-的区别)
- [8、页面访问cookie的限制条件](#8页面访问cookie的限制条件)
- [9、cookie的作用与弊端](#9cookie的作用与弊端)
- [10、介绍cookie的属性](#10介绍cookie的属性)
- [11、预测最近面试会考 Cookie 的 SameSite 属性](#11预测最近面试会考-cookie-的-samesite-属性)
- [12、SameSite](#12samesite)
- [13、doctype 的作用？严格模式与混杂模式如何区分？它们有何意义？](#13doctype-的作用严格模式与混杂模式如何区分它们有何意义)
- [14、HTML5 为什么只需写< !DOCTYPE HTML> ?](#14html5-为什么只需写-doctype-html-)
- [15、WEB标准以及W3C标准是什么?](#15web标准以及w3c标准是什么)
- [16、行内元素有哪些？块级元素有哪些？空（void）元素有哪些？](#16行内元素有哪些块级元素有哪些空void元素有哪些)
- [17、xhtml和html有什么区别?](#17xhtml和html有什么区别)
- [18、iframe有那些缺点？](#18iframe有那些缺点)
- [19、网页验证码是干嘛的，是为了解决什么安全问题](#19网页验证码是干嘛的是为了解决什么安全问题)
- [20、title与h1的区别、b与strong的区别、i与em的区别？](#20title与h1的区别b与strong的区别i与em的区别)

<!-- /TOC -->

### 1、html5有哪些新特性、移除了那些元素？
- `HTML5` 现在已经不是 `SGML` 的子集，主要是关于图像，位置，存储，多任务等功能的增加

	绘画 `canvas`
	用于媒介回放的` video` 和 `audio` 元素
	本地离线存储` localStorage` 长期存储数据，浏览器关闭后数据不丢失
	`sessionStorage` 的数据在浏览器关闭后自动删除
	语意化更好的内容元素，比如`article`、`footer`、`header`、`nav`、`section`
	表单控件，`calendar`、`date`、`time`、`email`、`url`、`search`
	新的技术`webworker`、` websocket`、 `Geolocation`

- `移除` 的元素：

	纯表现的元素：`basefont`、`big`、`center`、`font`、 `s`、`strike`、`tt`、`u`
	对可用性产生负面影响的元素：`frame`、`frameset`、`noframes`

- 支持`HTML5`新标签：

	IE8/IE7/IE6支持通过`document.createElement`方法产生的标签
	可以利用这一特性让这些浏览器支持`HTML5`新标签
	浏览器支持新标签后，还需要添加标签默认的样式

- 当然也可以直接使用成熟的框架、比如`html5shim`

```javascript
<!--[if lt IE 9]>
 
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
 
<![endif]-->
```

### 2、前端注意哪些SEO?

- 合理的`title`、`description`、`keywords`：搜索对着三项的权重逐个减小，`title`值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面`title`要有所不同；`description`把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面`description`有所不同；`keywords`列举出重要关键词即可
- 语义化的`HTML`代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
- 重要内容`HTML`代码放在最前：搜索引擎抓取`HTML`顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
- 重要内容不要用`js`输出：爬虫不会执行js获取内容
- 少用`iframe`：搜索引擎不会抓取`iframe`中的内容
- 非装饰性图片必须加`alt`
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标


### 3、从浏览器地址栏输入url到显示页面的步骤
**简略回答**

- 浏览器根据请求的`URL`交给`DNS`域名解析，找到真实`IP`，向服务器发起请求；
- 服务器交给后台处理完成后返回数据，浏览器接收文件（`HTML、JS、CSS`、图象等）；
- 浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
- 载入解析到的资源文件，渲染页面，完成。


**详细回答**

 1. 从浏览器接收`url`到开启网络请求线程（这一部分可以展开浏览器的机制以及进程与线程之间的关系）
 2. 开启网络线程到发出一个完整的`HTTP`请求（这一部分涉及到dns查询，`TCP/IP`请求，五层因特网协议栈等知识）
 3. 从服务器接收到请求到对应后台接收到请求（这一部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）
 4. 后台和前台的`HTTP`交互（这一部分包括`HTTP`头部、响应码、报文结构、`cookie`等知识，可以提下静态资源的`cookie`优化，以及编码解码，如`gzip`压缩等）
 5. 单独拎出来的缓存问题，`HTTP`的缓存（这部分包括http缓存头部，`ETag`，`catch-control`等）
 6. 浏览器接收到`HTTP`数据包后的解析流程（解析`html`-词法分析然后解析成`dom`树、解析`css`生成`css规则树`、合并成`render`树，然后`layout、painting`渲染、复合图层的合成、`GPU`绘制、外链资源的处理、`loaded`和`DOMContentLoaded`等）
 7. `CSS`的可视化格式模型（元素的渲染规则，如包含块，控制框，`BFC`，`IFC`等概念）
 8. `JS`引擎解析过程（`JS`的解释阶段，预处理阶段，执行阶段生成执行上下文，`VO`，作用域链、回收机制等等）
 9. 其它（可以拓展不同的知识模块，如`跨域`，`web安全`，`hybrid`模式等等内容）

### 4、如何进行网站性能优化
- `content ` 方面
	
	减少`HTTP`请求：合并文件、`CSS`精灵、`inline Image`
	减少`DNS`查询：`DNS`缓存、将资源分布到恰当数量的主机名
	减少`DOM`元素数量

- `Cookie` 方面

	减小`cookie`大小

- `Server` 方面

	使用`CDN`
	配置`ETag`	
	对组件使用`Gzip`压缩

- `图片` 方面

	优化图片：根据实际颜色需要选择色深、压缩
	优化`css`精灵
	不要在`HTML`中拉伸图片

- `css` 方面

 	将样式表放到页面顶部
	不使用`CSS`表达式
	使用`<link>`不使用`@import`

- ` js` 方面

	将脚本放到页面底部
	将`javascript`和`css`从外部引入
	压缩`javascript`和`css`
	删除不需要的脚本
	减少`DOM`访问

### 5、语义化的理解

- 简单来说：用正确的标签做正确的事情！
- `HTML`语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
- 在没有样式`CSS`情况下也以一种文档格式显示，并且是容易阅读的。
- 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 `SEO`。
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解


### 6、对浏览器内核的理解

- 主要分成两部分：渲染引擎(`layout engineer`或`Rendering Engine`)和`JS`引擎

- 渲染引擎：负责取得网页的内容（`HTML`、`XML`、图像等等）、整理讯息（例如加入`CSS`等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核

- `JS`引擎则：解析和执行`javascript`来实现网页的动态效果

- 最开始渲染引擎和`JS`引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎


### 7、请描述一下 cookies，sessionStorage 和 localStorage 的区别？

- `cookie`是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）

- `cookie`数据始终在同源的http请求中携带（即使不需要），即会在浏览器和服务器间来回传递

- `sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存

- 存储大小：

	`cookie`数据大小不能超过4k
	`sessionStorage`和`localStorage`虽然也有存储大小的限制，但比`cookie`大得多，可以达到5M或更大

- 有期时间：

	`localStorage` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
	`sessionStorage` 数据在当前浏览器窗口关闭后自动删除
	`cookie` 设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭

### 8、页面访问cookie的限制条件

cookie （储存在用户本地终端上的数据）

cookie 指某些网站为了辨别用户身份、进行 session 跟踪而储存在用户本地终端上的数据。cookie 在网络系统中几乎无处不在，当我们浏览以前访问过的网站时，网页中可能会出现 ：你好 XXX。

**1. 跨域问题：**

`cookie`允许Web开发者保留他们的用户的登录状态。但是当你的站点有一个以上的域名时就会出现问题了。在`cookie`规范上说，一个`cookie`只能用于一个域名，不能够发给其它的域名。因此，如果在浏览器中对一个域名设置了一个`cookie`，这个`cookie`对于其它的域名将无效。

**解决：**

- 通过nginx反向代理
- jsonp方式请求

**2. 设置了HTTP only：**

如果在cookie中设置了`HttpOnly`属性，那么通过程序(JS脚本、Applet等)将无法读取到`cookie`信息，这样能有效的防止`XSS`攻击。


### 9、cookie的作用与弊端

**cookie的作用**

- 可以在客户端上保存用户数据，起到简单的缓存和用户身份识别等作用。
- 保存用户的登陆状态，用户进行登陆，成功登陆后，服务器生成特定的cookie返回给客户端，客户端下次访问该域名下的任何页面，将该cookie的信息发送给服务器，服务器经过检验，来判断用户是否登陆。
- 记录用户的行为。

**cookie弊端**

- 增加流量消耗，每次请求都需要带上cookie信息。
- 安全性隐患，cookie使用明文传输。如果cookie被人拦截了，那人就可以取得所有的session信息。
- Cookie数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉


### 10、介绍cookie的属性

在chrome控制台中的Application选项卡中可以看到cookie的信息。

![](https://img-blog.csdnimg.cn/20200328111716129.png)

一个域名下面可能存在着很多个`cookie`对象。但一个`cookie`只能用于一个域名，不能够发给其它的域名。

- Name
	
	为一个cookie的名称（用 JavaScript 操作 Cookie 的时候注意对 Value 进行编码处理。）
- value
	
	为一个cookie的值（用 JavaScript 操作 Cookie 的时候注意对 Value 进行编码处理。）
- Domain
	为可以访问此cookie的域名

注：二级域名能读取设置了`domain`为顶级域名或者自身的cookie，不能读取其他二级域名`domain`的`cookie`。所以要想`cookie`在多个二级域名中共享，需要设置`domain`为顶级域名，这样就可以在所有二级域名里面获得到这个`cookie`的值了。

顶级域名只能获取到`domain`设置为顶级域名的`cookie`，其他domain设置为二级域名的无法获取。

- Path

为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie

- Expires

字段为此cookie`超时时间`。若设置其值为一个时间，那么当到达此时间后，此cookie失效。不设置的话`默认值是Session`，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。

```javascript
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```
当为`会话性 Cookie` 的时候，值保存在客户端内存中，并在用户关闭浏览器时失效。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样。

与会话性 Cookie 相对的是`持久性 Cookie`，持久性 Cookies 会保存在用户的硬盘中，直至过期或者清除 Cookie。这里值得注意的是，设定的日期和时间只与客户端相关，而不是服务端。

- Max-Age

`Max-Age `用于设置在 Cookie 失效之前需要经过的`秒数`。比如：

```javascript
Set-Cookie: id=a3fWa; Max-Age=604800;
```
`Max-Age` 可以为正数、负数、甚至是 0。

如果 max-Age 属性为`正数`时，浏览器会将其持久化，即写到对应的 Cookie 文件中。

当 max-Age 属性为`负数`，则表示该 Cookie 只是一个会话性 Cookie。

当 max-Age 为 `0 `时，则会立即删除这个 Cookie。

假如 `Expires `和 `Max-Age` 都存在，`Max-Age `优先级更高。


- Size
	此cookie大小

- HttpOnly

若此属性为`true`，则只有在http请求头中会带有此cookie的信息，而不能通过`document.cookie`来访问此cookie。

- Secure 
	设置是否只能通过https来传递此条cookie。使用 `HTTPS `安全协议，可以保护 Cookie 在浏览器和 Web 服务器间的传输过程中不被窃取和篡改。

- SameSite 
(	3月份比较火的一个问题，下面会参考别人文章进行整理）

### 11、预测最近面试会考 Cookie 的 SameSite 属性

<a href="https://segmentfault.com/a/1190000022055666">参考文章出处</a>

**前言**

2 月份发布的 Chrome 80 版本中默认屏蔽了第三方的 Cookie，在灰度期间，就导致了阿里系的很多应用都产生了问题，为此还专门成立了小组，推动各 BU 进行改造，目前阿里系基本已经改造完成。所有的前端团队估计都收到过通知，也着实加深了一把大家对于 Cookie 的理解，所以很可能就此出个面试题，而即便不是面试题，当问到 HTTP 相关内容的时候，不妨也扯到这件事情来，一能表明你对前端时事的跟进，二还能借此引申到前端安全方面的内容，为你的面试加分。

**HTTP**

一般我们都会说 “HTTP 是一个`无状态的协议`”，不过要注意这里的 HTTP 其实是指 HTTP 1.x，而所谓无状态协议，简单的理解就是即使同一个客户端连续两次发送请求给服务器，服务器也`识别不出这是同一个客户端发送的请求`，这导致的问题就比如你加了一个商品到购物车中，但因为识别不出是同一个客户端，你刷新下页面就没有了……

**Cookie**

为了解决 HTTP 无状态导致的问题，后来出现了 Cookie。不过这样说可能会让你产生一些误解，首先无状态并不是不好，有优点，但也会导致一些问题。而 Cookie 的存在也不是为了解决通讯协议无状态的问题，只是为了解决客户端与服务端会话状态的问题，这个状态是指`后端服务的状态而非通讯协议的状态`。

**Cookie 的设置**

那 Cookie 是怎么设置的呢？简单来说就是

 1. 客户端发送 HTTP 请求到服务器
 2. 当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段
 3. 浏览器收到响应后保存下 Cookie
 4. 之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。


### 12、SameSite
SameSite 是最近非常值得一提的内容，因为 2 月份发布的 Chrome80 版本中默认屏蔽了第三方的 Cookie，这会导致阿里系的很多应用都产生问题，为此还专门成立了问题小组，推动各 BU 进行改造。

**作用**

SameSite 属性可以让` Cookie `在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（`CSRF`）。

**属性值**

- `Strict`仅允许一方请求携带 Cookie，即浏览器将只发送`相同站点`请求的 Cookie，即当前网页 URL 与请求目标 `URL 完全一致`。
- `Lax`允许部分第三方请求携带 Cookie
- `None`无论是否跨站都会发送 Cookie

之前默认是` None` 的，Chrome80 后默认是 `Lax`。


**跨域和跨站**


首先要理解的一点就是`跨站`和`跨域`是不同的。同站(`same-site`)/跨站(`cross-site`)」和第一方(`first-party`)/第三方(`third-party`)是等价的。但是与浏览器同源策略（`SOP`）中的「同源(`same-origin`)/跨域(`cross-origin`)」是完全不同的概念。

同源策略的同源是指两个 URL 的协议/主机名/端口一致。例如，`https://www.taobao.com/pages/...`，它的协议是` https`，主机名是`www.taobao.com`，端口是 `443`。


同源策略作为浏览器的安全基石，其「同源」判断是比较严格的，相对而言，`Cookie`中的「同站」判断就比较宽松：只要两个 URL 的 eTLD+1 相同即可，不需要考虑协议和端口。其中，eTLD 表示有效顶级域名，注册于 Mozilla 维护的公共后缀列表（Public Suffix List）中，例如，.com、.co.uk、.github.io 等。eTLD+1 则表示，有效顶级域名+二级域名，例如taobao.com等

举几个例子，`www.taobao.com`和`www.baidu.com`是跨站，`www.a.taobao.com`和`www.b.taobao.com`是同站，`a.github.io`和`b.github.io`是跨站(注意是跨站)。

**改变**

接下来看下从 None 改成 Lax 到底影响了哪些地方的 Cookies 的发送？直接来一个图表：


![](https://img-blog.csdnimg.cn/20200328135320693.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
从上图可以看出，对大部分 web 应用而言，Post 表单，iframe，AJAX，Image 这四种情况从以前的跨站会发送三方 Cookie，变成了不发送。


`Post表单`：应该的，学 CSRF 总会举表单的例子。

`iframe`：iframe 嵌入的 web 应用有很多是跨站的，都会受到影响。

`AJAX`：可能会影响部分前端取值的行为和结果。

`Image`：图片一般放 CDN，大部分情况不需要 Cookie，故影响有限。但如果引用了需要鉴权的图片，可能会受到影响。

除了这些还有 script 的方式，这种方式也不会发送 Cookie，像淘宝的大部分请求都是 `jsonp`，如果涉及到跨站也有可能会被影响。

**问题**

我们再看看会出现什么的问题？举几个例子：

- 天猫和飞猪的页面靠请求淘宝域名下的接口获取登录信息，由于 Cookie 丢失，用户无法登录，页面还会误判断成是由于用户开启了浏览器的“禁止第三方 Cookie”功能导致而给与错误的提示
- 淘宝部分页面内嵌支付宝确认付款和确认收货页面、天猫内嵌淘宝的登录页面等，由于 Cookie 失效，付款、登录等操作都会失败
- 阿里妈妈在各大网站比如今日头条，网易，微博等投放的广告，也是用 iframe 嵌入的，没有了 Cookie，就不能准确的进行推荐
- 一些埋点系统会把用户 id 信息埋到 Cookie 中，用于日志上报，这种系统一般走的都是单独的域名，与业务域名分开，所以也会受到影响。
- 一些用于防止恶意请求的系统，对判断为恶意请求的访问会弹出验证码让用户进行安全验证，通过安全验证后会在请求所在域种一个Cookie，请求中带上这个Cookie之后，短时间内不再弹安全验证码。在Chrome80以上如果因为Samesite的原因请求没办法带上这个Cookie，则会出现一直弹出验证码进行安全验证。
- 天猫商家后台请求了跨域的接口，因为没有 Cookie，接口不会返回数据
- ……

如果不解决，影响的系统其实还是很多的……

解决方案就是`设置 SameSite 为 none`。


### 13、doctype 的作用？严格模式与混杂模式如何区分？它们有何意义？


DOCTYPE是`document type (文档类型)` 的缩写。 < !DOCTYPE > 声明位于文档的最前面，处于标签之前，它不是html标签。主要作用是告诉浏览器的解析器使用哪种HTML规范或者XHTML规范来解析页面。


`严格模式`和`混杂模式`都是浏览器的呈现模式，浏览器究竟使用混杂模式还是严格模式呈现页面与网页中的`DTD`（文件类型定义）有关，DTD里面包含了文档的规则。比如：loose.dtd

- 严格模式：又称标准模式，是指浏览器按照`W3C`标准来解析代码，呈现页面
- 混杂模式：又称为怪异模式或者兼容模式，是指浏览器按照自己的方式来解析代码，使用一种比较宽松的向后兼容的方式来显示页面。


### 14、HTML5 为什么只需写< !DOCTYPE HTML> ?

HTML5不基于` SGML` （标准通用标记语言），因此不需要对`DTD`（ DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。）进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。

而HTML4.01基于`SGML`,所以需要对`DTD`进行引用，才能告知浏览器文档所使用的文档类型。


### 15、WEB标准以及W3C标准是什么?
标签闭合、标签小写、不乱嵌套、使用外链`css`和`js`、结构行为表现的分离

### 16、行内元素有哪些？块级元素有哪些？空（void）元素有哪些？

行内元素不可以设置宽高，不独占一行
块级元素可以设置宽高，独占一行

- 行内：

```javascript
<a>、<abbr>、<acronym>、<b>、<bdo>、<big>、<br>、<cite>、<code>、<dfn>、<em>、<i>、<img>、<input>、<kbd>、<label>、<q>、<samp>、<select>、<small>、<span>、<strong>、<sub>、<sup>、<textarea>、<tt>、<var>
```
- 块级：

```javascript
<address>、<caption>、<dd>、<div>、<dl>、<dt>、<fieldset>、<form>、<h1>、<h2>、<h3>、<h4>、<h5>、<h6>、<hr>、<legend>、<li>、<noframes>、<noscript>、<ol>、<ul>、<p>、<pre>、<table>、<tbody>、<td>、<tfoot>、<th>、<thead>、<tr>
```

- 空：

常见的：

```javascript
<br> <hr> <img> <input> <link> <meta>
```

鲜为人知的：

```javascript
<area> <base> <col> <command> <embed> <link> <meta><keygen> <param> <source> <track> <wbr>
```


### 17、xhtml和html有什么区别?

- 功能上的差别

	主要是XHTML可兼容各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页

- 书写习惯的差别

	XHTML 元素必须被正确地嵌套，闭合，区分大小写，文档必须拥有根元素


### 18、iframe有那些缺点？

- iframe会阻塞主页面的`Onload`事件
- 搜索引擎的检索程序无法解读这种页面，不利于`SEO`
-` iframe`和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
- 使用`iframe`之前需要考虑这两个缺点。如果需要使用`iframe`，最好是通过`javascript`动态给iframe添加`src`属性值，这样可以绕开以上两个问题

### 19、网页验证码是干嘛的，是为了解决什么安全问题

- 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水
- 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试


### 20、title与h1的区别、b与strong的区别、i与em的区别？
- `title`属性没有明确意义只表示是个标题，`H1`则表示层次明确的标题，对页面信息的抓取也有很大的影响;
- `strong`是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时，`<strong>` 会重读，而`<B>`是展示强调内容。
- `i `内容展示为斜体，`em`表示强调的文本；
