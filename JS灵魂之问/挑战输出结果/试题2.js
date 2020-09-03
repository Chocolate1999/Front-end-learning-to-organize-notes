function side(arr) {
  arr[0] = arr[2];
}
function a(a, b, c = 3) {
  c = 10;
  //console.log(arguments)
  side(arguments);
  console.log(a,b,c)
  return a + b + c;
}
console.log(a(1, 1, 1))