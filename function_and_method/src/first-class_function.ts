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
