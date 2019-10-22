function split (arr) {
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return [left, right]
   }
   function merge(left, right) {
    let sorted = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sorted.push(left[leftIndex])
        leftIndex ++
      } else {
        sorted.push(right[rightIndex])
        rightIndex ++
      }
    }
    return sorted = sorted.concat( leftIndex < rightIndex ? left[leftIndex] : right[rightIndex] )
   }