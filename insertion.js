function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let smallerArr = arr.slice(0, i + 1);
      for (let j = 0; j < smallerArr.length; j++) {
        if (arr[i] < smallerArr[j]) {
          arr[j] = arr[i];
          arr[i] = smallerArr[j];
        }
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
