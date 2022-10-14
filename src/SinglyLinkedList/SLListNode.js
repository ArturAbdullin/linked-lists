/**
 * Creates a new singly-linked list node
 */
 class SLListNode {
  /**
   * @param {number} value 
   * @param {SLListNode | null} next list node
   */
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = SLListNode;
