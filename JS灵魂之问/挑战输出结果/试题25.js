// 下面代码中 a 在什么情况下会打印 1
// var a = ?;
// if(a == 1 && a== 2 && a== 3){
//  	console.log(1);
// }


// var a = 0
// Object.defineProperty(window,'a',{
//   get(){
//     return this.a++
//   }
// })
// if(a == 1 && a== 2 && a== 3){
//  	console.log(1);
// }

var a = [1,2,3]
a.join = a.shift()
if(a == 1 && a== 2 && a== 3){
 	console.log(1);
}