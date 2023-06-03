const arr = [-7, -5, -4, 3, 6, 8, 9];

// Time = O(n log n)
//  Space = O (n)
// Solution 1
const sortedSquaredArray1 = (arr) => {
  const output = [];
  for (const value of arr) {
    const square = value * value;
    output.push(square);
  }
  const sortedOutput = output.sort((a, b) => a - b);
  return sortedOutput;
};

const result1 = sortedSquaredArray1(arr);
console.log(result1);

// Time = O(n)
//  Space = O (n)
// Solution 2
const sortedSquaredArray = (arr) => {
  const sortedSquares = [];
  let smallValueIdx = 0;
  let largeValueIdx = arr.length - 1;
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    let smallerValue = arr[smallValueIdx];
    let largerValue = arr[largeValueIdx];

    if (Math.abs(smallerValue) >= Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largeValueIdx--;
    }
  }

  return sortedSquares;
};

const result = sortedSquaredArray(arr);
console.log(result);
