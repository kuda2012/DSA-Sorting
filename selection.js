function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestSoFar;
    for (let j = i; j < arr.length; j++) {
      lowestSoFar = arr[i];
      if (arr[j] < lowestSoFar) {
        let temp = lowestSoFar;
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

module.exports = selectionSort;
