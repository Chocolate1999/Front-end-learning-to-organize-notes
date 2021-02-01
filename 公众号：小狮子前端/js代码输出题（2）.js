function foo1(
  x1 = 11,
  y1 = function(){
    x1 = 2;
    console.log('a:' +x1); // 2
  }
)
{
  var x1;
  console.log('b:'+x1); //  11
  y1();
  console.log('c:'+x1); // 11
  x1 = 3;
  console.log('d:'+x1); // 3
}
console.log('window:'+window.x1); // undefined
foo1();