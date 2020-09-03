/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    str = str.trim();
    let ans = parseInt(str);
    if(isNaN(ans)) return 0;
    let minx = Math.pow(-2,31);
    let maxx = Math.pow(2,31)-1;
    if(ans < minx) return minx;
    else if(ans > maxx) return maxx;
    return ans;
};