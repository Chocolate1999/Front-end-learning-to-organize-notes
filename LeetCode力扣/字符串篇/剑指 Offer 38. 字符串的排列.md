输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let res = new Set()
  let vis = []
  let dfs = (t) => {
    if(t.length === s.length){
      return res.add(t)
    }
    for(let i=0;i<s.length;i++){
      if(vis[i]) continue
      vis[i] = true
      dfs(t+s[i])
      vis[i] =false
    }
  }
  dfs('')
  return [...res]
};
```
