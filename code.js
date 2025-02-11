function search(list, element, low, high) {
  if (low > high) {
    // Element not in array
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (list[mid] === element) {
    // Element in array --> return position
    return mid;
  }

  if (list[mid] > element) {
    // Element in left half
    let new_high = mid - 1;

    return search(list, element, low, new_high);
  } else {
    // Element in right half
    let new_low = mid + 1;

    return search(list, element, new_low, high);
  }
}

function binarySearch(list, element) {
  let low = 0;
  let high = list.length - 1;

  return search(list, element, low, high);
}
