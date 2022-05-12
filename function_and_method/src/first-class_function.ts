/*
 *  콜백 함수
 */

// 매개 변수 형태로 동작하는 함수

const fn2 = (callback: () => void): void => callback();

const init = (callback: () => void): void => {
  console.log("default initialization finished.");
  callback();
  console.log("all initialization finished.");
};

init(() => console.log("custom initialization finished."));

/*
 *  중첩 함수
 */

// 함수 표현식으로 함수 안에 다른 함수를 중첩

const calc = (value: number, cb: (arg: number) => void): void => {
  let add = (a: number, b: number) => a + b;
  function multiply(a: number, b: number) {
    return a * b;
  }

  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));

/*
 *  고차 함수와 클로저, 부분 함수
 */

const add1 = (a: number, b: number): number => a + b; // 보통 함수
const add2 =
  (a: number): ((arg: number) => number) =>
  (b: number): number =>
    a + b; // 고차 함수

const result2 = add2(1)(2);

// 쉬운 표현

type NumberToNumberFunc = (arg: number) => number;

const add3 = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b; // 클로저
  };
  return _add;
};

let fn3: NumberToNumberFunc = add3(1);

let result3 = fn3(2);
console.log(result3); // 3
console.log(add3(1)(2)); // 3

const multiply2 = (a: number) => (b: number) => (c: number) => a * b * c;
multiply2(1)(2)(3);

// 부분 함수 : 값이 완성되지 않은 함수
multiply2(1);
multiply2(1)(2);
