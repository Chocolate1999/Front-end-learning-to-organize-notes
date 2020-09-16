/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(s) {
  let n = s.length
  let left = [];
  let right = [];
  let tmp = 0;
  for(let i=0;i<n;i++){
    if(s[i] == 'R'){
      tmp = n;
    }else if(s[i] == 'L'){
      tmp = 0;
    }else{
      tmp = Math.max(0,tmp-1);
    }
    right[i] = tmp;
  }
  tmp = 0;
  for(let i=n-1;i>=0;i--){
    if(s[i] == 'L'){
      tmp = n;
    }else if(s[i] == 'R'){
      tmp = 0;
    }else{
      tmp = Math.max(0,tmp-1);
    }
    left[i] = tmp;
  }
  // for(let i=0;i<n;i++){
  //   console.log(left[i],right[i]);
  // }
  let res = [];
  for(let i=0;i<n;i++){
    if(left[i] == right[i]){
      res[i] = '.'
    }else if(left[i] > right[i]){
      res[i] = 'L'
    }else{
      res[i] = 'R'
    }
  }
  return res.join('')
};

let str = '.L.R...LR..L..'
console.log(pushDominoes(str))