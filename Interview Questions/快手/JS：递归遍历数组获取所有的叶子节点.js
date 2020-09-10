/* js递归遍历数组获取所有的叶子节点 */

var arr=[];

function queryList(json,arr) {
  for (var i = 0; i < json.length; i++) {
      var sonList = json[i].sonList;
      if (sonList.length == 0) {
          arr.push(json[i]);
      } else {
          queryList(sonList, arr);
      }
  }
  return arr;
}