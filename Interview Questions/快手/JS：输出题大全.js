//  let a = 0;
 
// console.log(a); // 0
 
// console.log(b); // error: 暂时性死区 undefined
 
// let b = 0;
 
// console.log(c); // c(){}
 
// function c() {} 

 var a = [1, 2, 3, 4];
 
function set(a) {
  a = [5, 6, 7, 8];
  // console.log(a)
  console.log(this.a)
}
 
set(a);
 
console.log(a) 

/* var name = '123'

var obj = {
  name: '456',
  getName: function () {
    function printName() {
      console.log(this.name)
    }
    printName()
  },
}

obj.getName() // 123 */

// 更改使上述代码输出456 （使用箭头函数）
// var name = '123'

// var obj = {
//   name: '456',
//   getName: function () {
//     let printName = () => {
//       console.log(this.name)
//     }
//     printName()
//   },
// }

// obj.getName() // 456

// 更改使上述代码输出456 （手动保存this）

/* var name = '123'

var obj = {
  name: '456',
  getName: function () {
    let self = this
    function printName() {
      console.log(self.name)
    }
    printName()
  },
}

obj.getName() // 456 */


// 更改使上述代码输出456 （使用call）
// var name = '123'

// var obj = {
//   name: '456',
//   getName: function () {
//     function printName() {
//       console.log(this.name)
//     }
//     printName()
//   },
// }

// obj.getName() // 123  



//判断输出
/* console.log(0);

setTimeout(() => {
    console.log(1);
});

var data = {};
for (var i = 0; i < 10; i++) {
    data[i] = function () {
        console.log(i);
    }
}

var p = new Promise((res, rej) => {
    console.log(2);
    res(3);
});

p.then(data => {
    console.log(data);
});

console.log(data[8]()); */

// 0  2 10 3 1