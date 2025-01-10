function solution(day, arr) {
  let answer = 0;

  for (let x of arr) {
    // 일의 자리 구하기
    if (x % 10 === day) {
      answer++;
    }
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));