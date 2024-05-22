const unionOverlapItems = (array: { start: number; end: number }[]) => {
  const sortedArr = array.sort((a, b) => a.start - b.start);
  let index = 0;
  const result: { start: number; end: number }[] = [];
  return sortedArr.reduce((preVal, curVal, currentIndex) => {
    if (currentIndex === 0) {
      result.push(curVal);
    } else {
      if (curVal.start > result[index].end) {
        index++;
        result[index] = curVal;
      } else if (
        curVal.start <= result[index].end &&
        curVal.end > result[index].end
      ) {
        result[index].end = curVal.end;
      }
    }
    return result;
  }, result);
};

const overlapItems: { start: number; end: number }[] = [
  { start: 10, end: 30 },
  { start: 55, end: 65 },
  { start: 35, end: 50 },
  { start: 20, end: 40 },
  { start: 60, end: 70 },
  { start: 77, end: 80 },
];

const result = unionOverlapItems(overlapItems);
console.log(result);

// The idea is that:
// 1. Sorted array asc by start value.
// 2. Since array has been sorted by asc
//    so we always make sure that the 1st element is a start value of first element in resulted array.
// 3. We need to determine end of 1st element in resulted array
//    so we could use end value of 1st element in sorted array is as an end value of 1st element in resulted array.
// 4. To perform the resulted array with none overlapping value,
//    we should figure out that how is an none overlapping value.
// 5. None overlapping value means: start value and end value of next element should greater than end value of 1st element.
// 6. Defined index variable to keep track the index of element in resulted array.
// 7. Loop the sorted array and we have 2 scenarios:
//    - if the start value of current element is greater than the end value of the resulted array at index
//      (index to keep track the position of element in resulted array) => increase the index value and
//      set new value at updated index in resulted array.
//    - if the start value of current element is less than the end value at index of resulted array and
//      the end value of current element is greater than the end value at index of resulted array
//      => we need to update the end value at index by end value of current element.
