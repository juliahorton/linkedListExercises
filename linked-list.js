/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
    }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else  {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {

    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--
      return current.val;
    }

    while (current.next){
      if (current.next.next === null) {
        let last = current.next;
        current.next = null;
        this.tail = current;
        this.length--
        return last.val
      } 
      current = current.next
    }
  }

  /** shift(): return & remove first item. */

  shift() {

    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--
      return current.val;
    }

    this.head = this.head.next;
    this.length--
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    let curr = this.head;

    if (idx === 0) return curr.val;

    let nextIdx = 0;

    while (curr.next) {
      nextIdx++;
      if (idx === nextIdx) return curr.next.val;
      curr = curr.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    let curr = this.head;
    let nextIdx = 0;

    if (idx === 0) curr.val = val;

    else {
      while (curr.next) {
        nextIdx++;
        if (idx === nextIdx) {
          curr.next.val = val;
          return
        }
        curr = curr.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (!this.head) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length++
      return
    }

    let lastIdx = this.length - 1;

    if (idx > lastIdx) {
      let curr = this.tail;
      while (idx > (lastIdx + 1)) {
        const newEmptyNode = new Node(0,0);
        curr.next = newEmptyNode;
        this.tail = newEmptyNode;
        curr = curr.next;
        lastIdx++;
        this.length++;
      }
      const newNode = new Node(val);
      curr.next = newNode;
      this.tail = newNode;
      this.length++
      return
    }

    else {
      let curr = this.head;
      let nextIdx = 0;
      while (curr.next) {
        nextIdx++;
        if (idx === nextIdx) {
          const newNode = new Node(val, curr.next);
          curr.next = newNode;
          this.length++;
          return
        }
        curr = curr.next;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx === 0 && this.length === 1) return this.pop()
    
    let lastIdx = this.length - 1;
    if (idx > lastIdx) return null

    else {

      let curr = this.head;
      let nextIdx = 1;
      while (curr.next) {
        if (idx === nextIdx) {
          let removed = curr.next;
          curr.next = curr.next.next;
          this.length--;
          return removed
        }
        curr = curr.next;
        nextIdx++;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {

    let sum = 0;
    let count = 0;

    if (!this.head) return 0

    for (let i=0; i < this.length; i++){
      let val = this.getAt(i);
      sum += val;
      count++;
    }
    return sum / count;
  }
}

module.exports = LinkedList;
