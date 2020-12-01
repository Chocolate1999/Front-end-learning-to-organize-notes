let arr = ['Chocolate', 'zhlll', 'lionkk'];

let newArr = arr.map(function (cur, index, arr) {
  console.log(cur, index, arr);
  return cur + index;
})
// Chocolate 0 [ 'Chocolate', 'zhlll', 'lionkk' ]
// zhlll 1 [ 'Chocolate', 'zhlll', 'lionkk' ]
// lionkk 2 [ 'Chocolate', 'zhlll', 'lionkk' ]

console.log(newArr)
// [ 'Chocolate0', 'zhlll1', 'lionkk2' ]