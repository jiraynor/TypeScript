/*
 *  배열
 */

// 자바스크립트에서 배열 선언 방법
// const 배열 이름 = new Array(배열길이);

const array = new Array();
array.push(1);
array.push(2);
array.push(3);
console.log(array);

/*
 *  [] 단축 구문
 */

// 자바스크립트는 []라는 단축 구문을 제공

const numbers = [1, 2, 3];
const strings = ["Hello", "World"];
console.log(numbers, strings);

/*
 *  배열 = 객체
 */

// 배열은 Array 클래스의 인스턴스
// 배열은 객체이기 때문에 메서드 사용 가능

const a = [1, 2, 3];
const o = { name: "Jack", age: 32 };
console.log(Array.isArray(a), Array.isArray(o));

/*
 *  배열의 타입
 */

// 배열: 타입[]

const numberArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "World"];

type IPerson = { name: string; age?: number };
const personArray: IPerson[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];
