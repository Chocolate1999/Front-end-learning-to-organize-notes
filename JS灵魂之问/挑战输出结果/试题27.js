var name = 'global'
function Person(name) {
  this.name = name
  console.log(this)
  this.sayName = () => {
    console.log(this.name)
  }
}
const personA = new Person('aaa')
const personB = new Person('bbb')
personA.sayName()
personB.sayName()
