Promise.race = function(promises){
    let arr = new Array(promises.length);
    return new Promise((resolve,reject)=>{
        promises.forEach((val,index)=>{
            Promise.resolve(val).then((val)=>{
                resolve(val);
            },err=>{
                reject(err);
            })
        })
    })
}