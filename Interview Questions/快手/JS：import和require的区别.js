/* import和require的区别 */

/* 
Node中没搞明白require和import，你会被坑的很惨
https://imweb.io/topic/582293894067ce9726778be9

require ，import的区别
https://www.cnblogs.com/libin-1/p/7127481.html
*/

/* 
import的语法跟require不同，而且import必须放在文件的最开始，且前面不允许有其他逻辑代码，这和其他所有编程语言风格一致。

require理论上可以运用在代码的任何地方，甚至不需要赋值给某个变量之后再使用
你在使用时，完全可以忽略模块化这个概念来使用require，仅仅把它当做一个node内置的全局函数，它的参数甚至可以是表达式：
require(process.cwd() + '/a');

*/

/* 
它是编译时的（require是运行时的），它必须放在文件开头，而且使用格式也是确定的，不容置疑。
它不会将整个模块运行后赋值给某个变量，而是只选择import的接口进行编译，这样在性能上比require好很多。

从理解上，require是赋值过程，import是解构过程，当然，require也可以将结果解构赋值给一组变量，但是import在遇到default时，
和require则完全不同：var $ = require('jquery');和import $ from 'jquery'是完全不同的两种概念。
*/

/* 
上面完全没有回答“改用require还是import？”这个问题，因为这个问题就目前而言，根本没法回答，
因为目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，
import语法会被转码为require。这也是为什么在模块导出时使用module.exports，在引入模块时使用import仍然起效，因为本质上，import会被转码为require去执行。
*/