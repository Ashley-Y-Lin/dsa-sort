"use strict";

/** merge: helper function for mergeSort, takes as input two sorted arrays,
 * returns a new array with values from both arrays sorted.
 *
 * O(n+m) time and space complexity
 */
function merge(arr1, arr2) {
  let outArr = [];

  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while ((arr1Pointer < arr1.length) && (arr2Pointer < arr2.length)) {
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      outArr.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else {
      outArr.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  while (arr1Pointer < arr1.length) {
    outArr.push(arr1[arr1Pointer]);
    arr1Pointer++;
  }

  while (arr2Pointer < arr2.length) {
    outArr.push(arr2[arr2Pointer]);
    arr2Pointer++;
  }

  return outArr;
}

/** mergeSort: uses mergeSort to sort the array
 *
 * O(n log n) runtime
*/

function mergeSort(unsortedArr) {
  if (unsortedArr.length === 1) {
    return unsortedArr;
  } else if (unsortedArr.length === 0) {
    return [];
  }

  const midpoint = Math.floor(unsortedArr.length / 2);
  const firstHalf = unsortedArr.slice(0, midpoint);
  const secondHalf = unsortedArr.slice(midpoint);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

module.exports = { merge, mergeSort };