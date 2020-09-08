```
var flatten = (arr) => arr.reduce((pre,cur) => pre.concat(Array.isArray(cur)? flatten(cur):cur ),[])

var flatten1 = (arr) => {
    return arr.reduce( (pre,cur) => pre.concat(Array.isArray(cur)? flatten(cur) : cur),[])
}

let arr = [1, [2, [3, [4, 5]]], 6]
console.log(flatten(arr))
```
