/*
 *  매개변수 기본값 지정
 */

// 디폴트 매개변수 (default parameter): 함수 호출 시 인수를 전달하지 않을 때 기본값

// (매개변수: 타입 = 매개변수 기본값)

type Person = { name: string; age: number };

const makePerson = (name: string, age: number = 10): Person => {
  const person = { name: name, age: age };
  return person;
};

console.log(makePerson("Jack"));
console.log(makePerson("Jane", 33));

/*
 *  객체 생성 시 값 부분을 생략
 */

// 단축 구문: 변수 명과 객체의 속성명이 값을 때 속성값 부분을 생략

const makePerson2 = (name: string, age: number = 10): Person => {
  const person = { name, age };
  return person;
};

console.log(makePerson2("Jack"));
console.log(makePerson2("Jane", 33));

/*
 *  객체를 반환하는 화살표 함수
 */

// 객체를 반환하기 위해선 복합 실행문의 {}와 객체의 {}를 구분지어야 함

const makePerson3 = (name: string, age: number = 10): Person => ({ name, age });

console.log(makePerson3("Jack"));
console.log(makePerson3("Jane", 33));

/*
 *  매개변수에 비구조화 할당문 사용
 */

const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`);

printPerson({ name: "Jack", age: 10 });

/*
 *  색인 키와 값으로 객체 만들기
 */

// 색인 키 : {[key]: value} 에서 [key] 부분의 값으로 속성명을 부여
// 색인 기능 타입 : {[key: 타입]: value}

type KeyValueType = {
  [key: string]: string;
};

const makeObject = (key: string, value: string): KeyValueType => ({
  [key]: value,
});

console.log(makeObject("name", "Jack"));
console.log(makeObject("firstName", "Jane"));
