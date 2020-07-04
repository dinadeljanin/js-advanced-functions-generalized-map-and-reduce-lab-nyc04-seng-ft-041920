// Add your functions here
function map(arr, fn) {
  return arr.map(item => fn(item))
}

function reduce(arr, fn, int=0) {
  if (!int) {
    return arr.reduce((accum, item) => fn(accum, item))
  } else {
    return arr.reduce((accum, item, int) => fn(accum, item), int)
  }
}
