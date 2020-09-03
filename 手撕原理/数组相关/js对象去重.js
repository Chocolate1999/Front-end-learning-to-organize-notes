let arr = [
    {id: 1, name: 'aa'},
    {id: 2, name: 'cc'},
    {id: 3, name: '前端开发'},
    {id: 1, name: 'web前端'}
];

// const mp = new Map(arr.map(item=>[item['id'],item]));
// console.log([...mp.values()]);

// const unique = (arr,key)=>{
//     return [...new Map(arr.map(item=>[item[key],item])).values()];
// }
// console.log(unique(arr,'id'));

const mp = new Map(arr.map(item=>{
    return [item['id'],item]
}))
console.log([...mp.values()])