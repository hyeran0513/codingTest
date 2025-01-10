function solution(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));