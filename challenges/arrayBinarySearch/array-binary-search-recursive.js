module.exports = (arr, val) => {
    let low = 0;
    let high = arr.length-1;
    return binaryExit(low, high, val, arr);
}

function binaryExit(low, high, val, arr) {
  let mid = Math.floor((low+high)/2);
  if (arr[mid] === val) {
    return mid;
  } else if (high <= low) {
    return -1;
  } else if (arr[mid] < val) {
    return binaryExit(mid+1, high, val, arr);
  } else { //value is in lower half of array
    return binaryExit(low, mid-1, val, arr);
  }
}
