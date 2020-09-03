// 请问变量a会被GC吗
function test(){
  var a = 1;
  return function(){
      eval("");
  }
}
test();  
