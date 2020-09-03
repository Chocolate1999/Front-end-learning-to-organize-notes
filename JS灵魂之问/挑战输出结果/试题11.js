function f(){
  return f;
}
console.log(new f())
console.log(new f() instanceof f);
