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

  /**
   * Sort this singly-linked list and return a new head
   * @returns {SLListNode} new head
   */
  sort() {
    this.#head = this.#mergeSort(this.#head);
    this.#updateTail();
  }

  /**
   * Reverse the singly-linked list
   */
  reverse() {
    let prevNode = null;
    let currNode = this.#head;
    while (currNode) {
      [currNode.next, currNode, prevNode] = [prevNode, currNode.next, currNode];
    }
    this.#head = prevNode;
    this.#updateTail();
  }

  /**
   * Check if the list is a palindrome
   * @returns {boolean}
   */
  isPalindrome() {
    const rightPartHead = this.#separateMiddle(this.#head);

    /** @param {SLListNode} node */
    function reversePart(node) {
      let prevNode = null;
      let currNode = node;

      while (currNode) {
        [currNode.next, prevNode, currNode] = [
          prevNode,
          currNode,
          currNode.next,
        ];
      }

      return prevNode;
    }

    let rightPartReversed = reversePart(rightPartHead);

    let dummy1 = this.#head;
    let dummy2 = rightPartReversed;
    let result = true;
    while (dummy1 && dummy2) {
      if (dummy1.value !== dummy2.value) {
        result = false;
        break;
      }
      [dummy1, dummy2] = [dummy1.next, dummy2.next];
    }

    rightPartReversed = reversePart(rightPartReversed);

    this.#updateTail();
    this.#tail.next = rightPartHead;
    this.#updateTail();

    return result;
  }

  /**
   * Update the tail node of the list (after sorting or reversing)
   */
  #updateTail() {
    this.#tail = this.#head;
    while (this.#tail && this.#tail.next) {
      this.#tail = this.#tail.next;
    }
  }

  /**
   * Separate a singly-linked list in the middle and return the right part
   * @param {SLListNode} head
   * @returns {SLListNode} the right part of the separation
   */
  #separateMiddle(head) {
    if (head == null || head.next == null) return head;
    /** @type {SLListNode | null} */
    let prev = null;
    let [slow, fast] = [head, head];
    while (fast && fast.next) {
      prev = slow;
      [slow, fast] = [slow.next, fast.next.next];
    }
    prev.next = null;
    return slow;
  }

  /**
   *
   * @param {SLListNode} head
   */
  #mergeSort(head) {
    if (!head || !head.next) return head;
    let leftPartHead = head;
    let rightPartHead = this.#separateMiddle(head);
    leftPartHead = this.#mergeSort(leftPartHead);
    rightPartHead = this.#mergeSort(rightPartHead);

    return this.#mergeAlreadySorted(leftPartHead, rightPartHead);
  }

  /**
   * Merge two sorted singly-linked list with the given head nodes
   * @param {SLListNode} head1
   * @param {SLListNode} head2
   * @returns {SLListNode} the head of the merged list
   */
  #mergeAlreadySorted(head1, head2) {
    const preHead = new SLListNode();
    let currNode = preHead;
    while (head1 && head2) {
      if (head1.value < head2.value) {
        [currNode.next, head1] = [head1, head1.next];
      } else {
        [currNode.next, head2] = [head2, head2.next];
      }
      currNode = currNode.next;
    }

    head1 ? (currNode.next = head1) : (currNode.next = head2);

    return preHead.next;
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
