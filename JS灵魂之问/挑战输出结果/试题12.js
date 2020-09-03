var foo = {
  bar: function(){
      return this.baz;
  },
  baz:1
}
console.log(typeof (f=foo.bar)());
