let formatHump = (str) => {
  if (typeof str !== 'string') return false
  str = str.split('_')
  if (str.length > 1) {
    let ans = [...str.shift()]
    let res = str.map((item) => {
      return item[0].toUpperCase() + item.substr(1)
    })
    return ans.join('') + res.join('')
  }
}

console.log(formatHump('get_element_by_id'))
