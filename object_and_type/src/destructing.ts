/*
 *  구조화
 */

// 관련된 정보를 묶어 새로운 타입으로 표현하는 것

// 구조화가 필요한 코드
let personName: string = 'Jack';
let personAge: number = 32;

let companyName: string = 'Samsung, Inc';
let companyAge: number = 43;

// 구조화한 코드
export interface IPerson {
  name: string;
  age: number;
}

export interface ICompany {
  name: string;
  age: number;
}

let jack: IPerson = { name: 'Jack', age: 32 },
  jane: IPerson = { name: 'jane', age: 32 };

let samsung: ICompany = { name: 'samsung', age: 43 },
  apple: ICompany = { name: 'apple', age: 44 };

/*
 *  비구조화
 */

// 구조화된 데이터를 분해하는 것

/*
 *  비구조화 할당
 */

// { 속성, 속성 } = 구조화된 객체

let { name, age } = jack;
console.log(name, age);

/*
 *  잔여 연산자
 */

// 비구조화에서 ... 연산자를 이용하여 비구조화에서 제외된 나머지 속성을 가져옴

let address: any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street, 2 Floor ABC building'
};

const { country, city, ...detail } = address;
console.log(detail);

/*
 *  전개 연산자
 */

// 비구조화가 아닌 코드에서 ... 연산자를 이용하면 전개 연산자라 하며 객체의 속성을 '전개'하여 새로운 객체로 만듦

let part1 = { name: 'jane' },
  part2 = { age: 22 },
  part3 = { city: 'Seoul', country: 'Kr' };

let merged = { ...part1, ...part2, ...part3 };
console.log(merged);
