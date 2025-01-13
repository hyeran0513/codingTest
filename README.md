# 코딩 테스트 준비 기록

혼자서 프로그래머스에서 문제를 푸는 것만으로는 부족함을 느끼고,<br/> 
인프런의 **"자바스크립트 알고리즘 문제풀이 입문 (코딩테스트 대비)"** 강의를 수강하기로 했습니다.<br/>
강의에서 배운 내용을 바탕으로 문제를 풀이하고, 이를 기록하며 코딩 테스트 준비 과정을 깃허브에 남기고 있습니다.

# 개념 정리

## - 스택/큐
스택: LIFO (Last In First Out)<br/><br/>
![Group 38](https://github.com/user-attachments/assets/f0b38d53-7664-4e78-9608-fcbcc625b2a6)
<br/>

| 명령어          | 설명                                                     |
|-----------------|----------------------------------------------------------|
| **push()**     | 스택의 **맨 위에 요소를 추가** |
| **pop()**       | 스택의 **맨 위 요소를 제거**하고, 제거된 값을 반환 |
| **peek()** 또는 **top()** | 스택의 맨 위 요소를 제거하지 않고 반환 |
| **isEmpty()**   | 스택이 비어 있는지 확인 |

큐: FIFO (First In First Out)<br/><br/>
![Group 40](https://github.com/user-attachments/assets/9c339f47-4ac5-401e-a02e-9556a039a10b)
<br/>

| **명령어**      | **설명**                                                    |
|-----------------|-------------------------------------------------------------|
| **push()**     | 큐의 **맨 뒤에 요소를 추가** (enqueue)                   |
| **shift()**     | 큐의 **맨 앞 요소를 제거**하고, 제거된 값을 반환 (dequeue)    |
| **front()**     | 큐의 맨 앞 요소를 제거하지 않고 반환                |
| **isEmpty()**   | 큐가 비어 있는지 확인                               |
| **length**      | 큐의 현재 길이를 반환                                |

## - 정렬
선택정렬: 주어진 리스트에서 가장 작은 요소를 찾아서 맨 앞의 요소와 교환하는 과정을 반복하여 정렬 <br/><br/>
![Group 25](https://github.com/user-attachments/assets/86b0fe3e-5b0f-416b-8d25-a182d0587321)

버블정렬: 인접한 두 요소를 비교하여 정렬하는 단순한 정렬 알고리즘 <br/><br/>
![Group 26](https://github.com/user-attachments/assets/7c4e0f8f-a23e-4909-90b6-8571224d1e63)

삽입정렬: 현재 요소를 그보다 앞쪽의 정렬된 부분과 비교하며 적절한 위치에 삽입하여 정렬을 완성하는 알고리즘 <br/><br/>
![Group 27](https://github.com/user-attachments/assets/2ab12c81-946b-49c8-849f-cd7c7f824b1e)

이분검색: 정렬된 배열에서 탐색 범위를 절반씩 줄이며 원하는 값을 효율적으로 찾는 알고리즘 <br/><br/>
![Group 28](https://github.com/user-attachments/assets/194b2ae4-76d1-4e13-b85c-8e37be008d8a)

## 완전탐색
### 1. 자리수 분리
`% 10`: 숫자의 일의 자리 가져오기 <br/>
`x = Math.floor(x / 10)`: 숫자를 한 자리 줄이기

```
// 예) tmp: 128
// 몫(tmp / 10)이 0이 될 때까지

tmp % 10 → 8
tmp % 10 → 2
tmp % 10 → 1
```

### 2. 숫자 뒤집기
`res * 10 + tmp`: 숫자를 거꾸로 만들기

```
let x = 128;
let res = 0;

while (X) {
  let tmp = x % 10;
  res = res * 10 + tmp;
  x = parseIng(x / 10);
}

console.log(res); // 출력: 821
```

### 3. 소수 판별
소수를 구할 때 **제곱근까지만 검사해도 됩니다**
그 이유는 **약수의 대칭성** 때문 🌟

한 쌍의 약수만 확인하면 나머지 쌍도 알 수 있기 때문에<br/> 
**제곱근까지만 검사**해도 n의 약수가 존재하는지 알 수 있습니다.

![Group 29](https://github.com/user-attachments/assets/fed7ce84-8df3-45d2-8c71-eafbcf9cccb2)

```
function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }

    return true;
  }
}
```

---

## 그래프와 탐색 (DFS, BFS)
G(V,E): 노드와 노드 사이의 연결 관계를 나타내는 구조
V: 노드 / E: 간선
1. 무방향 그래프 <br/><br/>
![Group 32](https://github.com/user-attachments/assets/4f8224fd-1039-4905-bcb1-b7e9971a599e)

```
a b
1 2
1 3
2 4
3 4
2 5

graph[a][b] = 1;
graph[b][a] = 1;
```

![Group 33](https://github.com/user-attachments/assets/1ccda6fd-8e20-49d6-9ac1-2d54a1d04473)

---

2. 방향 그래프 <br/><br/>
![Group 34](https://github.com/user-attachments/assets/e3a993ad-70a3-452f-aa91-028b22c10518)

```
a b
1 2
1 3
3 4
4 2
2 5

// 행 → 열
graph[a][b] = 1;
```

![Group 35](https://github.com/user-attachments/assets/0c1e46d4-9baa-4b79-a5c1-896391f5792d)

3. 가중치 방향 그래프 <br/> <br/>
![Group 36](https://github.com/user-attachments/assets/199c2f23-5252-4a24-8a99-dc58fc1f506b)

```
a b c
1 2 2
2 5 5
4 2 2

graph[a][b] = c;
```

![Group 37](https://github.com/user-attachments/assets/08126cb9-7e9a-49ed-b83c-d02bb1c34be0)
