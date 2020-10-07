function createIterator(arr) {
  var i = 0;
  return {
    next() {
      var done = (i >= arr.length);
      var value = !done ? arr[i++] : undefined;
      return {
        done,
        value
      }
    }
  }
}
var iterator = createIterator([11, 22, 33]);
console.log(iterator.next()); // { done: false, value: 11 }
console.log(iterator.next()); // { done: false, value: 22 }
console.log(iterator.next()); // { done: false, value: 33 }
console.log(iterator.next()); // { done: true, value: undefined }