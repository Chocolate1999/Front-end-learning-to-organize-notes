var o = {
  a: 10,
  b: {
    a: 12,
    fn: function () {
      console.log(this.a);
      console.log(this);
    },
  },
};

var j = o.b.fn;
j();
o.b.fn();