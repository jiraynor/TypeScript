/*
 *  함수 = 객체
 */

// 모든 함수는 Function 클래스의 인스턴스 임

let addFn = new Function("a", "b", "return a + b");
let result = add(1, 2);
console.log(result);

// 함수 표현식 : function(매개 변수1, 매개 변수2[,...]) {}
// 함수 표현식을 이용한 함수 선언
let addFn2 = function (a: number, b: number) {
  return a + b;
};

console.log(addFn2(1, 2));

/*
 *  일등 함수
 */

// 일등 함수 : 함수와 변수를 구분하지 않음

let addFn3 = function (a: number, b: number) {
  return a + b;
};
addFn3 = function (a: number, b: number) {
  return a - b;
};

/*
 *  함수 호출 연산자
 */

// () 연산자로 함수 호출

let functionExpression = function (a: number, b: number) {
  return a + b;
};
let value = functionExpression(1, 2);

/*
 *  익명 함수
 */

// 함수 표현식 = 익명 함수

let value2 = (function (a: number, b: number) {
  return a + b;
})(1, 2);

// 익명 함수 생성 후 함수 호출 연산자를 바로 불러 바로 실행 후 value2에 대입
