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
