let fun = function () {
  var a = 0;
  return function () {
    console.log(++a);
  }
}

fun()();