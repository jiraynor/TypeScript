/*
 *  화살표 함수
 */

// const 함수 이름 = (매개변수1: 타입1, 매개변수2: 타입2[,...]): 반환 타입 => 함수 몸통

// 실행문 방식 몸통
const arrow1 = (a: number, b: number): number => {
  return a + b;
};

// 표현식 문 방식 몸통
const arrow2 = (a: number, b: number): number => a + b;

/*
 *  표현식 문 스타일의 화살표 함수 구현
 */

const isGreater = (a: number, b: number): boolean => {
  return a > b;
};

const isGreater2 = (a: number, b: number): boolean => a > b;
