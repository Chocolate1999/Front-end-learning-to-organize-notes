/* 一行中有 N 张多米诺骨牌，我们将每张多米诺骨牌垂直竖立。

在开始时，我们同时把一些多米诺骨牌向左或向右推。

每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。

同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

如果同时有多米诺骨牌落在一张垂直竖立的多米诺骨牌的两边，由于受力平衡， 该骨牌仍然保持不变。

就这个问题而言，我们会认为正在下降的多米诺骨牌不会对其它正在下降或已经下降的多米诺骨牌施加额外的力。

给定表示初始状态的字符串 "S" 。如果第 i 张多米诺骨牌被推向左边，则 S[i] = 'L'；如果第 i 张多米诺骨牌被推向右边，则 S[i] = 'R'；如果第 i 张多米诺骨牌没有被推动，则 S[i] = '.'。

返回表示最终状态的字符串。

 */

function Solution(s) {
  let n = s.length;
  let tmp = 0;
  let left = [];
  let right = [];
  for(let i=0;i<n;i++){
    if(s[i] == 'R'){
      tmp = n;
    }else if(s[i] == 'L'){
      tmp = 0;
    }else{
      tmp = Math.max(0,tmp-1);
    }
    left[i] = tmp;
  }
  tmp = 0;
  for(let i=n-1;i>=0;i--){
    if(s[i] == 'R'){
      tmp = 0;
    }else if(s[i] == 'L'){
      tmp = n;
    }else{
      tmp = Math.max(0,tmp-1);
    }
    right[i] = tmp;
  }
  // for(let i=0;i<n;i++){
  //   console.log(left[i],right[i]);
  // }
  let res = [];
  for(let i=0;i<n;i++){
    if(left[i] == right[i]){
      res[i] = '.';
    }else if(left[i] > right[i]){
      res[i] = 'R';
    }else{
      res[i] = 'L';
    }
  }
  return res.join('')
  // console.log(res.join(''))
}
let str = '.L.R...LR..L..'
console.log(Solution(str)); // LL.RR.LLRRLL..