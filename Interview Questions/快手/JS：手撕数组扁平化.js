/* 将数组扁平化，并需要扁平化维度 */


let arr = [1, 9, [4, [6, 7], 8], [9, 6], [1, [3, 2, [5] ] ] ]

let flatDeep = (arr,cnt) => {
  if(cnt>0){
    return arr.reduce((pre,cur)=>{
      if(Array.isArray(cur)){
        return [...pre,...flatDeep(cur,cnt-1)]
      }else{
        return [...pre,cur]
      }
    },[])
  }else{
    return arr.slice()
  }
}
console.log(flatDeep(arr,2))