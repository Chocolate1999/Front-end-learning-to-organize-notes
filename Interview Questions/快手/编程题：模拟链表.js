/* 
class Linkedlist class Node [1,2,3,4,5]
let linkedlist = new Linkedlist([1,2,3,4,5]) 
linkedlist.search(5) //4
linkedlist.add(6) //1,2,3,4,5,6,
linkedlist.update(0, 7) //7,2,3,4,5,6
linkedlist.delete(1) //7,3,4,5,6
写一个类，把一个数组转换成链表，并且能对这个链表实现增删改查等方法。
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class Linkedlist {
  constructor(arr) {
    const [head, tail] = this.arrToList(arr)
    this.head = head
    this.tail = tail
    this.len = arr.length
  }
  arrToList(arr) {
    if (arr.length === 0) return null
    let head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i])
      cur = cur.next
    }
    return [head, cur]
  }
  search(val) {
    let cur = this.head
    let cnt = 0
    while (cur) {
      if (cur.val === val) {
        return cnt
      }
      ++cnt
      cur = cur.next
    }
    return -1
  }
  add(val) {
    if (this.len === 0) {
      this.head = new ListNode(val)
      this.tail = this.head
      this.len++
      return
    }
    let node = new ListNode(val)
    this.tail.next = node
    this.tail = node
    this.len++
    this.print()
  }
  update(idx, val) {
    if (this.len === 0 || idx >= this.len || idx < 0) return -1
    let cur = this.head
    while (idx > 0) {
      cur = cur.next
      idx--
    }
    cur.val = val
    this.print()
  }
  delete(idx) {
    if (this.len === 0 || idx >= this.len || idx < 0) return -1
    let cur = this.head
    while (idx > 0) {
      cur = cur.next
      idx--
    }
    if(cur.next === this.tail) this.tail = cur
    cur.val = cur.next.val
    cur.next = cur.next.next
    this.len--
    this.print()
  }
  print(){
    let arr = []
    let cur = this.head
    for(let i=0;i<this.len;i++){
      arr.push(cur.val)
      cur = cur.next
    }
    console.log(arr)
  }
}

let linkedlist = new Linkedlist([1,2,3,4,5]) 
console.log(linkedlist.search(5)) //4
linkedlist.add(6) //1,2,3,4,5,6,
linkedlist.update(0, 7) //7,2,3,4,5,6
linkedlist.delete(1) //7,3,4,5,6