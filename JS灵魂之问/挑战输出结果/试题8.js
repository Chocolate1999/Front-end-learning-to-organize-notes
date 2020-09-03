var company = {
  address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
//delete company.address
console.log(yideng.address);
console.log(yideng)


// var output = (function(x){
//   delete x;
//   return x;
// })(0);
// console.log(output);