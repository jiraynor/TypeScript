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

let bad1: IPerson = { name: "Jack" };
let bad2: IPerson = { age: 32 };
let bad3: IPerson = {};
let bad4: IPerson = { name: "Jack", age: 32, etc: true };
