let arr = ['Chocolate', 'zhlll', 'lionkk'];

let itKeys = arr.keys();
let itVals = arr.values();
let itEntries = arr.entries();

for (let it of itKeys) {
  console.log(it);
}
// 0
// 1
// 2
for (let it of itVals) {
  console.log(it);
}
// Chocolate
// zhlll
// lionkk
for (let it of itEntries) {
  console.log(it);
}
// [ 0, 'Chocolate' ]
// [ 1, 'zhlll' ]
// [ 2, 'lionkk' ]