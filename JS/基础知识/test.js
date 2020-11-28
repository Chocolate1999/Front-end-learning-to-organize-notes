function foo(){
  var a = 1;
  let b = 2;
  {
    console.log(a);
    console.log(b);
  }
}
foo(); 