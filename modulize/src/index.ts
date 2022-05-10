// import { 심벌 목록 } from '파일의 상대경로'
import Person, { makePerson } from "./person/Person";
import IPerson from "./person/IPerson";

const testMakePerson = (): void => {
  let jane: IPerson = makePerson("Jane");
  let jack: IPerson = makePerson("Jack");
  console.log(jane, jack);
};

testMakePerson();
