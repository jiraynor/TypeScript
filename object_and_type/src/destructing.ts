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
