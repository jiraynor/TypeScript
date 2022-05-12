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
