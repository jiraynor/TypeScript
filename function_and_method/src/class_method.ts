/*
 *  function 함수와 this 키워드
 */

// function 으로 만든 함수에만 this 키워드 사용 가능, 화살표 함수에서는 사용 불가능

/*
 *  메서드
 */

// 타입스크립트에서 메서드는 function으로 만든 함수 표현식을 담고 있는 속성

class A {
  value: number = 1;
  method: () => void = function (this: A): void {
    console.log(`value: ${this.value}`);
  };
}

let a: A = new A();
a.method();

/*
 *  클래스 메서드 구문
 */

// 타입스크립트는 함수 표현식을 탐는 속성은 function 키워드를 생략할 수 있게하는 단축 구문을 제공

class B {
  constructor(public value: number = 1) {}
  method(): void {
    console.log(`value: ${this.value}`);
  }
}

let b: B = new B(2);
b.method();

/*
 *  정적 메서드
 */

// static 수정자를 속성 앞에 붙여 정적 메서드 정의

class C {
  static whoAreYou(): string {
    return `I am class C`;
  }
}

class D {
  static whoAreYou(): string {
    return `I am class D`;
  }
}

console.log(C.whoAreYou());
console.log(D.whoAreYou());
