## CSS 工程化

关注几个事情：组织、优化、构建、维护

### PostCSS
- 将 CSS 解析成 CSS，和预处理器没太多区别。
- 本身只有解析能力
- 各种神奇的特性全靠插件
- 目前至少有200多个插件

常见：
- import 模块合并
- autoprefixer 自动加前缀
- cssnano 压缩代码
- cssnext 使用CSS新特性
- precss 变量、mixin、循环等

![](https://img-blog.csdnimg.cn/2020053009080083.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### PostCSS插件的使用

全局安装 `postcss-cli`

```css
npm install postcss-cli -g
```

在 `postcss.config.js` 文件进行配置
![](https://img-blog.csdnimg.cn/2020053009210982.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### cssnext

![](https://img-blog.csdnimg.cn/20200530092327268.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### precss
- 变量（使用和 sass 几乎一样）
- 条件（if）
- 循环
- Mixin Extend
- import
- 属性值引用


### gulp-postcss

PostCSS 支持的构建工具
- CLI命令行工具
- webpack postcss-loader
- Gulp gulp-postcss
- Grunt grunt-postcss
- Rollup rollup-postcss
- ...


![](https://img-blog.csdnimg.cn/20200530093431237.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
### webpack

![](https://img-blog.csdnimg.cn/20200530094124374.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)
- JS是整个应用的核心入口
- 一切资源均由JS管理依赖
- 一切资源均由webpack打包
