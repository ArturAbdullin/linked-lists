const SLList = require("./SLList");

/**
 * Initialize a singly-linked list from an array
 * @param {number[]} array
 */
function initSLListFromArray(array) {
  return SLList.fromArray(array);
}

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function mergeSorted(arr1, arr2) {
  const list1 = SLList.fromArray(arr1);
  const list2 = SLList.fromArray(arr2);
  return SLList.mergeSorted(list1, list2);
}

test("check initialization", () => {
  expect(initSLListFromArray([3, 1, 2, 0, 1]).toArray()).toStrictEqual([
    3, 1, 2, 0, 1,
  ]);
});

test("check mergeSorted", () => {
  expect(mergeSorted([1, 3, 5], [2, 4, 6, 8]).toArray()).toStrictEqual([
    1, 2, 3, 4, 5, 6, 8,
  ]);
});
