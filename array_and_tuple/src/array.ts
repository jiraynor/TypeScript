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

/*
 *  문자열과 배열 간 변환
 */

// 타입스크립트는 문자 타입이 따로 존재하지 않아 문자열을 문자의 배열로 인식하지 않음
// 문자열을 가공하려면 String 클래스의 split 메서드를 사용해 문자열을 배열로 전환해야 함

// split(구분자: string): string[]

const split = (str: string, delim: string = ""): string[] => str.split(delim);

console.log(split("hello"), split("h_e_l_l_o", "_"));

// string[] 타입의 배열을 다시 string으로 변환하기 위해 Array 클래스의 join 메서드 사용

// join(구분자: string): string

const join = (strArray: string[], delim: string = ""): string =>
  strArray.join(delim);

console.log(
  join(["h", "e", "l", "l", "o"]),
  join(["h", "e", "l", "l", "o"], "_")
);

/*
 *  인덱스 연산자
 */

// [인덱스] : 배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 때 사용

const numbers2: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers2.length; i++) {
  const item: number = numbers2[i];
  console.log(item);
}

/*
 *  배열의 비구조화 할당
 */

const array2: number[] = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = array2;
console.log(first, second, third, rest);

/*
 *  for...in 문
 */

// for...in 문은 보통 객체를 대상으로 하지만 배열 또한 객체이기 때문에 사용 가능 - 키값(인덱스)를 반환

// for(let 변수 in 객체) {
//     ...
// }

const names = ["Jack", "Jane", "Steve"];

for (let i in names) {
  const name = names[i];
  console.log(`[${i}]: ${name}`);
}

/*
 *  for...of 문
 */

// for...in과는 다르게 아이템을 반환

// for(let 변수 of 객체) {
//   ...
// }

for (let name of names) console.log(name);

/*
 *  제네릭 방식 타입
 */

// 타입을 고정시키지않고 T와 같은 일종의 변수로 취급하는 것

const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;

const numArray: number[] = [1, 2, 3];
const strArray2: string[] = ["Hello", "World"];

type IPerson2 = { name: string; age?: number };

const personArray2: IPerson2[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray2),
  arrayLength(personArray2),
  isEmpty([]),
  isEmpty([1])
);

/*
 *  제네릭 함수의 타입 추론
 */

// 타입 변수가 생략된 제네릭 함수를 만나면 타입 추론을 통해 생략된 타입을 찾아냄

const identity = <T>(n: T): T => n;
console.log(identity<boolean>(true), identity(true));

/*
 *  전개 연산자
 */

// 전개 연산자를 사용해 두 배열과 특정 값을 동시에 결합할 수 있음

const array3: number[] = [1];
const array4: number[] = [2, 3];

const mergedArray: number[] = [...array3, ...array4, 4];

console.log(mergedArray);

/*
 *  range 함수 구현
 */

// 전개 연산자를 사용하여 ramda 외부 패키지의 range 구현

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

const numbers3: number[] = range(1, 9 + 1);
console.log(numbers3);
