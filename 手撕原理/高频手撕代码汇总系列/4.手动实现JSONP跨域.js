/* 
思路：

创建script标签
设置script标签的src属性，以问号传递参数，设置好回调函数callback名称
插入到html文本中
调用回调函数，res参数就是获取的数据
*/

function jsonp(url, data, callback) {
  data = [...data, callback]; //  整合数据和回调函数
  let arr = [];
  for (let key in data) {
    arr.push(key + '=' + data[key]); // 拼接参数
  }
  let params = arr.join('&');
  let script = document.createElement('script'); // 创建script标签
  script.src = url + '?' + params; // 以问好传递参数
  document.body.appendChild(script); // 插入到body中
  return new Promise((resolve, reject) => {
    try {
      resolve(data);
    } catch (err) {
      reject(err);
    } finally {
      document.body.removeChild(script);
    }
  })
}