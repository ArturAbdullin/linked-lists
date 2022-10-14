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
   *
   * @param {number} node
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
