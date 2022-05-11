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
