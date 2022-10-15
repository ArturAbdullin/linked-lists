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

/**
 *
 * @param {number[]} array
 */
function sortList(array) {
  const list = SLList.fromArray(array);
  list.sort();
  return list;
}

/**
 *
 * @param {number[]} array
 */
function reverseList(array) {
  const list = SLList.fromArray(array);
  list.reverse();
  return list;
}

/**
 * @param {number[]} array 
 */
function isListAPalindrome(array) {
  const list = SLList.fromArray(array);
  return list.isPalindrome();
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

test("check sort method", () => {
  expect(sortList([4, 2, 1, 0, 1, 6, 7]).toArray()).toStrictEqual([
    0, 1, 1, 2, 4, 6, 7,
  ]);
});

test("check reverse method", () => {
  expect(reverseList([3, 2, 1]).toArray()).toStrictEqual([1, 2, 3]);
});

test("check isPalindrome method", () => {
  expect(isListAPalindrome([1,2,2,1])).toBe(true);
  expect(isListAPalindrome([1,0,0,1,0,0,1])).toBe(true);
  expect(isListAPalindrome([1,2,3])).toBe(false);
})