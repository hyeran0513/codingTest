function solution(str) {
  let answer = "YES";

  str = str.toLowerCase();
  
  // let len = str.length;

  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (str[i] !== str[len - i - 1]) {
  //     return "NO";
  //   }
  // }

  if (str.split("").reverse().join("") !== str) {
    return "NO";
  }

  return answer;
}

let str = "gooG";
console.log(solution(str));