/*
 *  배열
 */

// 자바스크립트에서 배열 선언 방법
// let 배열 이름 = new Array(배열길이);

let array = new Array();
array.push(1);
array.push(2);
array.push(3);
console.log(array);

/*
 *  [] 단축 구문
 */

// 자바스크립트는 []라는 단축 구문을 제공

let numbers = [1, 2, 3];
let strings = ["Hello", "World"];
console.log(numbers, strings);

/*
 *  배열 = 객체
 */

// 배열은 Array 클래스의 인스턴스
// 배열은 객체이기 때문에 메서드 사용 가능

let a = [1, 2, 3];
let o = { name: "Jack", age: 32 };
console.log(Array.isArray(a), Array.isArray(o));
