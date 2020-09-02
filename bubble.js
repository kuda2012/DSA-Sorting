function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

module.exports = bubbleSort;
