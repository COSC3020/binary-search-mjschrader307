function search(list, element, low, high) {
  // Element not in array case
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (list[mid] === element) return mid;

  // Recursive case

  if (list[mid] > element) {
    // Element in left half
    return search(list, element, low, mid - 1);
  } else if (list[mid] < element) {
    // Element in right half
    return search(list, element, mid + 1, high);
  }
}

function binarySearch(list, element) {
  let low = 0;
  let high = list.length - 1;

  return search(list, element, low, high);
}
