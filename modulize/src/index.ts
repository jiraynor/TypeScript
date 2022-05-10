// import { 심벌 목록 } from '파일의 상대경로'
import Person, { makePerson } from "./person/Person";
import IPerson from "./person/IPerson";
// Chance 클래스 하나만 export default 형태로 제공
import Chance from "chance";
// 다양한 기능을 export
import * as R from "ramda";

const testMakePerson = (): void => {
  let jane: IPerson = makePerson("Jane");
  let jack: IPerson = makePerson("Jack");
  console.log(jane, jack);
};

testMakePerson();

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);
console.log(persons);
