let target = {
  a: 1,
  b: 2
}

let proxy = new Proxy(target, {
  get(target, prop) {
    return Reflect.get(target, prop);
  },
  set(target, prop, newVal) {
    const isOk = Reflect.set(target, prop, newVal);
    if(isOk){
      console.log('Set Successfully')
    }
  }
})
console.log(proxy.a);
proxy.b = 3;