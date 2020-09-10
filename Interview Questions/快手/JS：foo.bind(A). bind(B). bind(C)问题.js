/* foo.bind(A). bind(B). bind(C)问题 */

/*
bind是永久绑定，不会更改指向


大概意思是说fn.bind()返回的是函数是bound function。后来去看了规范，找到了这句话：If Target is an arrow function or a bound function then the thisArg passed to this method will not be used by subsequent calls to F.
算是找到源头了
http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.bind

*/