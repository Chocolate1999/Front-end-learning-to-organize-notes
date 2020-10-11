import observe from './observe';
function observerArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    observe(arr[i]);
  }
}
export default observerArr;