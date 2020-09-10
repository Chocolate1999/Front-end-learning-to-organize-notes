/* 编程题：将数组转成树形结构的对象 */

// 挑战大厂第1篇-树结构互转
// https://segmentfault.com/a/1190000022277413

var locationList = [
  { id: 0, name: '中国' },
  { id: 1, pid: 0, name: '北京市' },
  { id: 2, pid: 1, name: '昌平区' },
  { id: 3, pid: 1, name: '海淀区' },
]
let trans = (list) => {
  let mp = []
  let tree = []
  let parentNode
  list.forEach(item=>{
    mp[item.id] = item
  })
  list.forEach(item=>{
    if(!mp[item.pid]){
      tree = item
    }
    parentNode = mp[item.pid]
    if(parentNode){
      (parentNode.sub || (parentNode.sub = [])).push(item)
    }
  })
  tree.sub = parentNode
  return tree
}

let res = trans(locationList)
console.log(res)

/* 树形结构转换数组 */
let bfs = (list) =>{
  let res = []
  let queue = list
  while(queue.length){
    let size = queue.length
    while(size--){
      let node = queue.shift()
      let obj = {
        id: node.id,
        pid: node.pid,
        name: node.name
      }
      res.push(obj)
      let sub = node.sub
      if(sub){
        sub.forEach(item=>{
          queue.push(item)
        })
      }
    }
  }
  return res
}
// console.log(bfs(res))
