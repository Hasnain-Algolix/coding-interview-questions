const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

// Solution - 1
// Time O(n^2) | Space O(1)
const twoNumberSum = (arr, targetSum) => {
  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const secondNum = arr[j];
      const sum = firstNum + secondNum;
      if (sum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
};

// Solution - 2
// Time O(n) | Space O(n)
const twoNumberSum2 = (array, targetSum) => {
  const numbers = {};
  for (const num of array) {
    const potentialSum = targetSum - num;
    if (potentialSum in numbers) {
      return [potentialSum, num];
    } else {
      numbers[num] = true;
    }
  }
  return [];
};

// Formula
// x + y = targetSum
// y = targetSum - x
// };

// Solution - 3
// O(n log n)
const twoNumberSum3 = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
};

const result = twoNumberSum(arr, targetSum);
const result2 = twoNumberSum2(arr, targetSum);
const result3 = twoNumberSum3(arr, targetSum);
// console.log(result);
// console.log(result2);
// console.log(result3);
