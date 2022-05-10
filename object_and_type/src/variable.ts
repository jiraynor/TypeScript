/*
 *  타입스크립트 기본 제공 타입
 */

// 자바스크립트 타입 : 타입스크립트 타입
// Number  : number
// Boolean : boolean
// String  : string
// Object  : object

/*
 *  let과 const 키워드
 */

// let으로 선언한 변수는 코드에서 값을 수시로 변경할 수 있음
// let 변수 이름 [= 초깃값]

// const로 변수를 선언할 때는 반드시 초깃값을 명시해야함
// const 변수는 코드에서 변숫값이 절대 변하지 않음
// const 변수 이름 = 초깃값

/*
 *  타입 주석
 */

// 타입 주석 : 타입 명시
// let 변수 이름: 타입 [= 초깃값]
// const 변수 이름: 타입 = 초깃값

let n1: number = 1;
let b1: boolean = true;
let s1: string = "hello";
let o1: object = {};

// 타입 불일치
// n1 = 'a';
// b1 = 1;
// s1 = false;

// 타입 일치
o1 = { name: "Jack", age: 32 };

/*
 *  타입 추론
 */

// = 오른쪽 값에 따라 변수의 타입 지정

let n2 = 1; // n2의 타입을 number로 판단
let b2 = true; // b2의 타입을 boolean으로 판단
let s2 = "hello"; // s2의 타입을 string으로 판단
let o2 = {}; // o2의 타입을 object로 판단

/*
 *  any 타입
 */

// 자바스크립트와 호환을 위해 any라는 이름의 타입 제공
// 타입과 무관하게 어떤 종류의 값도 저장할 수 있음

let a: any = 0;
a = "hello";
a = true;
a = {};

/*
 *  undefined 타입
 */

// 타입스크립트에서 undefined는 타입이기도 하면서 값이기도 함

let u: undefined = undefined;
// Type '1' is not assignable to type 'undefined' 오류 발생
// u = 1;

/*
 *  템플릿 문자열
 */

// 문자열을 ``로 묶고 변수를 ${} 기호로 묶는 형태
// `${변수 이름}`

let count = 10,
  message = "Your count";
let result = `${message} is ${count}`;
console.log(result); // Your count is 10
