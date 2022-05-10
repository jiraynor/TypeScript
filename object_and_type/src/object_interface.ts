/*
 *  인터페이스 선언문
 */

// 인터페이스 : 객체의 타입을 정의하는 것
//
// interface 인터페이스 이름 {
//     속성 이름[?]: 속성 타입[.///]
// }

interface IPerson {
  name: string;
  age: number;
}
let good: IPerson = { name: "Jack", age: 32 };

// age 속성이 없으므로 오류
// let bad1: IPerson = { name: "Jack" };
// name 속성이 없으므로 오류
// let bad2: IPerson = { age: 32 };
// name과 age 속성이 없으므로 오류
// let bad3: IPerson = {};
// etc 속성이 있어서 오류
// let bad4: IPerson = { name: "Jack", age: 32, etc: true };

/*
 *  선택 속성 구문
 */

// 선택 속성 : 필수가 아닌 속성, ? 를 붙여서 만듦

interface IPerson2 {
  name: string; // 필수 속성
  age: number; // 필수 속성
  etc?: boolean; // 선택 속성
}
let good1: IPerson2 = { name: "Jack", age: 32 };
let good2: IPerson2 = { name: "Jack", age: 32, etc: true };
