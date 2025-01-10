// forEach, map, filter, reduce

a = [10, 1,, 12, 13, 14, 15];

// a.forEach(function(v, i) {
//   console.log(v, i, this);
// }, [1, 2]);

// let answer = a.map(function(v, i) {
//   if (v % 2 === 0) {
//     return v;
//   }
// }, [1, 2]);

// console.log(answer);

// let answer = a.filter(function(v, i) {
//   return v % 2 == 0;
// }, [1, 2]);

// console.log(answer);

let answer = a.reduce(function(acc, v) {
  return acc + v;
}, 0);

console.log(answer);