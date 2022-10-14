const SLListNode = require("./SLListNode");

class SLList {
  /** @type {number} */
  #size;
  /** @type {SLListNode} */
  #head;
  /** @type {SLListNode} */
  #tail;
  constructor() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
  }

  /**
   * Create a singly-linked list from an array
   * @param {number[]} array
   * @returns {SLList} a new singly-linked list
   */
  static fromArray(array) {
    const sllist = new SLList();
    for (const num of array) {
      sllist.addNode(num);
    }
    return sllist;
  }

  /**
   * Merge two sorted lists
   * @param {SLList} list1
   * @param {SLList} list2
   * @returns {SLList} merged singly-linked list
   */
  static mergeSorted(list1, list2) {
    const list = new SLList();
    let [head1, head2] = [list1.head, list2.head];
    while (head1 && head2) {
      if (head1.value < head2.value) {
        list.addNode(head1.value);
        head1 = head1.next;
      } else {
        list.addNode(head2.value);
        head2 = head2.next;
      }
    }
    
    if (head1) {
      while (head1) {
        list.addNode(head1.value);
        head1 = head1.next;
      }
    } else if (head2) {
      while (head2) {
        list.addNode(head2.value);
        head2 = head2.next;
      }
    }

    return list;
  }

  /**
   *
   * @param {number} value
   * @returns {SLListNode} new list tail
   */
  addNode(value) {
    this.#size++;
    if (this.#size === 1) {
      this.#head = new SLListNode(value);
      this.#tail = this.#head;
      return this.#tail;
    }

    this.#tail.next = new SLListNode(value);
    this.#tail = this.#tail.next;
    return this.#tail;
  }

  /**
   * Create an array from a silngly-linked list
   * @returns {number[]} array
   */
  toArray() {
    const array = [];
    let currNode = this.#head;
    while (currNode) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#size;
  }
}

module.exports = SLList;
