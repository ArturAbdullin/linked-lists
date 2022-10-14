const SLList = require("./SLList");

/**
 * Initialize a singly-linked list from an array
 * @param {number[]} array
 */
function initSLListFromArray(array) {
  return SLList.fromArray(array);
}

test("check initialization", () => {
  expect(initSLListFromArray([3, 1, 2, 0, 1]).toArray()).toStrictEqual([3, 1, 2, 0, 1]);
});
