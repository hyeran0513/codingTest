function solution(a, b, c) {
  let answer = "YES", max = 0;
  let sum = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  // 나머지 짧은 막대의 합이 max보다 작거나 같으면 NO
  if ((sum - max) <= max) {
    answer = "NO";
  }

  return answer;
}

console.log(solution(6, 7, 11));