function jsonp(url,data,callback){
    data = {...data,callback};
    let arr = [];
    for(key in data){
        arr.push(key+ '=' +data[key]);
    }
    let script = document.createElement('script');
    script.src = url +'?'+arr.join('&');
    document.body.appendChild(script);
    return new Promise((resolve,reject)=>{
        try {
            resolve(data);
        } catch (e) {
            reject(e);
        }finally{
            document.body.removeChild(script);
            console.log(script);
        }
    })
}