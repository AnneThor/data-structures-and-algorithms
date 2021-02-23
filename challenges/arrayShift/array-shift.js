module.exports = function insertShiftArray(arr, val) {
  if (!arr.length) {
    return arr;
  }
  if (arr.length === 1) {
    arr[1] = val;
    return arr;
  }
  let midIndex = Math.ceil(arr.length/2);
  let temp = arr[midIndex];
  arr[midIndex] = val;
  let tempTwo = arr[midIndex+1];
  for (let i=midIndex+1; i<arr.length; i++) {
    tempTwo = arr[i];
    arr[i]=temp;
    temp=tempTwo;
  }
  arr[arr.length] = temp
  return arr
}
