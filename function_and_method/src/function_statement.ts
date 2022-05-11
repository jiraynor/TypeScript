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

let printMe2: (arg0: string, arg1: number) => void = function (
  name: string,
  age: number
): void {};

/*
 *  타입 별칭
 */

// type alias : type 키워드를 이용해 별칭 생성

// type 새로운 타입 = 기존 타입

type stringNumberFunc = (arg0: string, arg1: number) => void;
let f: stringNumberFunc = function (a: string, b: number): void {};
let g: stringNumberFunc = function (c: string, d: number): void {};

/*
 *  undefined 주의 사항
 */

// undefined를 고려하지 않은 코드

// interface INameable {
//     name: string;
// }
// function getName(o: INameable) {return o.name}

// let n = getName(undefined)  // t2345 오류 발생
// console.log(n);

// undefined를 고려한 코드

interface INameable {
  name: string;
}
function getName(o: INameable | null | undefined) {
  return o != undefined ? o.name : "unknown name";
}

let n = getName(undefined);
console.log(n);
console.log(getName({ name: "Jack" }));
