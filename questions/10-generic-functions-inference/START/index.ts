// add types to this function
function map(arr, func) {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));
