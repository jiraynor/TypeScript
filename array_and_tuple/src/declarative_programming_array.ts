/*
 *  명령형 프로그래밍
 */

// 프로그램 기본 형태
// 1. 입력 데이터 얻기
// 2. 입력 데이터를 가공해 출력 데이터 생성
// 3. 출력 데이터 출력

// 여러 개의 데이터를 대상으로 할 때는 for 문을 사용

// for( ; ; ) {
//     입력 데이터 얻기
//     입력 데이터를 가공해 출력 데이터 생성
//     출력 데이터 출력
// }

// 선언형 프로그래밍에서 여러 개의 데이터를 다룰 때

// 문제를 푸는 데 필요한 모든 데이터 배열에 저장
// 입력 데이터 배열을 가공해 출력 데이터 배열 생성
// 출력 데이터 배열에 담긴 아이템 출력

/*
 *  1부터 100까지 더하기 문제
 */

// 명령형 프로그래밍

let sum = 0;
for (let val = 1; val <= 100; ) sum += val++;
console.log(sum);

// 선언형 프로그래밍

let numbers4: number[] = range(1, 100 + 1); // array.ts에서 선언한 range
console.log(numbers4);

// 선언형에서는 fold 함수를 사용해야 함

/*
 *  fold: 배열 데이터 접기
 */

// fold 함수는 T[] 타입 배열을 가공해 T 타입 결과를 만들어 줌

const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T
) => {
  let result: T = initValue;
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

let result2 = fold(numbers4, (result, value) => result + value, 0);
console.log(result2);

/*
 *  1에서 100까지 홀수의 합 구하기
 */

// 명령형 프로그래밍

let oddSum = 0;
for (let val = 1; val <= 100; val += 2) oddSum += val;
console.log(oddSum);

/*
 *  filter: 조건에 맞는 아이템만 추려내기
 */

// 선언형 프로그래밍
// 조건에 맞는 값만 추려내는 기능

const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = [];
  for (let i: number = 0; i < array.length; ++i) {
    const value = array[i];
    if (callback(value, i)) result = [...result, value];
  }
  return result;
};

const isOdd = (n: number): boolean => n % 2 !== 0;
const result3 = fold(
  filter(numbers4, isOdd),
  (result, value) => result + value,
  0
);
console.log(result3);

/*
 *  1에서 100까지 짝수의 합 구하기
 */

// 명령형 프로그래밍

let evenSum = 0;
for (let val = 0; val <= 100; val += 2) evenSum += val;
console.log(evenSum);

// 선언형 프로그래밍
const isEven = (n: number): boolean => n % 2 === 0;
const result4 = fold(
  filter(numbers4, isEven),
  (result, value) => result + value,
  0
);
console.log(result4);

/*
 *  1^2 + 2^2 + ... + 100^2 구하기
 */

// 명령형 프로그래밍

let squareSum = 0;
for (let val = 1; val <= 100; ++val) squareSum += val * val;
console.log(squareSum);

/*
 *  map: 배열 데이터 가공
 */

// 어떤 값을 또 다른 값으로 만들어 주는 기능

const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = [...result, callback(value, i)];
  }
  return result;
};

let result5 = fold(
  map(numbers4, (value) => value * value),
  (result, value) => result + value,
  0
);

console.log(result5);
