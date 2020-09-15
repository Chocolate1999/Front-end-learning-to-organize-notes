/* 闭包 */

// function test1(){
//   function test2(){
//     var b = 2;
//     console.log(a);
//   }
//   var a = 1;
//   return test2;
// }
// var c = 3;
// var test3 = test1();
// test3();

// function test(){
//   var n = 100;
//   function add(){
//     n++;
//     console.log(n);
//   }
//   function reduce(){
//     n--;
//     console.log(n);
//   }
//   return [add,reduce];
// }
// var arr = test();
// arr[0]();
// arr[1]();

// // 面包售卖进货管理
// function breadMgr(num){
//   var breadNum = num || 10;
//   // 进货面包，每次进10个
//   function supply(){
//     breadNum += 10;
//     console.log(breadNum);
//   }
//   // 售卖面包，每次卖一个
//   function sale(){
//     breadNum--;
//     console.log(breadNum);
//   }
//   return [supply,sale];
// }
// var breadMgr = breadMgr(50);
// breadMgr[0]();
// breadMgr[1]();
// breadMgr[1]();
// breadMgr[1]();


