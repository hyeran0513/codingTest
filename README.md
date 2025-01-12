# 코딩 테스트 준비 기록

혼자서 프로그래머스에서 문제를 푸는 것만으로는 부족함을 느끼고,<br/> 
인프런의 **"자바스크립트 알고리즘 문제풀이 입문 (코딩테스트 대비)"** 강의를 수강하기로 했습니다.<br/>
강의에서 배운 내용을 바탕으로 문제를 풀이하고, 이를 기록하며 코딩 테스트 준비 과정을 깃허브에 남기고 있습니다.

# 개념 정리

## - 스택/큐
스택: LIFO (Last In First Out)<br/><br/>
![Group 2](https://github.com/user-attachments/assets/b08bbe33-b9fc-4bd7-b7a5-4c7dd4b307ce)
<br/>

| 명령어          | 설명                                                     |
|-----------------|----------------------------------------------------------|
| **push()**     | 스택의 **맨 위에 요소를 추가** |
| **pop()**       | 스택의 **맨 위 요소를 제거**하고, 제거된 값을 반환 |
| **peek()** 또는 **top()** | 스택의 맨 위 요소를 제거하지 않고 반환 |
| **isEmpty()**   | 스택이 비어 있는지 확인 |

큐: FIFO (First In First Out)<br/><br/>
![Group 3](https://github.com/user-attachments/assets/4da090a1-d9e5-4e8c-9747-af319adb6fb4)
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
`% 10`: 각 자리 숫자를 하나씩 분리할 때 쓰는 테크닉

```
// 예) tmp: 128
// 몫(tmp / 10)이 0이 될 때까지

tmp % 10 → 8
tmp % 10 → 2
tmp % 10 → 1
```
