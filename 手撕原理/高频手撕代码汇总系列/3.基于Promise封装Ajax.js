/*
思路：

返回一个新的Promise实例

创建HMLHttpRequest异步对象

调用open方法，打开url，与服务器建立链接（发送前的一些处理）

监听Ajax状态信息

如果xhr.readyState == 4（表示服务器响应完成，可以获取使用服务器的响应了）

xhr.status == 200，返回resolve状态
xhr.status == 404，返回reject状态
xhr.readyState !== 4，把请求主体的信息基于send发送给服务器
*/

function ajax(methods,url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else if (xhr.status === 404) {
          reject(new Error('404 Not Found'));
        }
      } else {
        reject('请求失败!');
      }
    }
    xhr.send();
  })
}


/* 参考大佬的get 和 post 写法 */

/*  
function getJSON (url) {

    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this)
                } else {
                    var resJson = { code: this.status, response: this.response }
                    reject(resJson, this)
                }
            }
        }

        xhr.send()
    })

}
*/

/* 
function postJSON(url, data) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText), this)
                } else {
                    var resJson = { code: this.status, response: this.response }
                    reject(resJson, this)
                }
            }
        }

        xhr.send(JSON.stringify(data))
    })
}
*/