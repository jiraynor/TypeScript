/*
 *  함수 선언문
 */

// function 키워드와 => 기호로 선언 가능

// function 함수 이름(매개변수1: 타입1, 매개변수2: 타입2[,...]): 반환값 타입 {
//     함수 몸통
// }

function add(a: number, b: number): number {
  return a + b;
}

/*
 *  void 타입
 */

// 값을 반환하지 않는 함수의 반환 타입

function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}

/*
 *  함수 시그니처
 */

// 함수의 타입

let printMe2: (name: string, age: number) => void = function (
  name: string,
  age: number
): void {};
