/*
 *  클래스 선언문
 */

// class 클래스 이름 {
//     [private | protect | public] 속성 이름[?]: 속성 타입[...]
// }

// ts2564 에러 발생
// class Person1 {
//   name: string;
//   age?: number;
// }

// let jack1: Person1 = new Person1();
// jack1.name = 'Jack';
// jack1.age = 32;
// console.log(jack1);

/*
 *  생성자
 */

// constructor : 객체 생성시 실행되는 함수

class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2('Jack', 32);
console.log(jack2);

// 접근 제한자를 포함하지 않았을 때
// Person1의 ts2564에러를 없에는 방법
class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3('Jack', 32);
console.log(jack3);

/*
 *  인터페이스 구현
 */

// implements : 구현할 인터페이스 상속

// class 클래스 이름 implements 인터페이스 이름 {
//     ...
// }

interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person4('Jack', 32);
console.log(jack4);

/*
 *  추상 클래스
 */

// abstract : 추상화 할 클래스, 속성 혹은 메서드 정의

// abstract class 클래스 이름 {
//     abstract 속성 이름: 속성 타입;
//     abstract 메서드 이름() {}
// }

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

/*
 *  클래스 상속
 */

// extends : 상속할 인터페이스 상속

// class 상속 클래스 extends 부모 클래스 { ... }
// super : 부모 클래스의 생성자

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5: Person5 = new Person5('Jack', 32);
console.log(jack5);
