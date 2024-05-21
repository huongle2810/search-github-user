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
